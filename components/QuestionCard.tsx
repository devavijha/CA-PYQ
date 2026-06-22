'use client';
import { RepeatBadge } from './RepeatBadge';
import type { Question, UserProgress } from '@/lib/data';

interface QuestionCardProps {
  question: Question;
  index: number;
  onSolve: (q: Question) => void;
  progress: Record<string, UserProgress>;
  onBookmark: (id: string, val: boolean) => void;
}

const difficultyStyle: Record<string, React.CSSProperties> = {
  Easy:   { background: 'rgba(126,221,176,0.2)', color: '#2D9E6B' },
  Medium: { background: 'rgba(245,200,66,0.2)',  color: '#B8860B' },
  Hard:   { background: 'rgba(244,135,106,0.2)', color: '#C44B2B' },
};

export function QuestionCard({ question, index, onSolve, progress, onBookmark }: QuestionCardProps) {
  const qProg = progress[question.id] || {};
  const isDone       = !!qProg.attempted;
  const isBookmarked = !!qProg.bookmarked;

  return (
    <article
      className="card-animate"
      style={{
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '20px 24px',
        marginBottom: 12,
        cursor: 'pointer',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease',
        animationDelay: `${index * 45}ms`,
      }}
      onClick={() => onSolve(question)}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(26,26,26,0.09)';
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-dark)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = '';
        (e.currentTarget as HTMLElement).style.boxShadow = '';
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
      }}
    >
      {/* Meta Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, background: 'var(--surface2)', color: 'var(--ink-muted)', borderRadius: 6, padding: '3px 10px' }}>
          {question.session}
        </span>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, borderRadius: 6, padding: '3px 10px', ...difficultyStyle[question.difficulty] }}>
          ● {question.difficulty}
        </span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 11, color: 'var(--ink-muted)' }}>
          {question.marks} Marks
        </span>
        <RepeatBadge count={question.repeatCount} />
        {isDone && (
          <span style={{ marginLeft: 'auto', fontSize: 11, color: '#2D9E6B', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>
            ✓ Done
          </span>
        )}
      </div>

      {/* Topic */}
      <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--ink)', marginBottom: 8 }}>
        {question.topic}
      </h3>

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--border)', margin: '16px 0' }} />

      {/* Action Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 11, color: 'var(--ink-dim)', flex: 1 }}>
          ⏱ {question.timerMins} min
        </span>

        <button
          onClick={e => { e.stopPropagation(); onSolve(question); }}
          style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12,
            background: isDone ? 'rgba(126,221,176,0.3)' : 'var(--ink)',
            color: isDone ? '#2D9E6B' : '#F2F0EB',
            border: 'none', borderRadius: 8, padding: '8px 16px',
            cursor: 'pointer', transition: 'opacity 0.18s ease',
          }}
        >
          {isDone ? '↻ Revisit' : 'Solve Now →'}
        </button>

        <button
          title={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
          onClick={e => { e.stopPropagation(); onBookmark(question.id, !isBookmarked); }}
          style={{
            fontSize: 16, width: 32, height: 32,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: 8, border: `1px solid ${isBookmarked ? 'rgba(245,200,66,0.5)' : 'var(--border)'}`,
            background: isBookmarked ? 'rgba(245,200,66,0.1)' : 'none',
            cursor: 'pointer', transition: 'background 0.18s ease',
            color: isBookmarked ? '#F5C842' : 'var(--ink-muted)',
          }}
        >
          🔖
        </button>
      </div>
    </article>
  );
}
