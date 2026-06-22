import type { UserProgress } from './data';

const STORAGE_KEY = 'ca_pyq_progress_v1';

export function loadProgress(): Record<string, UserProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveProgress(questionId: string, update: Partial<UserProgress>): void {
  if (typeof window === 'undefined') return;
  const all = loadProgress();
  all[questionId] = { ...all[questionId], ...update, updatedAt: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function formatTime(secs: number): string {
  const m = Math.floor(secs / 60).toString().padStart(2, '0');
  const s = (secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}
