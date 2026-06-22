'use client';
import { useState, useMemo } from 'react';
import { QuestionCard } from './QuestionCard';
import type { Question, UserProgress } from '@/lib/data';
import { PAPERS_DATA, ALL_QUESTIONS, FREQ_MAP, getHotTopics } from '@/lib/data';

interface SubjectViewProps {
  subject: string;
  onBack: () => void;
  progress: Record<string, UserProgress>;
  onProgressUpdate: (id: string, update: Record<string, unknown>) => void;
  onSolve: (q: Question) => void;
}

export function SubjectView({ subject, onBack, progress, onProgressUpdate, onSolve }: SubjectViewProps) {
  const paper = PAPERS_DATA[subject];
  const color = paper.color;
  const subjectQs = ALL_QUESTIONS.filter(q => q.subjectId === subject);
  const hotTopics = getHotTopics(subject, ALL_QUESTIONS, FREQ_MAP);

  const [activeYears, setActiveYears] = useState<string[]>([]);
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [diffFilter, setDiffFilter] = useState('All');
  const [showMostRepeated, setShowMostRepeated] = useState(false);
  const [showUnsolved, setShowUnsolved] = useState(false);
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [sort, setSort] = useState('Latest');

  const chapterCounts: Record<string, number> = {};
  subjectQs.forEach(q => { chapterCounts[q.chapter] = (chapterCounts[q.chapter] || 0) + 1; });

  const filteredQs = useMemo(() => {
    let qs = [...subjectQs];
    if (activeYears.length > 0) qs = qs.filter(q => activeYears.includes(q.session));
    if (activeChapter) qs = qs.filter(q => q.chapter === activeChapter);
    if (diffFilter !== 'All') qs = qs.filter(q => q.difficulty === diffFilter);
    if (showMostRepeated) qs = qs.filter(q => q.repeatCount >= 3);
    if (showUnsolved) qs = qs.filter(q => !progress[q.id]?.attempted);
    if (showBookmarked) qs = qs.filter(q => progress[q.id]?.bookmarked);
    if (sort === 'Latest') qs.sort((a, b) => b.session.localeCompare(a.session));
    else if (sort === 'Most Repeated') qs.sort((a, b) => b.repeatCount - a.repeatCount);
    else if (sort === 'Marks ↓') qs.sort((a, b) => b.marks - a.marks);
    return qs;
  }, [subjectQs, activeYears, activeChapter, diffFilter, showMostRepeated, showUnsolved, showBookmarked, sort, progress]);

  function toggleYear(session: string) {
    setActiveYears(prev => prev.includes(session) ? prev.filter(y => y !== session) : [...prev, session]);
  }

  const selectStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12,
    background: 'var(--surface)', color: 'var(--ink-muted)',
    border: '1px solid var(--border)', borderRadius: 8, padding: '6px 12px',
    cursor: 'pointer', appearance: 'none',
  };

  return (
    <div>
      {/* Subject Hero */}
      <div style={{ padding: '48px 32px 32px', borderBottom: '1px solid var(--border)' }}>
        <button
          onClick={onBack}
          style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, color: 'var(--ink-muted)',
            background: 'none', border: '1px solid var(--border-dark)', borderRadius: 8,
            padding: '6px 14px', cursor: 'pointer', transition: 'background 0.18s ease',
            marginBottom: 32, display: 'inline-flex', alignItems: 'center', gap: 6,
          }}
        >
          ← All Papers
        </button>

        <div style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 'clamp(80px, 14vw, 180px)',
          lineHeight: 0.9, letterSpacing: '-0.03em',
          color, userSelect: 'none',
        }}>
          {paper.shortName}
        </div>

        <div style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 20,
          color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.06em',
          marginTop: 12, marginBottom: 20,
        }}>
          {paper.name}
        </div>

        {/* Year pill filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {paper.examSessions.map(s => (
            <button
              key={s}
              onClick={() => toggleYear(s)}
              style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12,
                background: activeYears.includes(s) ? 'var(--ink)' : 'var(--surface)',
                color: activeYears.includes(s) ? '#F2F0EB' : 'var(--ink-muted)',
                border: `1px solid ${activeYears.includes(s) ? 'var(--ink)' : 'var(--border-dark)'}`,
                borderRadius: 8, padding: '6px 14px', cursor: 'pointer', transition: 'all 0.18s ease',
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Hot Topics Bar */}
      <div style={{
        margin: '24px 32px',
        background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12,
        padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
      }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, color: 'var(--ink-muted)', whiteSpace: 'nowrap' }}>
          🔥 Most repeated by ICAI:
        </span>
        {hotTopics.map(ht => (
          <span key={ht.topic} style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12,
            background: 'var(--bg)', border: '1px solid var(--border-dark)',
            borderRadius: 8, padding: '5px 12px', color: 'var(--ink)', cursor: 'pointer',
            transition: 'background 0.18s ease',
          }}>
            {ht.topic} · {ht.count}×
          </span>
        ))}
      </div>

      {/* Two-column layout */}
      <div style={{ display: 'flex' }}>

        {/* Sidebar */}
        <div style={{
          width: 220, flexShrink: 0, padding: '24px 0',
          borderRight: '1px solid var(--border)',
          position: 'sticky', top: 56,
          height: 'calc(100vh - 56px)', overflowY: 'auto',
        }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-dim)', padding: '0 16px 8px' }}>
            Chapters
          </div>

          {/* All Chapters */}
          {[{ name: 'All Chapters', count: subjectQs.length }].concat(
            paper.chapters.filter(c => chapterCounts[c]).map(c => ({ name: c, count: chapterCounts[c] }))
          ).map(item => (
            <div
              key={item.name}
              onClick={() => setActiveChapter(item.name === 'All Chapters' ? null : (activeChapter === item.name ? null : item.name))}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: 12,
                color: (item.name === 'All Chapters' ? activeChapter === null : activeChapter === item.name) ? 'var(--ink)' : 'var(--ink-muted)',
                padding: '8px 16px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', borderRadius: 6, margin: '0 8px',
                background: (item.name === 'All Chapters' ? activeChapter === null : activeChapter === item.name) ? 'var(--surface2)' : 'none',
                fontWeight: (item.name === 'All Chapters' ? activeChapter === null : activeChapter === item.name) ? 600 : 500,
                transition: 'background 0.18s ease',
              }}
            >
              <span style={{ maxWidth: 140, lineHeight: 1.4, fontSize: 11 }}>{item.name}</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 10, color: 'var(--ink-dim)' }}>{item.count}</span>
            </div>
          ))}

          <div style={{ height: 1, background: 'var(--border)', margin: '16px 16px' }} />

          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-dim)', padding: '0 16px 8px' }}>
            Quick Filters
          </div>

          {[
            { label: 'Most Repeated (3×+)', value: showMostRepeated, set: setShowMostRepeated },
            { label: 'Unsolved Only', value: showUnsolved, set: setShowUnsolved },
            { label: 'Bookmarked', value: showBookmarked, set: setShowBookmarked },
          ].map(f => (
            <label key={f.label} style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px',
              cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 12,
              color: 'var(--ink-muted)', margin: '2px 8px', borderRadius: 6,
            }}>
              <input type="checkbox" checked={f.value} onChange={e => f.set(e.target.checked)} style={{ accentColor: 'var(--ink)', cursor: 'pointer' }} />
              {f.label}
            </label>
          ))}
        </div>

        {/* Feed */}
        <div style={{ flex: 1, padding: '24px 32px', maxWidth: 840 }}>
          {/* Filter Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24, flexWrap: 'wrap' }}>
            {(['All', 'Easy', 'Medium', 'Hard'] as const).map(d => (
              <button
                key={d}
                onClick={() => setDiffFilter(d)}
                style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12,
                  background: diffFilter === d ? 'var(--ink)' : 'var(--surface)',
                  color: diffFilter === d ? '#F2F0EB' : 'var(--ink-muted)',
                  border: `1px solid ${diffFilter === d ? 'var(--ink)' : 'var(--border)'}`,
                  borderRadius: 8, padding: '6px 14px', cursor: 'pointer', transition: 'all 0.18s ease',
                }}
              >{d}</button>
            ))}

            <div style={{ width: 1, height: 24, background: 'var(--border)', margin: '0 4px' }} />

            <select style={selectStyle} value={sort} onChange={e => setSort(e.target.value)}>
              {['Latest', 'Most Repeated', 'Marks ↓'].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          {/* Cards */}
          {filteredQs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 32px', color: 'var(--ink-muted)' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 15 }}>
                No questions match your filters. Try clearing difficulty or year.
              </p>
            </div>
          ) : filteredQs.map((q, i) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={i}
              onSolve={onSolve}
              progress={progress}
              onBookmark={(id, val) => onProgressUpdate(id, { bookmarked: val })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
