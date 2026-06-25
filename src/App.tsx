import { useState, useCallback } from 'react';
import type { Filter, Priority } from './types';
import { useTasks } from './hooks/useTasks';
import { useAIAgent } from './hooks/useAIAgent';
import { LanguageProvider, useLanguage } from './LanguageContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TaskArea from './components/TaskArea';
import AIPanel from './components/AIPanel';
import SettingsModal from './components/SettingsModal';
import StudyView from './components/StudyView';

type View = 'tasks' | 'study';

function loadApiKey(): string {
  return localStorage.getItem('agent-api-key') || '';
}

function AppInner() {
  const { t } = useLanguage();
  const [apiKey, setApiKey] = useState<string>(loadApiKey);
  const [filter, setFilter] = useState<Filter>('all');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [view, setView] = useState<View>('tasks');

  const { tasks, addTask, toggleTask, deleteTask, clearAll, stats, getFiltered } = useTasks();
  const { messages, status, sendMessage, appendApiKeySaved } = useAIAgent();

  const filteredTasks = getFiltered(filter);

  const handleSaveApiKey = useCallback(
    (key: string) => {
      setApiKey(key);
      localStorage.setItem('agent-api-key', key);
      appendApiKeySaved(t.apiKeySaved);
    },
    [appendApiKeySaved, t.apiKeySaved]
  );

  const handleSaveSettings = useCallback((key: string) => {
    setApiKey(key);
    localStorage.setItem('agent-api-key', key);
  }, []);

  const handleClearAll = useCallback(() => {
    localStorage.clear();
    setApiKey('');
    clearAll();
  }, [clearAll]);

  const handleSendMessage = useCallback(
    async (text: string) => {
      const taskToAdd = await sendMessage(text, tasks, apiKey, t.noApiKey);
      if (taskToAdd) {
        addTask(
          taskToAdd.title,
          (taskToAdd.priority as Priority) || 'medium',
          taskToAdd.due || ''
        );
      }
    },
    [sendMessage, tasks, apiKey, addTask, t.noApiKey]
  );

  return (
    <>
      <Navbar
        stats={stats}
        view={view}
        onViewChange={setView}
        onOpenSettings={() => setSettingsOpen(true)}
      />
      {view === 'study' ? (
        <StudyView />
      ) : (
        <div className="main">
          <Sidebar
            filter={filter}
            stats={stats}
            onFilterChange={setFilter}
            onAddTask={addTask}
          />
          <TaskArea
            tasks={filteredTasks}
            filter={filter}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
          <AIPanel
            apiKey={apiKey}
            tasks={tasks}
            messages={messages}
            status={status}
            onSaveApiKey={handleSaveApiKey}
            onSendMessage={handleSendMessage}
            onAddTask={addTask}
          />
        </div>
      )}
      <SettingsModal
        open={settingsOpen}
        apiKey={apiKey}
        onSave={handleSaveSettings}
        onClose={() => setSettingsOpen(false)}
        onClearAll={handleClearAll}
      />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
