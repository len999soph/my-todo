import { useState } from 'react';
import type { Filter, Priority } from '../types';
import type { TaskStats } from '../hooks/useTasks';
import type { useDailyReminder } from '../hooks/useDailyReminder';
import { useLanguage } from '../LanguageContext';

interface SidebarProps {
  filter: Filter;
  stats: TaskStats;
  onFilterChange: (f: Filter) => void;
  onAddTask: (title: string, priority: Priority, due: string) => void;
  reminder: ReturnType<typeof useDailyReminder>;
}

export default function Sidebar({ filter, stats, onFilterChange, onAddTask, reminder }: SidebarProps) {
  const { t } = useLanguage();
  const [inputVal, setInputVal] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [due, setDue] = useState('');

  function handleAdd() {
    if (!inputVal.trim()) return;
    onAddTask(inputVal.trim(), priority, due);
    setInputVal('');
    setDue('');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleAdd();
  }

  const pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;

  return (
    <aside className="sidebar">
      {/* Add Task */}
      <div>
        <div className="section-label">{t.addTaskSection}</div>
        <div className="add-form">
          <input
            type="text"
            placeholder={t.taskPlaceholder}
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="row2">
            <select value={priority} onChange={e => setPriority(e.target.value as Priority)}>
              <option value="medium">{t.priorityMedium}</option>
              <option value="high">{t.priorityHigh}</option>
              <option value="low">{t.priorityLow}</option>
            </select>
            <input
              type="date"
              value={due}
              onChange={e => setDue(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleAdd}>
            {t.addTaskBtn}
          </button>
        </div>
      </div>

      {/* View filters */}
      <div>
        <div className="section-label">{t.viewSection}</div>
        <div className="filter-group">
          {(
            [
              { key: 'all',     label: t.filterAll,          count: stats.total },
              { key: 'pending', label: t.filterPending,      count: stats.pending },
              { key: 'done',    label: t.filterDone,         count: stats.done },
              { key: 'overdue', label: t.filterOverdue,      count: stats.overdue },
              { key: 'high',    label: t.filterHighPriority, count: stats.high },
            ] as { key: Filter; label: string; count: number }[]
          ).map(({ key, label, count }) => (
            <button
              key={key}
              className={`filter-btn${filter === key ? ' active' : ''}`}
              onClick={() => onFilterChange(key)}
            >
              {label}
              <span className="filter-count">{count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Priority filters */}
      <div>
        <div className="section-label">{t.prioritySection}</div>
        <div className="filter-group">
          {(
            [
              { key: 'high',   label: t.filterHigh,   count: stats.high,   cls: 'priority-high' },
              { key: 'medium', label: t.filterMedium,  count: stats.medium, cls: 'priority-medium' },
              { key: 'low',    label: t.filterLow,     count: stats.low,    cls: 'priority-low' },
            ] as { key: Filter; label: string; count: number; cls: string }[]
          ).map(({ key, label, count, cls }) => (
            <button
              key={key}
              className={`filter-btn${filter === key ? ` active ${cls}` : ''}`}
              onClick={() => onFilterChange(key)}
            >
              {label}
              <span className="filter-count">{count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div>
        <div className="section-label">{t.progressSection}</div>
        <div className="progress-bar-wrap">
          <div className="progress-bar" style={{ width: `${pct}%` }} />
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--muted)' }}>
          {t.progressLabel(stats.done, stats.total)}
        </div>
      </div>

      {/* Daily reminder */}
      <div>
        <div className="section-label">{t.reminderSection}</div>
        {!reminder.supported ? (
          <div style={{ fontSize: 12.5, color: 'var(--muted)' }}>
            {t.reminderUnsupported}
          </div>
        ) : (
          <div className="reminder-group">
            <label className="reminder-row">
              <input
                type="checkbox"
                checked={reminder.enabled}
                onChange={e => reminder.setEnabled(e.target.checked)}
              />
              <span>{t.reminderEnableLabel}</span>
            </label>
            <div className="reminder-row">
              <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>
                {t.reminderTimeLabel}
              </span>
              <input
                type="time"
                value={reminder.time}
                onChange={e => reminder.setTime(e.target.value)}
              />
            </div>
            <button className="btn btn-ghost btn-sm" onClick={() => reminder.fireNow()}>
              {t.reminderNotifyNow}
            </button>
            {reminder.permission === 'denied' ? (
              <div style={{ fontSize: 12, color: 'var(--danger)' }}>
                {t.reminderBlocked}
              </div>
            ) : reminder.enabled ? (
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                {t.reminderHint(reminder.time)}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </aside>
  );
}
