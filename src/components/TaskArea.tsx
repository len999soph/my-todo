import type { Task, Filter } from '../types';
import { useLanguage } from '../LanguageContext';
import TaskCard from './TaskCard';

interface TaskAreaProps {
  tasks: Task[];
  filter: Filter;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskArea({ tasks, filter, onToggle, onDelete }: TaskAreaProps) {
  const { t } = useLanguage();

  return (
    <main className="task-area">
      <div className="task-header">
        <h2>{t.filterTitles[filter]}</h2>
        <span className="task-header-count">{t.taskCount(tasks.length)}</span>
      </div>
      <div className="task-list">
        {tasks.length === 0 ? (
          <div className="task-empty">
            <div className="task-empty-icon">📭</div>
            <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 7 }}>{t.emptyTitle}</div>
            <div style={{ fontSize: 13 }}>{t.emptyDesc}</div>
          </div>
        ) : (
          tasks.map(task => (
            <TaskCard key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
          ))
        )}
      </div>
    </main>
  );
}
