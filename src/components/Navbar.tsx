import type { TaskStats } from '../hooks/useTasks';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  stats: TaskStats;
  view: 'tasks' | 'study';
  onViewChange: (v: 'tasks' | 'study') => void;
  onOpenSettings: () => void;
}

export default function Navbar({ stats, view, onViewChange, onOpenSettings }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="navbar">
      <div className="navbar-logo">🤖</div>
      <div>
        <span className="navbar-title">{t.appTitle}</span>
        <span className="navbar-sub">{t.appSub}</span>
      </div>

      {/* View switcher: Tasks vs Study */}
      <div className="view-switcher">
        <button
          className={`view-btn${view === 'tasks' ? ' active' : ''}`}
          onClick={() => onViewChange('tasks')}
        >
          ✅ Tasks
        </button>
        <button
          className={`view-btn${view === 'study' ? ' active' : ''}`}
          onClick={() => onViewChange('study')}
        >
          📚 Study
        </button>
      </div>

      <div className="navbar-right">
        <div className="stats-badge">
          <div className="dot" style={{ background: 'var(--success)' }} />
          <span>{stats.done}</span> {t.statDone}
        </div>
        <div className="stats-badge">
          <div className="dot" style={{ background: 'var(--warning)' }} />
          <span>{stats.pending}</span> {t.statPending}
        </div>
        <div className="stats-badge">
          <div className="dot" style={{ background: 'var(--danger)' }} />
          <span>{stats.overdue}</span> {t.statOverdue}
        </div>

        {/* Language switcher */}
        <div className="lang-switcher">
          <button
            className={`lang-btn${lang === 'en' ? ' active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <button
            className={`lang-btn${lang === 'zh' ? ' active' : ''}`}
            onClick={() => setLang('zh')}
          >
            中文
          </button>
        </div>

        <button className="btn btn-ghost btn-sm" onClick={onOpenSettings}>
          {t.settings}
        </button>
      </div>
    </nav>
  );
}
