'use client';
import { useState, useEffect, useCallback } from 'react';
import { TimerRing } from './TimerRing';
import { ICAIAnswerViewer } from './ICAIAnswerViewer';
import type { Question } from '@/lib/data';
import { PAPERS_DATA } from '@/lib/data';
import { RepeatBadge } from './RepeatBadge';
import { getSessionPDFs } from '@/lib/sessions';

interface PracticeModalProps {
  question: Question;
  onClose: () => void;
  onProgressUpdate: (id: string, update: Record<string, unknown>) => void;
}

export function PracticeModal({ question, onClose, onProgressUpdate }: PracticeModalProps) {
  const paper = PAPERS_DATA[question.subjectId];
  const totalSecs = question.timerMins * 60;
  const [secs, setSecs] = useState(totalSecs);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [assessed, setAssessed] = useState<'nailed' | 'revision' | 'skip' | null>(null);
  const [shaking, setShaking] = useState(false);

  const pdfs = getSessionPDFs(question.session, question.subjectId);
  const qPdfUrl = pdfs?.qPdf;
  const aPdfUrl = pdfs?.aPdf;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (running && secs > 0) {
      interval = setInterval(() => setSecs(s => s - 1), 1000);
    } else if (secs === 0 && running) {
      setRunning(false);
      setDone(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
    return () => clearInterval(interval);
  }, [running, secs]);

  const handleClose = useCallback(() => onClose(), [onClose]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleClose]);

  function handleAssess(result: 'nailed' | 'revision' | 'skip') {
    setAssessed(result);
    onProgressUpdate(question.id, {
      attempted: true,
      correct: result === 'nailed',
      timeTaken: totalSecs - secs,
      attemptedAt: new Date().toISOString(),
    });
  }

  const difficultyColors = {
    Easy:   { bg: 'rgba(126,221,176,0.2)', color: '#2D9E6B' },
    Medium: { bg: 'rgba(245,200,66,0.2)',  color: '#B8860B' },
    Hard:   { bg: 'rgba(244,135,106,0.2)', color: '#C44B2B' },
  };
  const dc = difficultyColors[question.difficulty];

  const msgMap = {
    nailed:   'One more done. Keep going.',
    revision: 'Honest answer. Mark it for later.',
    skip:     'Skipped. Come back to it.',
  };

  const btnTimerBase: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12,
    background: 'var(--surface)', border: '1px solid var(--border-dark)',
    borderRadius: 8, padding: '8px 16px', cursor: 'pointer', color: 'var(--ink)',
    transition: 'background 0.18s ease',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Practice: ${question.topic}`}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(242,240,235,0.93)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex', flexDirection: 'column',
      }}
      className="modal-animate"
    >
      {/* Header */}
      <div style={{
        height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px', borderBottom: '1px solid var(--border)', background: 'var(--bg)', flexShrink: 0,
      }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, color: 'var(--ink-muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, color: 'var(--ink)' }}>{paper.shortName}</span>
          <span>·</span>
          <span>{question.session}</span>
          <span>·</span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}>{question.marks} Marks</span>
          <span>·</span>
          <span style={{ background: dc.bg, color: dc.color, borderRadius: 6, padding: '2px 8px', fontSize: 11, fontWeight: 700 }}>
            {question.difficulty}
          </span>
          <span style={{ display: 'none' }}>·</span>
          <span style={{ display: 'none' }}>{question.topic}</span>
        </div>
        <button
          onClick={onClose}
          style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, background: 'none',
            border: '1px solid var(--border-dark)', borderRadius: 8, padding: '6px 14px',
            cursor: 'pointer', color: 'var(--ink-muted)', transition: 'background 0.18s ease',
          }}
        >
          × Close
        </button>
      </div>

      {/* Body: Two Panels */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', minHeight: 0 }}>

        {/* Left — Question Panel */}
        <div
          className={shaking ? 'shake' : ''}
          style={{
            flex: 1, padding: 32, overflowY: 'auto',
            borderRight: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', gap: 24,
          }}
        >
          {/* Timer and Header Info */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <TimerRing secs={secs} totalSecs={totalSecs} color={paper.color} running={running} done={done} />
              <div style={{ display: 'flex', gap: 8 }}>
                {!running && !done && (
                  <button style={{ ...btnTimerBase, background: 'var(--ink)', color: '#F2F0EB' }} onClick={() => setRunning(true)}>▶ Start</button>
                )}
                {running && (
                  <button style={btnTimerBase} onClick={() => setRunning(false)}>⏸ Pause</button>
                )}
                <button style={btnTimerBase} onClick={() => { setSecs(totalSecs); setRunning(false); setDone(false); }}>↺ Reset</button>
              </div>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <RepeatBadge count={question.repeatCount} />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 11, color: 'var(--ink-dim)' }}>
                  {question.questionNumber} · {question.session}
                </span>
              </div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--ink)', marginBottom: 12 }}>
                {question.topic}
              </h2>
            </div>
          </div>

          <div style={{ height: 1, background: 'var(--border)', flexShrink: 0 }} />

          {/* Question PDF iframe */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 400 }}>
             {qPdfUrl ? (
               <iframe
                 src={`${qPdfUrl}#page=${question.qPage}&toolbar=1&navpanes=0&scrollbar=1`}
                 title={`Question ${question.questionNumber}`}
                 style={{ width: '100%', flex: 1, border: '1px solid var(--border-dark)', borderRadius: 12, background: '#525659' }}
               />
             ) : (
               <div style={{ padding: 24, background: 'var(--surface)', borderRadius: 8, textAlign: 'center', color: 'var(--ink-muted)' }}>
                 Question PDF not available.
               </div>
             )}
          </div>

          <div style={{ height: 1, background: 'var(--border)', flexShrink: 0 }} />

          {/* Assessment */}
          <div style={{ marginTop: 'auto', flexShrink: 0 }}>
            {!assessed ? (
              <>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                  How did it go?
                </p>
                <div style={{ display: 'flex', gap: 8 }}>
                  {([
                    { key: 'nailed', label: '✓ Nailed it', bg: 'rgba(126,221,176,0.15)', border: 'rgba(126,221,176,0.5)', color: '#2D9E6B' },
                    { key: 'revision', label: '↻ Need Revision', bg: 'rgba(245,200,66,0.12)', border: 'rgba(245,200,66,0.4)', color: '#8B6914' },
                    { key: 'skip', label: '→ Skip for now', bg: 'var(--surface)', border: 'var(--border-dark)', color: 'var(--ink)' },
                  ] as const).map(b => (
                    <button
                      key={b.key}
                      onClick={() => handleAssess(b.key)}
                      style={{
                        flex: 1,
                        fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14,
                        background: b.bg, border: `1px solid ${b.border}`, borderRadius: 10,
                        padding: '12px 20px', cursor: 'pointer', textAlign: 'center',
                        color: b.color, transition: 'transform 0.1s ease',
                      }}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: 16, background: 'var(--surface)', borderRadius: 10, border: '1px solid var(--border)' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 14, color: 'var(--ink-muted)', marginBottom: 12 }}>
                  {msgMap[assessed]}
                </p>
                <button
                  onClick={onClose}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, background: 'var(--ink)', color: '#F2F0EB', border: 'none', borderRadius: 8, padding: '10px 24px', cursor: 'pointer', width: '100%' }}
                >
                  → Next Question
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right — Answer Panel */}
        <div style={{ flex: 1, padding: 32, overflowY: 'auto' }}>
          {aPdfUrl ? (
             <ICAIAnswerViewer
               answerPdfUrl={aPdfUrl}
               answerPage={question.aPage}
               answerPageEnd={question.aPageEnd}
               questionLabel={`${paper.shortName} · ${question.session} · ${question.questionNumber}`}
             />
          ) : (
             <div style={{ padding: 24, background: 'var(--surface)', borderRadius: 8, textAlign: 'center', color: 'var(--ink-muted)' }}>
               Answer PDF not available.
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
