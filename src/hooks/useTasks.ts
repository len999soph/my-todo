import { useState, useCallback } from 'react';
import type { Task, Priority, Filter } from '../types';

function todayStr(): string {
  return new Date().toISOString().split('T')[0];
}

function isOverdue(t: Task): boolean {
  return !t.done && !!t.due && t.due < todayStr();
}

export interface TaskStats {
  total: number;
  done: number;
  pending: number;
  overdue: number;
  high: number;
  medium: number;
  low: number;
}

function loadTasks(): Task[] {
  try {
    return JSON.parse(localStorage.getItem('agent-tasks') || '[]');
  } catch {
    return [];
  }
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  const persist = useCallback((next: Task[]) => {
    setTasks(next);
    localStorage.setItem('agent-tasks', JSON.stringify(next));
  }, []);

  const addTask = useCallback(
    (title: string, priority: Priority = 'medium', due: string = '') => {
      const task: Task = {
        id: Date.now(),
        title: title.trim(),
        priority,
        due,
        done: false,
        createdAt: new Date().toISOString(),
      };
      setTasks(prev => {
        const next = [task, ...prev];
        localStorage.setItem('agent-tasks', JSON.stringify(next));
        return next;
      });
    },
    []
  );

  const toggleTask = useCallback((id: number) => {
    setTasks(prev => {
      const next = prev.map(t => (t.id === id ? { ...t, done: !t.done } : t));
      localStorage.setItem('agent-tasks', JSON.stringify(next));
      return next;
    });
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTasks(prev => {
      const next = prev.filter(t => t.id !== id);
      localStorage.setItem('agent-tasks', JSON.stringify(next));
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    persist([]);
  }, [persist]);

  const stats: TaskStats = {
    total: tasks.length,
    done: tasks.filter(t => t.done).length,
    pending: tasks.filter(t => !t.done).length,
    overdue: tasks.filter(t => isOverdue(t)).length,
    high: tasks.filter(t => t.priority === 'high').length,
    medium: tasks.filter(t => t.priority === 'medium').length,
    low: tasks.filter(t => t.priority === 'low').length,
  };

  const getFiltered = useCallback(
    (filter: Filter): Task[] => {
      switch (filter) {
        case 'pending': return tasks.filter(t => !t.done);
        case 'done':    return tasks.filter(t => t.done);
        case 'overdue': return tasks.filter(t => isOverdue(t));
        case 'high':    return tasks.filter(t => t.priority === 'high');
        case 'medium':  return tasks.filter(t => t.priority === 'medium');
        case 'low':     return tasks.filter(t => t.priority === 'low');
        default:        return tasks;
      }
    },
    [tasks]
  );

  return { tasks, addTask, toggleTask, deleteTask, clearAll, stats, getFiltered };
}
