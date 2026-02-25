import { useState, useRef, useCallback } from 'react';
import type { Message, Task } from '../types';

export type AIStatus = 'ready' | 'thinking' | 'error';

export interface DisplayMessage {
  id: number;
  role: 'user' | 'assistant' | 'thinking';
  content: string;
}

function todayStr(): string {
  return new Date().toISOString().split('T')[0];
}

function isOverdue(t: Task): boolean {
  return !t.done && !!t.due && t.due < todayStr();
}

function buildContext(tasks: Task[]): string {
  if (!tasks.length) return 'The user currently has no tasks.';
  const lines = tasks.map(t => {
    const status = t.done ? 'DONE' : isOverdue(t) ? 'OVERDUE' : 'PENDING';
    const due = t.due ? ` | Due: ${t.due}` : '';
    return `- [${status}] "${t.title}" | Priority: ${t.priority}${due}`;
  });
  const done = tasks.filter(t => t.done).length;
  const overdue = tasks.filter(t => isOverdue(t)).length;
  return `Current tasks (${tasks.length} total, ${done} done, ${overdue} overdue):\n${lines.join('\n')}`;
}

export function useAIAgent() {
  // Start empty — AIPanel renders the translated initial message itself
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
  const [status, setStatus] = useState<AIStatus>('ready');
  const msgHistory = useRef<Message[]>([]);
  const nextId = useRef(1);

  const appendMsg = useCallback((msg: Omit<DisplayMessage, 'id'>): number => {
    const id = nextId.current++;
    setMessages(prev => [...prev, { ...msg, id }]);
    return id;
  }, []);

  const removeMsg = useCallback((id: number) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  }, []);

  const sendMessage = useCallback(
    async (
      userText: string,
      tasks: Task[],
      apiKey: string,
      noApiKeyMsg: string
    ): Promise<{ title: string; priority: string; due: string } | null> => {
      if (!userText.trim()) return null;

      appendMsg({ role: 'user', content: userText });
      msgHistory.current.push({ role: 'user', content: userText });

      if (!apiKey) {
        appendMsg({ role: 'assistant', content: noApiKeyMsg });
        msgHistory.current.pop();
        return null;
      }

      setStatus('thinking');
      const thinkId = appendMsg({ role: 'thinking', content: '' });

      const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const system = `You are an intelligent AI task management agent embedded in a personal todo app.

${buildContext(tasks)}

Today: ${today}

Your capabilities:
1. Recommend what tasks to work on next (consider priority + due dates)
2. Summarize and analyze workload
3. Add tasks on behalf of the user — when doing so, output exactly ONE line in this format BEFORE your explanation:
   ADD_TASK:{"title":"...","priority":"high|medium|low","due":"YYYY-MM-DD or empty string"}
4. Answer questions about the tasks

Keep responses concise, friendly, and actionable.`;

      try {
        const res = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true',
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-6',
            max_tokens: 1024,
            system,
            messages: msgHistory.current.slice(-12),
          }),
        });

        removeMsg(thinkId);

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          const msg = (err as { error?: { message?: string } }).error?.message || `HTTP ${res.status}`;
          appendMsg({ role: 'assistant', content: `❌ **API error:** ${msg}` });
          msgHistory.current.pop();
          setStatus('error');
          return null;
        }

        const data = (await res.json()) as { content: { text: string }[] };
        const reply = data.content[0].text;

        const match = reply.match(/ADD_TASK:(\{[^\n\r]+\})/);
        let taskToAdd: { title: string; priority: string; due: string } | null = null;
        if (match) {
          try {
            taskToAdd = JSON.parse(match[1]);
          } catch {
            // ignore
          }
        }

        const display = reply.replace(/ADD_TASK:\{[^\n\r]+\}\n?/g, '').trim();
        appendMsg({ role: 'assistant', content: display });
        msgHistory.current.push({ role: 'assistant', content: reply });
        setStatus('ready');

        return taskToAdd;
      } catch (err) {
        removeMsg(thinkId);
        const message = err instanceof Error ? err.message : String(err);
        appendMsg({ role: 'assistant', content: `❌ **Network error:** ${message}` });
        msgHistory.current.pop();
        setStatus('error');
        return null;
      }
    },
    [appendMsg, removeMsg]
  );

  const appendApiKeySaved = useCallback(
    (savedMsg: string) => {
      appendMsg({ role: 'assistant', content: savedMsg });
    },
    [appendMsg]
  );

  return { messages, status, sendMessage, appendApiKeySaved };
}
