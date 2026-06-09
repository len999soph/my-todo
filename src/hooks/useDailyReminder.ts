import { useState, useEffect, useCallback, useRef } from 'react';
import type { Task } from '../types';

const LS_ENABLED = 'agent-reminder-enabled';
const LS_TIME = 'agent-reminder-time';
const LS_LAST_FIRED = 'agent-reminder-last-fired';

const DEFAULT_TIME = '09:00';

export interface DailySummary {
  title: string;
  body: string;
}

interface Options {
  /** Current task list — read at fire time so notifications reflect the latest state. */
  tasks: Task[];
  /** Builds the notification title/body from the task list (lets the caller localize). */
  buildSummary: (tasks: Task[]) => DailySummary;
}

function todayStr(): string {
  return new Date().toISOString().split('T')[0];
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

function loadEnabled(): boolean {
  return localStorage.getItem(LS_ENABLED) === '1';
}

function loadTime(): string {
  return localStorage.getItem(LS_TIME) || DEFAULT_TIME;
}

/**
 * Daily to-do reminder backed by the browser Notification API.
 *
 * When enabled and permission is granted, fires one notification per day at the
 * configured local time. `fireNow` triggers the same notification on demand.
 */
export function useDailyReminder({ tasks, buildSummary }: Options) {
  const supported = typeof window !== 'undefined' && 'Notification' in window;

  const [permission, setPermission] = useState<NotificationPermission>(
    supported ? Notification.permission : 'denied'
  );
  const [enabled, setEnabled] = useState<boolean>(loadEnabled);
  const [time, setTime] = useState<string>(loadTime);

  // Keep the latest tasks/formatter available to the scheduler without
  // re-creating the interval on every keystroke.
  const tasksRef = useRef(tasks);
  const buildRef = useRef(buildSummary);
  useEffect(() => { tasksRef.current = tasks; }, [tasks]);
  useEffect(() => { buildRef.current = buildSummary; }, [buildSummary]);

  const fireNow = useCallback((): boolean => {
    if (!supported || Notification.permission !== 'granted') return false;
    const { title, body } = buildRef.current(tasksRef.current);
    new Notification(title, { body, tag: 'daily-todo', icon: '/vite.svg' });
    return true;
  }, [supported]);

  const requestPermission = useCallback(async (): Promise<NotificationPermission> => {
    if (!supported) return 'denied';
    const result = await Notification.requestPermission();
    setPermission(result);
    return result;
  }, [supported]);

  const updateEnabled = useCallback(
    async (next: boolean) => {
      if (next && supported && Notification.permission !== 'granted') {
        const result = await requestPermission();
        if (result !== 'granted') {
          setEnabled(false);
          localStorage.setItem(LS_ENABLED, '0');
          return;
        }
      }
      setEnabled(next);
      localStorage.setItem(LS_ENABLED, next ? '1' : '0');
    },
    [supported, requestPermission]
  );

  const updateTime = useCallback((next: string) => {
    const value = next || DEFAULT_TIME;
    setTime(value);
    localStorage.setItem(LS_TIME, value);
    // Allow the freshly-chosen time to fire today if it hasn't already.
    localStorage.removeItem(LS_LAST_FIRED);
  }, []);

  // Daily scheduler: poll once a minute, fire at most once per calendar day
  // when the local clock reaches the configured time.
  useEffect(() => {
    if (!enabled || !supported || permission !== 'granted') return;

    const check = () => {
      const now = new Date();
      const hhmm = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
      const today = todayStr();
      if (hhmm === time && localStorage.getItem(LS_LAST_FIRED) !== today) {
        localStorage.setItem(LS_LAST_FIRED, today);
        fireNow();
      }
    };

    check();
    const interval = setInterval(check, 30_000);
    return () => clearInterval(interval);
  }, [enabled, supported, permission, time, fireNow]);

  return {
    supported,
    permission,
    enabled,
    time,
    setEnabled: updateEnabled,
    setTime: updateTime,
    fireNow,
  };
}
