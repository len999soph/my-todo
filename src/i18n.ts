export type Lang = 'en' | 'zh';

const en = {
  // Navbar
  appTitle: 'Task Agent',
  appSub: 'AI-powered',
  statDone: 'done',
  statPending: 'pending',
  statOverdue: 'overdue',
  settings: '⚙ Settings',

  // Sidebar – add form
  addTaskSection: 'Add Task',
  taskPlaceholder: 'What needs to be done?',
  priorityMedium: 'Medium',
  priorityHigh: 'High',
  priorityLow: 'Low',
  addTaskBtn: '+ Add Task',

  // Sidebar – view filters
  viewSection: 'View',
  filterAll: '📋 All Tasks',
  filterPending: '⏳ Pending',
  filterDone: '✅ Completed',
  filterOverdue: '🔴 Overdue',
  filterHighPriority: '🔥 High Priority',

  // Sidebar – priority filters
  prioritySection: 'Priority',
  filterHigh: '🔥 High',
  filterMedium: '⚡ Medium',
  filterLow: '🌿 Low',

  // Sidebar – progress
  progressSection: 'Progress',
  progressLabel: (done: number, total: number) =>
    `${done} of ${total} task${total !== 1 ? 's' : ''} completed`,

  // TaskArea
  filterTitles: {
    all: 'All Tasks',
    pending: 'Pending',
    done: 'Completed',
    overdue: 'Overdue',
    high: 'High Priority',
    medium: 'Medium Priority',
    low: 'Low Priority',
  } as Record<string, string>,
  taskCount: (n: number) => `${n} task${n !== 1 ? 's' : ''}`,
  emptyTitle: 'No tasks here',
  emptyDesc: 'Add a task in the sidebar or ask the AI agent to add one for you.',

  // TaskCard
  today: 'Today',
  priorityLabel: (p: string) => p, // already 'high' / 'medium' / 'low'

  // AIPanel
  aiTitle: 'AI Agent',
  aiReady: '● Ready',
  aiThinking: '● Thinking…',
  aiError: '● Error',
  apiKeyBtn: 'API Key',
  apiKeyNote: 'Stored locally in your browser only. Never shared.',
  aiPlaceholder: 'Ask the agent… (Enter to send)',
  agentLabel: 'Agent',
  thinkingLabel: 'Thinking…',
  quickWhat: 'What next?',
  quickSummarize: 'Summarize',
  quickOverdue: 'Overdue?',
  quickAdd: 'Add task…',
  quickWhatFull: 'What should I work on next?',
  quickSummarizeFull: 'Summarize my workload',
  quickOverdueFull: 'Which tasks are overdue?',
  quickAddFull: 'Add a task: ',
  aiInitial:
    "Hi! I'm your AI task agent powered by Claude. I can help you:\n\n• Suggest what to work on next\n• Analyze your workload\n• Add tasks for you\n• Answer questions about your tasks\n\nSet your Claude API key to get started!",
  noApiKey:
    '⚠️ Please add your Claude API key first — click **API Key** in the panel header.',
  apiKeySaved: '✅ API key saved! Ask me anything about your tasks.',

  // SettingsModal
  settingsTitle: '⚙ Settings',
  settingsDesc:
    "Your Claude API key is stored only in this browser's localStorage and is sent exclusively to api.anthropic.com. Get a key at console.anthropic.com.",
  settingsKeyLabel: 'Claude API Key',
  clearAllBtn: '🗑 Clear All Data',
  cancelBtn: 'Cancel',
  saveBtn: 'Save',
  clearConfirm: 'Delete all tasks and settings? This cannot be undone.',
};

const zh: typeof en = {
  // Navbar
  appTitle: '任务助手',
  appSub: 'AI 驱动',
  statDone: '已完成',
  statPending: '待处理',
  statOverdue: '已逾期',
  settings: '⚙ 设置',

  // Sidebar – add form
  addTaskSection: '添加任务',
  taskPlaceholder: '需要做什么？',
  priorityMedium: '中等',
  priorityHigh: '高',
  priorityLow: '低',
  addTaskBtn: '+ 添加任务',

  // Sidebar – view filters
  viewSection: '视图',
  filterAll: '📋 全部任务',
  filterPending: '⏳ 待处理',
  filterDone: '✅ 已完成',
  filterOverdue: '🔴 已逾期',
  filterHighPriority: '🔥 高优先级',

  // Sidebar – priority filters
  prioritySection: '优先级',
  filterHigh: '🔥 高',
  filterMedium: '⚡ 中',
  filterLow: '🌿 低',

  // Sidebar – progress
  progressSection: '进度',
  progressLabel: (done: number, total: number) =>
    `已完成 ${done} / ${total} 项任务`,

  // TaskArea
  filterTitles: {
    all: '全部任务',
    pending: '待处理',
    done: '已完成',
    overdue: '已逾期',
    high: '高优先级',
    medium: '中优先级',
    low: '低优先级',
  },
  taskCount: (n: number) => `${n} 项任务`,
  emptyTitle: '暂无任务',
  emptyDesc: '在左侧添加任务，或向 AI 助手发起请求。',

  // TaskCard
  today: '今天',
  priorityLabel: (p: string) =>
    p === 'high' ? '高' : p === 'medium' ? '中' : '低',

  // AIPanel
  aiTitle: 'AI 助手',
  aiReady: '● 就绪',
  aiThinking: '● 思考中…',
  aiError: '● 错误',
  apiKeyBtn: 'API 密钥',
  apiKeyNote: '仅存储在本地浏览器中，不会共享。',
  aiPlaceholder: '向助手提问…（Enter 发送）',
  agentLabel: '助手',
  thinkingLabel: '思考中…',
  quickWhat: '下一步？',
  quickSummarize: '总结',
  quickOverdue: '有逾期吗？',
  quickAdd: '添加任务…',
  quickWhatFull: '我下一步应该做什么？',
  quickSummarizeFull: '总结我的工作量',
  quickOverdueFull: '哪些任务已逾期？',
  quickAddFull: '添加任务：',
  aiInitial:
    '你好！我是由 Claude 驱动的 AI 任务助手。我可以帮您：\n\n• 建议下一步应处理的任务\n• 分析您的工作量\n• 帮您添加任务\n• 回答关于任务的问题\n\n请先设置您的 Claude API 密钥以开始使用！',
  noApiKey:
    '⚠️ 请先添加您的 Claude API 密钥——点击面板顶部的「API 密钥」按钮。',
  apiKeySaved: '✅ API 密钥已保存！您可以开始向我提问了。',

  // SettingsModal
  settingsTitle: '⚙ 设置',
  settingsDesc:
    '您的 Claude API 密钥仅存储在此浏览器的本地存储中，仅发送至 api.anthropic.com。请前往 console.anthropic.com 获取密钥。',
  settingsKeyLabel: 'Claude API 密钥',
  clearAllBtn: '🗑 清除所有数据',
  cancelBtn: '取消',
  saveBtn: '保存',
  clearConfirm: '确定删除所有任务和设置？此操作无法撤销。',
};

export const translations = { en, zh };
export type Translations = typeof en;
