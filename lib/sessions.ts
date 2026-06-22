// ============================================================
// ICAI CA Final — Per-session exam PDF URLs
//
// Note: As of current implementation, we are using the official ICAI
// "New Scheme Question Papers" compilations to demonstrate the iframe
// rendering functionality since individual session URLs from 2018-2023
// on the old scheme are scattered.
//
// To complete the dataset, an admin needs to populate the exact S3/CDN
// URLs for each historical exam paper.
// ============================================================

export interface SessionPDFs {
  qPdf: string;   // Question paper PDF URL
  aPdf: string;   // Suggested answer PDF URL
}

export type PaperKey = 'fr' | 'afm' | 'audit' | 'dt' | 'idt' | 'ibs';

// Working ICAI CDN PDFs for demonstration
const VALID_PDFS: Record<PaperKey, string> = {
  fr: 'https://resource.cdn.icai.org/80128bos64233.pdf',
  afm: 'https://resource.cdn.icai.org/80144bos64256.pdf',
  audit: 'https://resource.cdn.icai.org/80192bos64339.pdf',
  dt: 'https://resource.cdn.icai.org/80261bos64418.pdf',
  idt: 'https://resource.cdn.icai.org/80531bos64714-p5.pdf',
  ibs: 'https://resource.cdn.icai.org/80532bos64714-p6.pdf',
};

// We apply the working PDFs across all sessions so the viewer functions perfectly.
const DEFAULT_SESSION: Record<PaperKey, SessionPDFs> = {
  fr: { qPdf: VALID_PDFS.fr, aPdf: VALID_PDFS.fr },
  afm: { qPdf: VALID_PDFS.afm, aPdf: VALID_PDFS.afm },
  audit: { qPdf: VALID_PDFS.audit, aPdf: VALID_PDFS.audit },
  dt: { qPdf: VALID_PDFS.dt, aPdf: VALID_PDFS.dt },
  idt: { qPdf: VALID_PDFS.idt, aPdf: VALID_PDFS.idt },
  ibs: { qPdf: VALID_PDFS.ibs, aPdf: VALID_PDFS.ibs },
};

export const SESSION_PDFS: Record<string, Partial<Record<PaperKey, SessionPDFs>>> = {
  'May 2018': DEFAULT_SESSION,
  'Nov 2018': DEFAULT_SESSION,
  'May 2019': DEFAULT_SESSION,
  'Nov 2019': DEFAULT_SESSION,
  'Nov 2020': DEFAULT_SESSION,
  'Jan 2021': DEFAULT_SESSION,
  'Jul 2021': DEFAULT_SESSION,
  'Nov 2021': DEFAULT_SESSION,
  'May 2022': DEFAULT_SESSION,
  'Nov 2022': DEFAULT_SESSION,
  'May 2023': DEFAULT_SESSION,
  'Nov 2023': DEFAULT_SESSION,
  'May 2024': DEFAULT_SESSION,
  'Nov 2024': DEFAULT_SESSION,
  'May 2025': DEFAULT_SESSION,
};

export function getSessionPDFs(session: string, paper: PaperKey): SessionPDFs | null {
  return SESSION_PDFS[session]?.[paper] ?? null;
}

export const ALL_SESSIONS = Object.keys(SESSION_PDFS).sort((a, b) => {
  const monthOrder: Record<string, number> = {
    'Nov': 6, 'Sep': 5, 'Jul': 4, 'Jun': 3, 'May': 2, 'Jan': 1,
  };
  const [aM, aY] = a.split(' ');
  const [bM, bY] = b.split(' ');
  if (bY !== aY) return Number(bY) - Number(aY);
  return (monthOrder[bM] || 0) - (monthOrder[aM] || 0);
});

export interface QMeta {
  id: string;
  session: string;
  subjectId: PaperKey;
  questionNumber: string;
  qPage: number;
  aPage: number;
  aPageEnd: number;
  marks: number;
  chapter: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timerMins: number;
  repeatCount: number;
  relatedSessions: string[];
}

export const QUESTION_META: QMeta[] = [
  // FR
  { id:'fr-n24-q1a', session:'Nov 2024', subjectId:'fr', questionNumber:'Q.1(a)', qPage:2,  aPage:3,  aPageEnd:5,  marks:8,  chapter:'Business Combinations — Ind AS 103',        topic:'Goodwill & NCI — Full vs Proportionate',       difficulty:'Hard',   timerMins:20, repeatCount:4, relatedSessions:['May 2022','Nov 2022','May 2024','Nov 2024'] },
  { id:'fr-n24-q1b', session:'Nov 2024', subjectId:'fr', questionNumber:'Q.1(b)', qPage:3,  aPage:5,  aPageEnd:6,  marks:4,  chapter:'Revenue — Ind AS 115',                     topic:'Contract Modification',                        difficulty:'Medium', timerMins:8,  repeatCount:2, relatedSessions:['Nov 2023','Nov 2024'] },
  { id:'fr-m24-q1',  session:'May 2024', subjectId:'fr', questionNumber:'Q.1',   qPage:2,  aPage:3,  aPageEnd:6,  marks:12, chapter:'Leases — Ind AS 116',                      topic:'Lessor — Finance Lease Accounting',            difficulty:'Hard',   timerMins:25, repeatCount:3, relatedSessions:['Nov 2021','Nov 2023','May 2024'] },
  
  // AFM
  { id:'afm-n24-q1', session:'Nov 2024', subjectId:'afm', questionNumber:'Q.1',  qPage:2,  aPage:3,  aPageEnd:5,  marks:8,  chapter:'Derivatives — Options & Swaps',            topic:'Black-Scholes Call Option Pricing',             difficulty:'Hard',   timerMins:20, repeatCount:4, relatedSessions:['May 2022','Nov 2022','Nov 2023','Nov 2024'] },
  { id:'afm-m24-q2', session:'May 2024', subjectId:'afm', questionNumber:'Q.2',  qPage:3,  aPage:5,  aPageEnd:7,  marks:8,  chapter:'International Financial Management',       topic:'IRP & PPP — Forward Rate Computation',         difficulty:'Medium', timerMins:15, repeatCount:4, relatedSessions:['May 2021','Nov 2022','May 2023','May 2024'] },

  // AUDIT
  { id:'audit-n24-q1', session:'Nov 2024', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:8, chapter:'Standards on Auditing (SA 200–SA 720)', topic:'SA 705 — Modified Opinion types',  difficulty:'Hard', timerMins:20, repeatCount:4, relatedSessions:['May 2022','Nov 2022','May 2024','Nov 2024'] },
  
  // DT
  { id:'dt-n24-q1', session:'Nov 2024', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:8, chapter:'Transfer Pricing',          topic:"ALP — CUP Method computation",        difficulty:'Hard',   timerMins:20, repeatCount:4, relatedSessions:['May 2022','Nov 2022','May 2024','Nov 2024'] },
  
  // IDT
  { id:'idt-n24-q1', session:'Nov 2024', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:8, chapter:'Input Tax Credit — §16 to §21', topic:'ITC — Sec 17(5) blocked credits',      difficulty:'Hard',   timerMins:20, repeatCount:4, relatedSessions:['May 2022','Nov 2022','May 2024','Nov 2024'] },
  
  // IBS
  { id:'ibs-n24-q1', session:'Nov 2024', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:5, aPageEnd:15, marks:30, chapter:'Multidisciplinary Case Studies', topic:'M&A Case Study — Strategy, Valuation & Post-merger Integration', difficulty:'Hard', timerMins:60, repeatCount:2, relatedSessions:['Nov 2023','Nov 2024'] },
];
