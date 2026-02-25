import type { Task } from '../types';
import { useLanguage } from '../LanguageContext';

interface TaskCardProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function todayStr(): string {
  return new Date().toISOString().split('T')[0];
}

function isOverdue(t: Task): boolean {
  return !t.done && !!t.due && t.due < todayStr();
}

function isToday(t: Task): boolean {
  return !!t.due && t.due === todayStr();
}

function fmtDate(s: string): string {
  return new Date(s + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

export default function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  const { t } = useLanguage();
  const overdue = isOverdue(task);
  const today = isToday(task);

  return (
    <div className={`task-card${task.done ? ' done' : ''}${overdue ? ' overdue' : ''}`}>
      <div
        className={`task-checkbox${task.done ? ' checked' : ''}`}
        onClick={() => onToggle(task.id)}
      />
      <div className="task-content">
        <div className="task-title">{task.title}</div>
        <div className="task-meta">
          <span className={`priority-badge priority-${task.priority}`}>
            {t.priorityLabel(task.priority)}
          </span>
          {task.due && (
            <span className={`due-badge${overdue ? ' overdue' : today ? ' today' : ''}`}>
              {overdue ? '⚠' : today ? '🔔' : '📅'}{' '}
              {today ? t.today : fmtDate(task.due)}
            </span>
          )}
        </div>
      </div>
      <div className="task-actions">
        <button
          className="icon-btn delete"
          onClick={() => onDelete(task.id)}
          title="Delete task"
        >
          🗑
        </button>
      </div>
    </div>
  );
}
