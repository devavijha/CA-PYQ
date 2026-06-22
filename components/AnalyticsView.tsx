'use client';
import type { UserProgress } from '@/lib/data';
import { ALL_QUESTIONS, PAPERS_DATA } from '@/lib/data';

interface AnalyticsViewProps {
  progress: Record<string, UserProgress>;
}

export function AnalyticsView({ progress }: AnalyticsViewProps) {
  const attempted = Object.values(progress).filter(p => p.attempted).length;
  const solved    = Object.values(progress).filter(p => p.correct).length;
  const accuracy  = attempted > 0 ? Math.round((solved / attempted) * 100) : 0;

  // Streak
  const dates = Object.values(progress).filter(p => p.attemptedAt).map(p => p.attemptedAt!.slice(0, 10));
  const uniqueDates = [...new Set(dates)].sort().reverse();
  let streak = 0;
  if (uniqueDates.length) {
    const today = new Date().toISOString().slice(0, 10);
    let check = today;
    for (const d of uniqueDates) {
      if (d === check) {
        streak++;
        const prev = new Date(check);
        prev.setDate(prev.getDate() - 1);
        check = prev.toISOString().slice(0, 10);
      } else break;
    }
  }

  // Heatmap (52 weeks × 7 days)
  const heatData = Array.from({ length: 364 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (363 - i));
    const key = d.toISOString().slice(0, 10);
    const count = dates.filter(dd => dd === key).length;
    return count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : count <= 8 ? 3 : 4;
  });

  // Per-subject stats
  const subjectStats = Object.keys(PAPERS_DATA).map(sid => {
    const qs  = ALL_QUESTIONS.filter(q => q.subjectId === sid);
    const att = qs.filter(q => progress[q.id]?.attempted).length;
    const cor = qs.filter(q => progress[q.id]?.correct).length;
    return { sid, att, cor, pct: att > 0 ? Math.round((cor / att) * 100) : 0 };
  });

  // Dynamically compute weakest chapters based on progress
  const chapterStats: Record<string, { correct: number; total: number; subject: string }> = {};
  
  ALL_QUESTIONS.forEach(q => {
    const p = progress[q.id];
    if (p && p.attempted) {
      const key = q.chapter;
      if (!chapterStats[key]) {
        chapterStats[key] = { correct: 0, total: 0, subject: PAPERS_DATA[q.subjectId].shortName };
      }
      chapterStats[key].total++;
      if (p.correct) {
        chapterStats[key].correct++;
      }
    }
  });

  const weakZones = Object.entries(chapterStats)
    .map(([chapter, stats]) => ({
      chapter: `${chapter} (${stats.subject})`,
      correct: stats.correct,
      total: stats.total,
      accuracy: stats.correct / stats.total,
    }))
    .sort((a, b) => {
      if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy;
      return b.total - a.total;
    })
    .slice(0, 5);

  const streakMsg =
    streak === 0 ? 'Start your streak today.' :
    streak === 1 ? 'Day 1. The exam respects consistency.' :
    streak >= 30 ? '30 days. Most people quit before this.' :
    streak >= 7  ? '7 days straight. Building something real.' :
    `${streak} day streak.`;

  const heatColors = ['var(--surface2)', 'rgba(26,26,26,0.15)', 'rgba(26,26,26,0.35)', 'rgba(26,26,26,0.6)', 'rgba(26,26,26,0.85)'];

  return (
    <div style={{ padding: '48px 32px', maxWidth: 960, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 40, color: 'var(--ink)', marginBottom: 32 }}>
        Your Progress
      </h1>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 48 }}>
        {[
          { num: attempted, label: 'Attempted' },
          { num: solved,    label: 'Solved' },
          { num: `${accuracy}%`, label: 'Accuracy' },
          { num: `${streak}d`,  label: streakMsg },
        ].map((s, i) => (
          <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: 20, textAlign: 'center' }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 36, color: 'var(--ink)' }}>{s.num}</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 12, color: 'var(--ink-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Activity Heatmap */}
      <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-dim)', marginBottom: 16 }}>
        Activity — Last 52 Weeks
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(52, 1fr)', gap: 3, marginBottom: 8 }}>
        {heatData.map((h, i) => (
          <div key={i} title={`${h} sessions`} style={{ aspectRatio: '1', borderRadius: 2, background: heatColors[h], transition: 'transform 0.1s' }} />
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'var(--ink-dim)', marginBottom: 48 }}>
        <span>Less</span>
        {[0,1,2,3,4].map(h => (
          <div key={h} style={{ width: 12, height: 12, borderRadius: 2, background: heatColors[h] }} />
        ))}
        <span>More</span>
      </div>

      {/* Accuracy by Paper */}
      <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-dim)', marginBottom: 16 }}>
        Accuracy by Paper
      </div>
      {subjectStats.map(ss => {
        const paper = PAPERS_DATA[ss.sid];
        return (
          <div key={ss.sid} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 13, color: 'var(--ink)', width: 64 }}>{paper.shortName}</span>
            <div style={{ flex: 1, height: 8, background: 'var(--surface2)', borderRadius: 99, overflow: 'hidden' }}>
              <div style={{ width: `${ss.pct}%`, height: '100%', background: paper.color, borderRadius: 99, transition: 'width 1s ease' }} />
            </div>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 12, color: 'var(--ink-muted)', width: 36, textAlign: 'right' }}>{ss.pct}%</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'var(--ink-dim)', minWidth: 70 }}>
              {ss.att > 0 ? `${ss.cor}/${ss.att}` : 'No attempts'}
            </span>
          </div>
        );
      })}

      {/* Weakest Chapters */}
      {weakZones.length > 0 && (
        <>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-dim)', marginTop: 40, marginBottom: 16 }}>
            Weakest Chapters
          </div>
          {weakZones.map((z, i) => (
            <div key={z.chapter} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 20px', background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 10, marginBottom: 8,
            }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, color: 'var(--border-dark)', width: 32 }}>#{i + 1}</span>
              <span style={{ flex: 1, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, color: 'var(--ink)' }}>{z.chapter}</span>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 12, color: 'var(--ink-muted)' }}>{z.correct}/{z.total} correct</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 12, color: '#C44B2B' }}>{Math.round((z.correct / z.total) * 100)}%</div>
              </div>
            </div>
          ))}
        </>
      )}

      {attempted < 10 && (
        <div style={{ textAlign: 'center', padding: '48px 32px', color: 'var(--ink-muted)', marginTop: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>📊</div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 15 }}>
            Attempt at least 10 questions to see your full performance breakdown.
          </p>
        </div>
      )}
    </div>
  );
}
