'use client';
import { formatTime } from '@/lib/storage';

interface TimerRingProps {
  secs: number;
  totalSecs: number;
  color: string;
  running: boolean;
  done: boolean;
}

export function TimerRing({ secs, totalSecs, color, running, done }: TimerRingProps) {
  const r = 48;
  const circ = 2 * Math.PI * r;
  const remaining = totalSecs > 0 ? secs / totalSecs : 1;
  const offset = circ * (1 - remaining);
  const ringColor =
    remaining > 0.3 ? color :
    remaining > 0.1 ? '#B8860B' :
    '#C44B2B';
  const isUrgent = remaining <= 0.1 && remaining > 0 && running;

  return (
    <svg
      width={112}
      height={112}
      className={isUrgent ? 'urgent-pulse' : ''}
      aria-label={`Timer: ${formatTime(secs)}`}
    >
      {/* track */}
      <circle cx={56} cy={56} r={r} fill="none" stroke="var(--border-dark)" strokeWidth={5} />
      {/* progress */}
      <circle
        cx={56} cy={56} r={r}
        fill="none"
        stroke={ringColor}
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform="rotate(-90 56 56)"
        style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.4s ease' }}
      />
      {/* time */}
      <text
        x={56} y={50}
        textAnchor="middle" dominantBaseline="middle"
        fontFamily="JetBrains Mono, monospace" fontWeight={700} fontSize={20}
        fill="var(--ink)"
      >
        {formatTime(secs)}
      </text>
      <text
        x={56} y={69}
        textAnchor="middle"
        fontFamily="Inter, sans-serif" fontWeight={500} fontSize={10}
        fill="var(--ink-dim)" letterSpacing={1}
      >
        {done ? 'DONE' : running ? 'RUNNING' : 'READY'}
      </text>
    </svg>
  );
}
