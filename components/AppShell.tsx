'use client';
import { useState, useCallback } from 'react';
import { Nav } from './Nav';
import { HomeView } from './HomeView';
import { SubjectView } from './SubjectView';
import { AnalyticsView } from './AnalyticsView';
import { PracticeModal } from './PracticeModal';
import type { Question, UserProgress } from '@/lib/data';
import { ALL_QUESTIONS } from '@/lib/data';
import { loadProgress, saveProgress } from '@/lib/storage';
import { useEffect } from 'react';

type View = 'home' | 'subject' | 'analytics';

export function AppShell() {
  const [view, setView] = useState<View>('home');
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const [practiceQuestion, setPracticeQuestion] = useState<Question | null>(null);
  const [progress, setProgress] = useState<Record<string, UserProgress>>({});

  // Load progress from localStorage after mount (SSR safe)
  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const updateProgress = useCallback((id: string, update: Record<string, unknown>) => {
    setProgress(prev => ({ ...prev, [id]: { ...prev[id], ...update } }));
    saveProgress(id, update as Partial<UserProgress>);
  }, []);

  function openSubject(subjectId: string) {
    setActiveSubject(subjectId);
    setView('subject');
    window.scrollTo(0, 0);
  }

  function handleStartPracticing() {
    const unsolved = ALL_QUESTIONS.filter(q => !progress[q.id]?.attempted);
    const pool = unsolved.length > 0 ? unsolved : ALL_QUESTIONS;
    const q = pool[Math.floor(Math.random() * pool.length)];
    setPracticeQuestion(q);
  }

  function goHome() {
    setView('home');
    window.scrollTo(0, 0);
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Nav
        view={view}
        activeSubject={activeSubject}
        onHome={goHome}
        onSubjectClick={openSubject}
        onAnalytics={() => { setView('analytics'); window.scrollTo(0, 0); }}
        onStartPracticing={handleStartPracticing}
      />

      {view === 'home' && (
        <HomeView
          onSubjectClick={openSubject}
          onStartPracticing={handleStartPracticing}
          progress={progress}
        />
      )}

      {view === 'subject' && activeSubject && (
        <SubjectView
          subject={activeSubject}
          onBack={goHome}
          progress={progress}
          onProgressUpdate={updateProgress}
          onSolve={q => setPracticeQuestion(q)}
        />
      )}

      {view === 'analytics' && (
        <AnalyticsView progress={progress} />
      )}

      {practiceQuestion && (
        <PracticeModal
          question={practiceQuestion}
          onClose={() => setPracticeQuestion(null)}
          onProgressUpdate={updateProgress}
        />
      )}
    </div>
  );
}
