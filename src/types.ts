export type Priority = 'high' | 'medium' | 'low';
export type Filter = 'all' | 'pending' | 'done' | 'overdue' | 'high' | 'medium' | 'low';

export interface Task {
  id: number;
  title: string;
  priority: Priority;
  due: string;       // YYYY-MM-DD or ''
  done: boolean;
  createdAt: string; // ISO timestamp
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
