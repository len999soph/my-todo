import { useState, useRef, useEffect } from 'react';
import type { Task, Priority } from '../types';
import type { DisplayMessage, AIStatus } from '../hooks/useAIAgent';
import { useLanguage } from '../LanguageContext';

function mdLite(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code style="background:#27272a;padding:1px 5px;border-radius:3px;font-size:12px">$1</code>')
    .replace(/\n/g, '<br>');
}

interface AIPanelProps {
  apiKey: string;
  tasks: Task[];
  messages: DisplayMessage[];
  status: AIStatus;
  onSaveApiKey: (key: string) => void;
  onSendMessage: (text: string) => void;
  onAddTask: (title: string, priority: Priority, due: string) => void;
}

export default function AIPanel({
  apiKey,
  messages,
  status,
  onSaveApiKey,
  onSendMessage,
}: AIPanelProps) {
  const { t } = useLanguage();
  const [apiKeyRowVisible, setApiKeyRowVisible] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function handleToggleApiKey() {
    setApiKeyRowVisible(v => {
      if (!v) setApiKeyInput(apiKey);
      return !v;
    });
  }

  function handleSaveApiKey() {
    if (!apiKeyInput.trim()) return;
    onSaveApiKey(apiKeyInput.trim());
    setApiKeyRowVisible(false);
  }

  function handleSend() {
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText('');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function sendQuick(full: string) {
    if (!full.endsWith(' ')) {
      onSendMessage(full);
    } else {
      setInputText(full);
    }
  }

  const statusText =
    status === 'thinking' ? t.aiThinking : status === 'error' ? t.aiError : t.aiReady;
  const statusColor =
    status === 'thinking'
      ? 'var(--warning)'
      : status === 'error'
      ? 'var(--danger)'
      : 'var(--success)';

  return (
    <aside className="ai-panel">
      <div className="ai-panel-header">
        <div className="ai-avatar">✨</div>
        <div>
          <div className="ai-panel-title">{t.aiTitle}</div>
          <div className="ai-status" style={{ color: statusColor }}>{statusText}</div>
        </div>
        <button
          className="btn btn-ghost btn-sm"
          style={{ marginLeft: 'auto' }}
          onClick={handleToggleApiKey}
        >
          {t.apiKeyBtn}
        </button>
      </div>

      <div className={`api-key-row${apiKeyRowVisible ? ' visible' : ''}`}>
        <input
          type="password"
          placeholder="sk-ant-api03-..."
          value={apiKeyInput}
          onChange={e => setApiKeyInput(e.target.value)}
        />
        <button className="btn btn-primary btn-sm" onClick={handleSaveApiKey}>
          {t.saveBtn}
        </button>
        <div className="api-key-note">{t.apiKeyNote}</div>
      </div>

      <div className="ai-messages">
        {/* Always-visible translated initial message */}
        <div className="ai-msg assistant">
          <div className="msg-label">{t.agentLabel}</div>
          <span dangerouslySetInnerHTML={{ __html: mdLite(t.aiInitial) }} />
        </div>

        {messages.map(msg => (
          <div key={msg.id} className={`ai-msg ${msg.role}`}>
            {msg.role === 'assistant' && (
              <>
                <div className="msg-label">{t.agentLabel}</div>
                <span dangerouslySetInnerHTML={{ __html: mdLite(msg.content) }} />
              </>
            )}
            {msg.role === 'thinking' && (
              <>
                <div className="msg-label">{t.agentLabel}</div>
                <span style={{ opacity: 0.6 }}>{t.thinkingLabel}</span>
              </>
            )}
            {msg.role === 'user' && msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="ai-input-area">
        <div className="quick-prompts">
          <button className="quick-prompt" onClick={() => sendQuick(t.quickWhatFull)}>
            {t.quickWhat}
          </button>
          <button className="quick-prompt" onClick={() => sendQuick(t.quickSummarizeFull)}>
            {t.quickSummarize}
          </button>
          <button className="quick-prompt" onClick={() => sendQuick(t.quickOverdueFull)}>
            {t.quickOverdue}
          </button>
          <button className="quick-prompt" onClick={() => sendQuick(t.quickAddFull)}>
            {t.quickAdd}
          </button>
        </div>
        <div className="ai-input-row">
          <textarea
            placeholder={t.aiPlaceholder}
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="btn btn-primary"
            style={{ padding: '8px 13px' }}
            onClick={handleSend}
          >
            ➤
          </button>
        </div>
      </div>
    </aside>
  );
}
