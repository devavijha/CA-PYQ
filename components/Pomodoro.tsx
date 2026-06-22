'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

type Mode = 'focus' | 'short' | 'long';

const MODES: Record<Mode, { label: string; mins: number; color: string }> = {
  focus: { label: 'Focus',       mins: 25, color: '#C8B8F8' },
  short: { label: 'Short Break', mins:  5, color: '#7EDDB0' },
  long:  { label: 'Long Break',  mins: 15, color: '#9BB8F5' },
};

function fmt(secs: number) {
  const m = String(Math.floor(secs / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return `${m}:${s}`;
}

interface PomodoroProps {
  open: boolean;
  onClose: () => void;
}

export function Pomodoro({ open, onClose }: PomodoroProps) {
  const [mode, setMode]           = useState<Mode>('focus');
  const [secsLeft, setSecsLeft]   = useState(MODES.focus.mins * 60);
  const [running, setRunning]     = useState(false);
  const [sessions, setSessions]   = useState(0);   // completed focus sessions
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [customMins, setCustomMins]   = useState<Partial<Record<Mode, number>>>({});
  const intervalRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  // AudioContext created on first user gesture so browsers allow sound
  const audioCtxRef  = useRef<AudioContext | null>(null);

  // Must be called inside a click handler to satisfy browser autoplay policy
  function initAudio() {
    if (!audioCtxRef.current) {
      const AC = window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AC();
    }
    // Resume if suspended (happens after tab loses focus)
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  }

  function playTone(freq: number, duration: number) {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    try {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch { /* ignore */ }
  }

  function playChime() {
    playTone(880, 0.2);
    setTimeout(() => playTone(660, 0.25), 260);
    setTimeout(() => playTone(990, 0.3),  520);
  }

  const totalSecs = (customMins[mode] ?? MODES[mode].mins) * 60;
  const pct       = ((totalSecs - secsLeft) / totalSecs) * 100;
  const color     = MODES[mode].color;

  // Switch mode — resets timer
  const switchMode = useCallback((m: Mode) => {
    setMode(m);
    setRunning(false);
    setSecsLeft((customMins[m] ?? MODES[m].mins) * 60);
  }, [customMins]);

  // Tick
  useEffect(() => {
    if (!running) { clearInterval(intervalRef.current!); return; }
    intervalRef.current = setInterval(() => {
      setSecsLeft(s => {
        if (s <= 1) {
          clearInterval(intervalRef.current!);
          playChime();
          if (autoAdvance) {
            setSessions(prev => {
              const next = mode === 'focus' ? prev + 1 : prev;
              // after 4 focus sessions → long break, else short break
              if (mode === 'focus') {
                const nextMode: Mode = (next % 4 === 0) ? 'long' : 'short';
                setTimeout(() => switchMode(nextMode), 600);
              } else {
                setTimeout(() => switchMode('focus'), 600);
              }
              return next;
            });
          } else {
            setRunning(false);
          }
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current!);
  }, [running, mode, autoAdvance, switchMode]);

  // Update favicon/title with timer
  useEffect(() => {
    if (!open) { document.title = 'CA Finals'; return; }
    document.title = running ? `${fmt(secsLeft)} · ${MODES[mode].label}` : 'CA Finals';
  }, [secsLeft, running, mode, open]);

  // Update custom duration and reset timer to new duration when not running
  function setCustomDur(m: Mode, val: number) {
    const clamped = Math.max(1, Math.min(120, val));
    setCustomMins(prev => ({ ...prev, [m]: clamped }));
    if (m === mode && !running) setSecsLeft(clamped * 60);
  }

  if (!open) return null;

  const circumference = 2 * Math.PI * 54;
  const strokeDash    = circumference - (pct / 100) * circumference;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 199,
          background: 'rgba(26,26,26,0.25)', backdropFilter: 'blur(4px)',
        }}
      />

      {/* Panel */}
      <div
        className="modal-animate"
        style={{
          position: 'fixed', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 200,
          width: 'min(420px, 94vw)',
          background: 'var(--bg)',
          border: '1px solid var(--border-dark)',
          borderRadius: 24,
          padding: '28px 24px 24px',
          boxShadow: '0 24px 64px rgba(26,26,26,0.2)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 17, color: 'var(--ink)' }}>
              ⏱ Pomodoro Focus
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 2 }}>
              {sessions} session{sessions !== 1 ? 's' : ''} completed today
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-muted)', fontSize: 20, lineHeight: 1 }}>×</button>
        </div>

        {/* Mode tabs */}
        <div style={{ display: 'flex', gap: 6, background: 'var(--surface)', borderRadius: 12, padding: 4, marginBottom: 24 }}>
          {(Object.keys(MODES) as Mode[]).map(m => (
            <button
              key={m}
              onClick={() => switchMode(m)}
              style={{
                flex: 1, padding: '7px 0',
                borderRadius: 9, border: 'none', cursor: 'pointer',
                fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12,
                background: mode === m ? 'var(--bg)' : 'transparent',
                color: mode === m ? 'var(--ink)' : 'var(--ink-muted)',
                boxShadow: mode === m ? '0 1px 4px rgba(26,26,26,0.1)' : 'none',
                transition: 'all 0.18s ease',
              }}
            >
              {MODES[m].label}
            </button>
          ))}
        </div>

        {/* SVG ring timer */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
          <div style={{ position: 'relative', width: 140, height: 140 }}>
            <svg width={140} height={140} style={{ transform: 'rotate(-90deg)' }}>
              <circle cx={70} cy={70} r={54} fill="none" stroke="var(--surface)" strokeWidth={8} />
              <circle
                cx={70} cy={70} r={54} fill="none"
                stroke={color} strokeWidth={8}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDash}
                style={{ transition: 'stroke-dashoffset 0.9s ease, stroke 0.3s ease' }}
              />
            </svg>
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 32, color: 'var(--ink)', lineHeight: 1 }}>
                {fmt(secsLeft)}
              </div>
              <div style={{ fontSize: 11, color: 'var(--ink-muted)', marginTop: 4, fontWeight: 600 }}>
                {MODES[mode].label.toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
          <button
            onClick={() => {
              initAudio();          // ← must happen inside click handler
              setRunning(r => !r);
            }}
            style={{
              flex: 1, padding: '12px 0',
              borderRadius: 12, border: 'none', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14,
              background: color, color: 'var(--ink)',
              transition: 'opacity 0.18s ease, transform 0.18s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = ''; }}
          >
            {running ? '⏸ Pause' : secsLeft === 0 ? '↺ Restart' : '▶ Start'}
          </button>
          <button
            onClick={() => { setRunning(false); setSecsLeft(totalSecs); }}
            style={{
              padding: '12px 16px', borderRadius: 12,
              border: '1px solid var(--border-dark)', background: 'none',
              cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13,
              color: 'var(--ink-muted)', transition: 'background 0.18s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'none'; }}
          >
            ↺ Reset
          </button>
        </div>

        {/* Settings */}
        <div style={{
          background: 'var(--surface)', borderRadius: 14, padding: '16px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <span style={{ fontWeight: 600, fontSize: 12, color: 'var(--ink)', letterSpacing: '0.04em' }}>SETTINGS</span>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <span style={{ fontSize: 12, color: 'var(--ink-muted)', fontWeight: 500 }}>Auto-advance</span>
              <div
                onClick={() => setAutoAdvance(a => !a)}
                style={{
                  width: 36, height: 20, borderRadius: 99,
                  background: autoAdvance ? '#7EDDB0' : 'var(--surface2)',
                  position: 'relative', cursor: 'pointer',
                  transition: 'background 0.2s ease',
                  border: '1px solid var(--border-dark)',
                }}
              >
                <div style={{
                  position: 'absolute', top: 2,
                  left: autoAdvance ? 17 : 2,
                  width: 14, height: 14, borderRadius: '50%',
                  background: 'var(--bg)',
                  transition: 'left 0.2s ease',
                  boxShadow: '0 1px 3px rgba(26,26,26,0.15)',
                }} />
              </div>
            </label>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
            {(Object.keys(MODES) as Mode[]).map(m => (
              <div key={m}>
                <div style={{ fontSize: 10, color: 'var(--ink-muted)', fontWeight: 600, marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {MODES[m].label}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <input
                    type="number"
                    min={1} max={120}
                    value={customMins[m] ?? MODES[m].mins}
                    onChange={e => setCustomDur(m, Number(e.target.value))}
                    style={{
                      width: '100%', padding: '6px 8px',
                      borderRadius: 8, border: '1px solid var(--border-dark)',
                      background: 'var(--bg)', color: 'var(--ink)',
                      fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 13,
                      textAlign: 'center', outline: 'none',
                    }}
                  />
                  <span style={{ fontSize: 11, color: 'var(--ink-dim)', whiteSpace: 'nowrap' }}>min</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Session dots */}
        {sessions > 0 && (
          <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 11, color: 'var(--ink-muted)', fontWeight: 600 }}>TODAY</span>
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
              {Array.from({ length: sessions }).map((_, i) => (
                <div key={i} style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: i % 4 === 3 ? '#9BB8F5' : '#C8B8F8',
                }} aria-label={`Session ${i + 1}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
