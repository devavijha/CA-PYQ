'use client';
import { useEffect, useState } from 'react';
import type { UserProgress } from '@/lib/data';
import { PAPERS_DATA, ALL_QUESTIONS, FREQ_MAP, getHotTopics, EXAM_SESSIONS } from '@/lib/data';

interface HomeViewProps {
  onSubjectClick: (id: string) => void;
  onStartPracticing: () => void;
  progress: Record<string, UserProgress>;
}

// Year pill positions sitting inside the giant "PYQ" letterforms
const YEAR_PILLS = [
  { text: 'Nov 2024', top: '8%',  left: '4%' },
  { text: 'May 2024', top: '68%', left: '2%' },
  { text: 'Nov 2023', top: '22%', left: '36%' },
  { text: 'May 2023', top: '72%', left: '38%' },
  { text: 'Nov 2022', top: '12%', left: '70%' },
  { text: 'May 2022', top: '68%', left: '68%' },
  { text: 'Nov 2021', top: '42%', left: '86%' },
  { text: 'May 2021', top: '48%', left: '20%' },
];

const TICKER_ITEMS = [...EXAM_SESSIONS, ...EXAM_SESSIONS]; // doubled for infinite loop

export function HomeView({ onSubjectClick, onStartPracticing, progress }: HomeViewProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const subjectProgress: Record<string, { total: number; done: number; pct: number }> = {};
  Object.keys(PAPERS_DATA).forEach(sid => {
    const qs   = ALL_QUESTIONS.filter(q => q.subjectId === sid);
    const done = qs.filter(q => progress[q.id]?.attempted).length;
    subjectProgress[sid] = { total: qs.length, done, pct: qs.length > 0 ? Math.round((done / qs.length) * 100) : 0 };
  });

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
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px 32px 64px', overflow: 'hidden', position: 'relative' }}
      >
        {/* Giant PYQ */}
        <div style={{ position: 'relative', width: '100%', textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(120px, 20vw, 240px)',
            lineHeight: 0.88, letterSpacing: '-0.03em',
            color: 'var(--ink)', userSelect: 'none',
          }}>
            PYQ
          </h1>

          {/* Year pills floating inside the letterforms */}
          {YEAR_PILLS.map((p, i) => (
            <span key={i} style={{
              position: 'absolute', top: p.top, left: p.left,
              background: 'var(--surface2)', border: '1px solid var(--border-dark)',
              borderRadius: 99, padding: '4px 12px',
              fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11,
              color: 'var(--ink-muted)', whiteSpace: 'nowrap', pointerEvents: 'none',
            }}>
              {p.text}
            </span>
          ))}
        </div>

        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 18, color: 'var(--ink-muted)', textAlign: 'center', marginTop: 32, lineHeight: 1.6 }}>
          Every question ICAI ever asked.<br />
          Timed. Tracked. With ICAI answers inline.
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            id="cta-start-practicing"
            onClick={onStartPracticing}
            style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14,
              background: 'var(--ink)', color: '#F2F0EB', border: 'none',
              borderRadius: 99, padding: '14px 28px', cursor: 'pointer',
              transition: 'opacity 0.18s ease, transform 0.18s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = ''; }}
          >
            Start Practicing
          </button>
          <button
            id="cta-browse-papers"
            onClick={() => document.getElementById('subject-grid-section')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14,
              background: 'var(--surface)', color: 'var(--ink)',
              border: '1px solid var(--border-dark)', borderRadius: 99, padding: '14px 28px',
              cursor: 'pointer', transition: 'background 0.18s ease, transform 0.18s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface2)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; (e.currentTarget as HTMLElement).style.transform = ''; }}
          >
            Browse Papers
          </button>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--surface)', padding: '14px 0', overflow: 'hidden' }} role="marquee" aria-label="Exam sessions">
        <div className="ticker-track" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, color: 'var(--ink-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          {TICKER_ITEMS.map((s, i) => (
            <span key={i} style={{ whiteSpace: 'nowrap' }}>── {s}</span>
          ))}
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div style={{ display: 'flex', padding: '48px 32px', borderBottom: '1px solid var(--border)' }} role="region" aria-label="Platform statistics">
        {[
          { num: `${ALL_QUESTIONS.length}+`, label: 'Total PYQs' },
          { num: '10', label: 'Exam Sessions' },
          { num: '6',  label: 'Papers' },
          { num: '₹0', label: 'Cost' },
        ].map((s, i, arr) => (
          <div key={i} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
            padding: '0 16px', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
          }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 40, color: 'var(--ink)', lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 12, color: 'var(--ink-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Subject Grid ── */}
      <section id="subject-grid-section" style={{ padding: '64px 32px' }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--ink-dim)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 32 }}>
          Choose a Paper
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
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
                  borderRadius: 14,
                  border: `1px solid ${paper.color}40`,
                  background: `${paper.color}1A`,
                  padding: 24,
                  cursor: 'pointer',
                  transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(-3px)';
                  el.style.borderColor = `${paper.color}99`;
                  el.style.boxShadow = `0 8px 24px ${paper.color}1F`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = '';
                  el.style.borderColor = `${paper.color}40`;
                  el.style.boxShadow = '';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 11, background: 'rgba(26,26,26,0.07)', color: 'var(--ink-muted)', borderRadius: 6, padding: '4px 10px' }}>
                    {paper.code}
                  </span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, color: 'var(--ink-muted)' }}>
                    {prog.total} Qs →
                  </span>
                </div>

                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 26, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 16 }}>
                  {paper.name}
                </div>

                {/* Progress bar */}
                {mounted && (
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ height: 5, background: 'rgba(26,26,26,0.1)', borderRadius: 99, overflow: 'hidden' }}>
                      <div
                        className="progress-fill"
                        style={{ height: '100%', background: paper.color, borderRadius: 99, '--fill': `${prog.pct}%` } as React.CSSProperties}
                      />
                    </div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 11, color: 'var(--ink-muted)', marginTop: 6, textAlign: 'right' }}>
                      {prog.pct}%
                    </div>
                  </div>
                )}

                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 11, color: 'var(--ink-muted)', lineHeight: 1.5 }}>
                  🔥 {subjectHotTopics[paper.id]}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" style={{ padding: '64px 32px', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--ink-dim)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 32 }}>
          How It Works
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            { n: '01', t: 'Pick a Topic', d: 'Browse by subject and chapter. Filter by difficulty, year, or marks. Focus on what matters most for your exam.' },
            { n: '02', t: 'Solve Timed', d: 'Set the timer and attempt the question exactly as you would in the exam hall. No peeking until pencils down.' },
            { n: '03', t: 'View ICAI Answer', d: 'Compare with the official ICAI Suggested Answer rendered inline. No PDFs, no new tabs, no friction at all.' },
          ].map(s => (
            <div key={s.n} style={{ padding: 32, background: 'var(--bg)', borderRadius: 14, border: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 48, color: 'var(--border-dark)', lineHeight: 1, marginBottom: 16 }}>{s.n}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--ink)', marginBottom: 8 }}>{s.t}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
