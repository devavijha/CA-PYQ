'use client';
import { useEffect, useState } from 'react';
import type { UserProgress } from '@/lib/data';
import { PAPERS_DATA, ALL_QUESTIONS, FREQ_MAP, getHotTopics, EXAM_SESSIONS } from '@/lib/data';

interface HomeViewProps {
  onSubjectClick: (id: string) => void;
  onStartPracticing: () => void;
  progress: Record<string, UserProgress>;
}

const TICKER_ITEMS = [...EXAM_SESSIONS, ...EXAM_SESSIONS];

const MOTIVATIONAL_LINES = [
  'Champions are made in the revision room.',
  'Every answer you practice is a mark you don\'t leave behind.',
  'The exam only tests what you\'ve already faced before.',
  'One more question. One step closer.',
];

export function HomeView({ onSubjectClick, onStartPracticing, progress }: HomeViewProps) {
  const [mounted, setMounted] = useState(false);
  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setQuoteIdx(i => (i + 1) % MOTIVATIONAL_LINES.length), 4500);
    return () => clearInterval(id);
  }, []);

  const subjectProgress: Record<string, { total: number; done: number; pct: number }> = {};
  Object.keys(PAPERS_DATA).forEach(sid => {
    const qs   = ALL_QUESTIONS.filter(q => q.subjectId === sid);
    const done = qs.filter(q => progress[q.id]?.attempted).length;
    subjectProgress[sid] = { total: qs.length, done, pct: qs.length > 0 ? Math.round((done / qs.length) * 100) : 0 };
  });

  const totalAttempted  = ALL_QUESTIONS.filter(q => progress[q.id]?.attempted).length;
  const totalBookmarked = ALL_QUESTIONS.filter(q => progress[q.id]?.bookmarked).length;
  const overallPct      = ALL_QUESTIONS.length > 0 ? Math.round((totalAttempted / ALL_QUESTIONS.length) * 100) : 0;

  const subjectHotTopics: Record<string, string> = {};
  Object.keys(PAPERS_DATA).forEach(sid => {
    subjectHotTopics[sid] = getHotTopics(sid, ALL_QUESTIONS, FREQ_MAP)
      .slice(0, 3).map(t => t.topic).join(' · ');
  });

  return (
    <div>
      {/* ── Hero ── */}
      <section
        id="hero"
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          padding: '72px 32px 56px', position: 'relative', overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Subtle radial glow behind the heading */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: 700, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(200,184,248,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Exam label */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--surface2)', border: '1px solid var(--border-dark)',
          borderRadius: 99, padding: '6px 16px', marginBottom: 28,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#7EDDB0', display: 'inline-block' }} />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 11, color: 'var(--ink-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            CA Finals · Old Scheme
          </span>
        </div>

        <h1 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 'clamp(42px, 7vw, 88px)',
          lineHeight: 1.05, letterSpacing: '-0.03em',
          color: 'var(--ink)', maxWidth: 800, marginBottom: 18,
        }}>
          Your Exam is&nbsp;Won<br />
          <span style={{
            background: 'linear-gradient(135deg, #C8B8F8 0%, #9BB8F5 50%, #7EDDB0 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Before You Walk In</span>
        </h1>

        {/* Rotating motivational quote */}
        <div style={{
          minHeight: 32, overflow: 'hidden', position: 'relative',
          marginBottom: 36, maxWidth: 520,
        }}>
          {mounted && (
            <p
              key={quoteIdx}
              className="slide-down"
              style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 16,
                color: 'var(--ink-muted)', lineHeight: 1.6,
              }}
            >
              {MOTIVATIONAL_LINES[quoteIdx]}
            </p>
          )}
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            id="cta-start-practicing"
            onClick={onStartPracticing}
            style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14,
              background: 'var(--ink)', color: '#F2F0EB', border: 'none',
              borderRadius: 99, padding: '15px 32px', cursor: 'pointer',
              transition: 'opacity 0.18s ease, transform 0.18s ease',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = ''; }}
          >
            Start Practicing →
          </button>
          <button
            id="cta-browse-papers"
            onClick={() => document.getElementById('subject-grid-section')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14,
              background: 'transparent', color: 'var(--ink)',
              border: '1px solid var(--border-dark)', borderRadius: 99, padding: '15px 32px',
              cursor: 'pointer', transition: 'background 0.18s ease, transform 0.18s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface2)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.transform = ''; }}
          >
            Browse Papers
          </button>
        </div>
      </section>

      {/* ── Session Ticker ── */}
      <div
        style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--surface)', padding: '12px 0', overflow: 'hidden' }}
        role="marquee" aria-label="Exam sessions covered"
      >
        <div className="ticker-track" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {TICKER_ITEMS.map((s, i) => (
            <span key={i} style={{ whiteSpace: 'nowrap' }}>· {s}</span>
          ))}
        </div>
      </div>

      {/* ── Your Progress Banner (only if they've started) ── */}
      {mounted && totalAttempted > 0 && (
        <div style={{
          margin: '32px 32px 0',
          padding: '24px 28px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--ink)', marginBottom: 6 }}>
              Keep the streak going 🔥
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--ink-muted)' }}>
              {totalAttempted} of {ALL_QUESTIONS.length} questions attempted · {totalBookmarked} bookmarked
            </div>
            <div style={{ marginTop: 10, height: 6, background: 'rgba(26,26,26,0.1)', borderRadius: 99, overflow: 'hidden' }}>
              <div
                className="progress-fill"
                style={{ height: '100%', background: 'linear-gradient(90deg, #C8B8F8, #7EDDB0)', borderRadius: 99, '--fill': `${overallPct}%` } as React.CSSProperties}
              />
            </div>
          </div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 40, color: 'var(--ink)', lineHeight: 1, whiteSpace: 'nowrap' }}>
            {overallPct}<span style={{ fontSize: 18, color: 'var(--ink-muted)' }}>%</span>
          </div>
        </div>
      )}

      {/* ── Stats Strip ── */}
      <div
        style={{
          display: 'flex', padding: '48px 32px',
          borderBottom: '1px solid var(--border)',
          marginTop: totalAttempted > 0 ? 32 : 0,
        }}
        role="region" aria-label="Platform statistics"
      >
        {[
          { num: `${ALL_QUESTIONS.length}+`, label: 'Questions' },
          { num: `${EXAM_SESSIONS.length}`, label: 'Sessions' },
          { num: '6',  label: 'Papers' },
          { num: '₹0', label: 'Forever Free' },
        ].map((s, i, arr) => (
          <div key={i} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            padding: '0 16px', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
          }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 38, color: 'var(--ink)', lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 12, color: 'var(--ink-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Subject Grid ── */}
      <section id="subject-grid-section" style={{ padding: '56px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28 }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--ink-dim)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Pick Your Paper
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'var(--ink-dim)' }}>
            {Object.keys(PAPERS_DATA).length} papers · {EXAM_SESSIONS.length} sessions each
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {Object.values(PAPERS_DATA).map(paper => {
            const prog = subjectProgress[paper.id];
            return (
              <div
                key={paper.id}
                tabIndex={0}
                role="button"
                aria-label={`Open ${paper.name}`}
                onClick={() => onSubjectClick(paper.id)}
                onKeyDown={e => e.key === 'Enter' && onSubjectClick(paper.id)}
                style={{
                  borderRadius: 16,
                  border: `1px solid ${paper.color}40`,
                  background: `${paper.color}12`,
                  padding: '22px 22px 18px',
                  cursor: 'pointer',
                  transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(-4px)';
                  el.style.borderColor = `${paper.color}99`;
                  el.style.boxShadow = `0 12px 32px ${paper.color}25`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = '';
                  el.style.borderColor = `${paper.color}40`;
                  el.style.boxShadow = '';
                }}
              >
                {/* Accent dot */}
                <div style={{ position: 'absolute', top: 18, right: 18, width: 10, height: 10, borderRadius: '50%', background: paper.color }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 10,
                    background: `${paper.color}30`, color: 'var(--ink-muted)',
                    borderRadius: 6, padding: '4px 10px',
                  }}>
                    {paper.code}
                  </span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 11, color: 'var(--ink-muted)' }}>
                    {prog.total} questions
                  </span>
                </div>

                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22, lineHeight: 1.15, color: 'var(--ink)', marginBottom: 14 }}>
                  {paper.name}
                </div>

                {/* Progress bar */}
                {mounted && (
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ height: 4, background: 'rgba(26,26,26,0.1)', borderRadius: 99, overflow: 'hidden' }}>
                      <div
                        className="progress-fill"
                        style={{ height: '100%', background: paper.color, borderRadius: 99, '--fill': `${prog.pct}%` } as React.CSSProperties}
                      />
                    </div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 10, color: 'var(--ink-muted)', marginTop: 5, display: 'flex', justifyContent: 'space-between' }}>
                      <span>{prog.done}/{prog.total} done</span>
                      <span>{prog.pct}%</span>
                    </div>
                  </div>
                )}

                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 11, color: 'var(--ink-muted)', lineHeight: 1.5 }}>
                  🔥 {subjectHotTopics[paper.id]}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Why It Works ── */}
      <section id="why-it-works" style={{ padding: '56px 32px', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--ink-dim)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 28 }}>
          Built for the final push
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            {
              icon: '⏱',
              t: 'Timed Attempts',
              d: 'Simulate real exam pressure. Set the timer, attempt without peeking. Build the habit that matters on the big day.',
            },
            {
              icon: '📄',
              t: 'ICAI Answers Inline',
              d: 'Official suggested answers rendered right below each question. No juggling PDFs or switching tabs.',
            },
            {
              icon: '📈',
              t: 'Track What Sticks',
              d: 'See exactly which topics you\'ve covered, what\'s bookmarked, and where the gaps still are — at a glance.',
            },
          ].map(s => (
            <div key={s.t} style={{ padding: '28px 24px', background: 'var(--bg)', borderRadius: 14, border: '1px solid var(--border)' }}>
              <div style={{ fontSize: 28, marginBottom: 14 }}>{s.icon}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 17, color: 'var(--ink)', marginBottom: 8 }}>{s.t}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </div>

        {/* Closing motivational line */}
        <div style={{
          marginTop: 40, padding: '28px 32px',
          background: 'var(--ink)', borderRadius: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        }}>
          <p style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 20,
            color: '#F2F0EB', lineHeight: 1.4, maxWidth: 500,
          }}>
            The CA Finals doesn't reward who studied the most.<br />
            <span style={{ color: '#C8B8F8' }}>It rewards who practised the smartest.</span>
          </p>
          <button
            id="cta-bottom-start"
            onClick={onStartPracticing}
            style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14,
              background: '#F2F0EB', color: 'var(--ink)',
              border: 'none', borderRadius: 99, padding: '14px 28px',
              cursor: 'pointer', whiteSpace: 'nowrap',
              transition: 'opacity 0.18s ease, transform 0.18s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = ''; }}
          >
            Start Now →
          </button>
        </div>
      </section>
    </div>
  );
}
