import { useState } from 'react';
import { articles } from '../study/studyData';
import type { Article, ArticleBlock, QuizQuestion } from '../study/studyData';

// Render **bold** markers inside a string into React nodes.
function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'h':
      return <h3 className="study-h">{block.text}</h3>;
    case 'p':
      return <p className="study-p">{renderText(block.text)}</p>;
    case 'list':
      return (
        <ul className="study-list">
          {block.items.map((it, i) => (
            <li key={i}>{renderText(it)}</li>
          ))}
        </ul>
      );
    case 'callout':
      return <div className="study-callout">💡 {renderText(block.text)}</div>;
  }
}

// ---- Quiz ----

function Quiz({ questions, onRestart }: { questions: QuizQuestion[]; onRestart: () => void }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[index];
  const isLast = index === questions.length - 1;

  function next() {
    if (isLast) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
    setShowModel(false);
  }

  function answerMC(i: number) {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    setAnsweredCount((c) => c + 1);
    if (i === q.answer) setScore((s) => s + 1);
  }

  function selfGrade(correct: boolean) {
    setRevealed(true);
    setAnsweredCount((c) => c + 1);
    if (correct) setScore((s) => s + 1);
  }

  if (done) {
    const pct = answeredCount ? Math.round((score / answeredCount) * 100) : 0;
    const msg =
      pct >= 90 ? "Amazing — you've got this! 🌟"
      : pct >= 70 ? 'Solid work! Review the misses and you\'re golden. 💪'
      : 'Good effort — go re-read the tricky parts, then try again. 📖';
    return (
      <div className="quiz-done">
        <div className="quiz-score">{score} / {answeredCount}</div>
        <div className="quiz-pct">{pct}%</div>
        <p className="study-p">{msg}</p>
        <button className="btn btn-primary" onClick={onRestart}>← Back to library</button>
        <button
          className="btn btn-ghost"
          onClick={() => {
            setIndex(0); setSelected(null); setRevealed(false);
            setShowModel(false); setScore(0); setAnsweredCount(0); setDone(false);
          }}
        >
          Retake quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="quiz-progress">Question {index + 1} of {questions.length} · Score {score}</div>
      <div className="quiz-q">{q.question}</div>

      {q.type === 'mc' && q.options && (
        <div className="quiz-options">
          {q.options.map((opt, i) => {
            let cls = 'quiz-option';
            if (revealed) {
              if (i === q.answer) cls += ' correct';
              else if (i === selected) cls += ' wrong';
            }
            return (
              <button key={i} className={cls} disabled={revealed} onClick={() => answerMC(i)}>
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {q.type === 'short' && (
        <div className="quiz-short">
          <p className="study-hint">Think about your answer (or jot it down), then check the model answer and grade yourself honestly.</p>
          {!showModel && !revealed && (
            <button className="btn btn-ghost" onClick={() => setShowModel(true)}>Show model answer</button>
          )}
          {showModel && (
            <div className="quiz-model"><strong>Model answer:</strong> {q.modelAnswer}</div>
          )}
          {showModel && !revealed && (
            <div className="quiz-selfgrade">
              <span>How did you do?</span>
              <button className="btn btn-primary btn-sm" onClick={() => selfGrade(true)}>✅ I got it</button>
              <button className="btn btn-ghost btn-sm" onClick={() => selfGrade(false)}>📌 Need to review</button>
            </div>
          )}
        </div>
      )}

      {revealed && (
        <div className="quiz-explain">{renderText(q.explanation)}</div>
      )}
      {revealed && (
        <button className="btn btn-primary" onClick={next}>
          {isLast ? 'See results →' : 'Next question →'}
        </button>
      )}
    </div>
  );
}

// ---- Article reader ----

function Reader({ article, onBack }: { article: Article; onBack: () => void }) {
  const [mode, setMode] = useState<'read' | 'quiz'>('read');

  return (
    <div className="study-reader">
      <button className="btn btn-ghost btn-sm" onClick={onBack}>← Library</button>
      <div className="study-article-head">
        <span className="study-emoji-lg">{article.emoji}</span>
        <div>
          <div className="study-unit-tag">{article.unit}</div>
          <h2 className="study-title">{article.title}</h2>
          <div className="study-meta">⏱️ {article.readingTime}</div>
        </div>
      </div>

      <div className="study-tabs">
        <button className={`study-tab${mode === 'read' ? ' active' : ''}`} onClick={() => setMode('read')}>📖 Read</button>
        <button className={`study-tab${mode === 'quiz' ? ' active' : ''}`} onClick={() => setMode('quiz')}>✏️ Quiz me ({article.quiz.length})</button>
      </div>

      {mode === 'read' ? (
        <div className="study-body">
          {article.body.map((b, i) => <Block key={i} block={b} />)}
          <div className="study-cta">
            <p className="study-p">Done reading? Test yourself! 👇</p>
            <button className="btn btn-primary" onClick={() => setMode('quiz')}>Start the quiz →</button>
          </div>
        </div>
      ) : (
        <Quiz questions={article.quiz} onRestart={onBack} />
      )}
    </div>
  );
}

// ---- Library (list of articles) ----

export default function StudyView() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = articles.find((a) => a.id === openId) || null;

  if (open) {
    return (
      <main className="study-view">
        <Reader article={open} onBack={() => setOpenId(null)} />
      </main>
    );
  }

  return (
    <main className="study-view">
      <div className="study-hero">
        <h1>📚 Social Studies Study Hub</h1>
        <p>8th grade US History &amp; Geography · aligned to the NY State framework. Pick a topic, read it, then quiz yourself.</p>
      </div>
      <div className="study-grid">
        {articles.map((a) => (
          <button key={a.id} className="study-card" onClick={() => setOpenId(a.id)}>
            <div className="study-card-top">
              <span className="study-emoji">{a.emoji}</span>
              <span className={`study-badge ${a.subject}`}>{a.subject}</span>
            </div>
            <div className="study-unit-tag">{a.unit}</div>
            <h3>{a.title}</h3>
            <p>{a.blurb}</p>
            <div className="study-card-foot">⏱️ {a.readingTime} · {a.quiz.length} questions</div>
          </button>
        ))}
      </div>
    </main>
  );
}
