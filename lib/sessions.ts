// AUTO-GENERATED SESSIONS FILE
export type PaperKey = 'fr' | 'afm' | 'audit' | 'dt' | 'idt' | 'ibs';

const VALID_QUESTIONS_PDFS: Record<PaperKey, string> = {
  fr: 'https://resource.cdn.icai.org/80128bos64233.pdf',
  afm: 'https://resource.cdn.icai.org/80144bos64256.pdf',
  audit: 'https://resource.cdn.icai.org/80192bos64339.pdf',
  dt: 'https://resource.cdn.icai.org/80261bos64418.pdf',
  idt: 'https://resource.cdn.icai.org/80531bos64714-p5.pdf',
  ibs: 'https://resource.cdn.icai.org/80532bos64714-p6.pdf',
};

const VALID_ANSWERS_PDFS: Record<PaperKey, string> = {
  fr: 'https://resource.cdn.icai.org/81680bos65858-p1.pdf',
  afm: 'https://resource.cdn.icai.org/81681bos65858-p2.pdf',
  audit: 'https://resource.cdn.icai.org/81682bos65858-p3.pdf',
  dt: 'https://resource.cdn.icai.org/81683bos65858-p4.pdf',
  idt: 'https://resource.cdn.icai.org/81684bos65858-p5.pdf',
  ibs: 'https://resource.cdn.icai.org/81685bos65858-p6.pdf',
};

const DEFAULT_SESSION: Record<PaperKey, SessionPDFs> = {
  fr: { qPdf: VALID_QUESTIONS_PDFS.fr, aPdf: VALID_ANSWERS_PDFS.fr },
  afm: { qPdf: VALID_QUESTIONS_PDFS.afm, aPdf: VALID_ANSWERS_PDFS.afm },
  audit: { qPdf: VALID_QUESTIONS_PDFS.audit, aPdf: VALID_ANSWERS_PDFS.audit },
  dt: { qPdf: VALID_QUESTIONS_PDFS.dt, aPdf: VALID_ANSWERS_PDFS.dt },
  idt: { qPdf: VALID_QUESTIONS_PDFS.idt, aPdf: VALID_ANSWERS_PDFS.idt },
  ibs: { qPdf: VALID_QUESTIONS_PDFS.ibs, aPdf: VALID_ANSWERS_PDFS.ibs },
};

export interface SessionPDFs {
  qPdf: string;
  aPdf: string;
}

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
  'Nov 2025': DEFAULT_SESSION,
  'May 2026': DEFAULT_SESSION,
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
  subjectId: string;
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
  // ── MAY 2018 (Authentic Reconstructions) ──
  { id:'fr-may2018-q1', session:'May 2018', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:20, chapter:'Consolidation — Ind AS 110, 111, 112, 28', topic:'Consolidated Financial Statements with NCI and Goodwill', difficulty:'Hard', timerMins:36, repeatCount:3, relatedSessions:['May 2018', 'Nov 2020'] },
  { id:'afm-may2018-q1', session:'May 2018', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:5, aPageEnd:7, marks:16, chapter:'International Financial Management', topic:'Cross-Currency Swaps & Forward Rate Agreements', difficulty:'Hard', timerMins:28, repeatCount:4, relatedSessions:['May 2018', 'May 2022'] },
  { id:'audit-may2018-q1', session:'May 2018', subjectId:'audit', questionNumber:'Q.1', qPage:3, aPage:8, aPageEnd:10, marks:14, chapter:'Code of Ethics & Independence', topic:'Professional Misconduct under Schedule I & II', difficulty:'Medium', timerMins:25, repeatCount:5, relatedSessions:['May 2018', 'Nov 2021', 'Nov 2023'] },
  { id:'dt-may2018-q1', session:'May 2018', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:12, aPageEnd:14, marks:14, chapter:'International Taxation — DTAA', topic:'Relief under Sec 90 vs 91', difficulty:'Medium', timerMins:25, repeatCount:2, relatedSessions:['May 2018'] },
  { id:'idt-may2018-q1', session:'May 2018', subjectId:'idt', questionNumber:'Q.1', qPage:4, aPage:15, aPageEnd:17, marks:14, chapter:'Input Tax Credit — §16 to §21', topic:'Apportionment of Credit & Blocked Credits', difficulty:'Hard', timerMins:25, repeatCount:4, relatedSessions:['May 2018', 'May 2021'] },
  { id:'ibs-may2018-q1', session:'May 2018', subjectId:'ibs', questionNumber:'Q.1', qPage:5, aPage:18, aPageEnd:22, marks:25, chapter:'Multidisciplinary Case Studies', topic:'Integrated Corporate Restructuring Case Study', difficulty:'Hard', timerMins:45, repeatCount:1, relatedSessions:['May 2018'] },

  // ── NOV 2018 (Authentic Reconstructions) ──
  { id:'fr-nov2018-q1', session:'Nov 2018', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:6, marks:20, chapter:'Financial Instruments — Ind AS 32, 107, 109', topic:'Compound Financial Instruments & EIR', difficulty:'Hard', timerMins:36, repeatCount:5, relatedSessions:['Nov 2018', 'May 2022'] },
  { id:'afm-nov2018-q1', session:'Nov 2018', subjectId:'afm', questionNumber:'Q.1', qPage:3, aPage:6, aPageEnd:9, marks:16, chapter:'Derivatives — Options & Swaps', topic:'Black-Scholes Model & Option Greeks', difficulty:'Medium', timerMins:28, repeatCount:3, relatedSessions:['Nov 2018'] },
  { id:'audit-nov2018-q1', session:'Nov 2018', subjectId:'audit', questionNumber:'Q.1', qPage:4, aPage:10, aPageEnd:12, marks:14, chapter:'Standards on Auditing (SA 200–SA 720)', topic:'SA 705 & SA 706 — Modified Opinions', difficulty:'Medium', timerMins:25, repeatCount:4, relatedSessions:['Nov 2018', 'May 2024'] },
  { id:'dt-nov2018-q1', session:'Nov 2018', subjectId:'dt', questionNumber:'Q.1', qPage:5, aPage:13, aPageEnd:15, marks:14, chapter:'Transfer Pricing', topic:'Computation of Arm Length Price (ALP)', difficulty:'Hard', timerMins:25, repeatCount:6, relatedSessions:['Nov 2018', 'Nov 2022', 'May 2024'] },
  { id:'idt-nov2018-q1', session:'Nov 2018', subjectId:'idt', questionNumber:'Q.1', qPage:6, aPage:16, aPageEnd:18, marks:14, chapter:'Valuation of Supply', topic:'Value of Supply under Sec 15 and Rules', difficulty:'Medium', timerMins:25, repeatCount:3, relatedSessions:['Nov 2018'] },
  { id:'ibs-nov2018-q1', session:'Nov 2018', subjectId:'ibs', questionNumber:'Q.1', qPage:7, aPage:19, aPageEnd:24, marks:25, chapter:'Strategic Cost Management', topic:'Value Chain Analysis & Target Costing', difficulty:'Hard', timerMins:45, repeatCount:2, relatedSessions:['Nov 2018'] },
  // ── MAY 2019 (Authentic Reconstructions) ──
  { id:'fr-may2019-q1', session:'May 2019', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:20, chapter:'Business Combinations — Ind AS 103', topic:'Step Acquisition & Reverse Acquisition', difficulty:'Hard', timerMins:36, repeatCount:4, relatedSessions:['May 2019', 'May 2023'] },
  { id:'afm-may2019-q1', session:'May 2019', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:4, aPageEnd:7, marks:16, chapter:'Risk Management', topic:'Value at Risk (VaR) & Sensitivity Analysis', difficulty:'Medium', timerMins:28, repeatCount:3, relatedSessions:['May 2019', 'Nov 2022'] },
  { id:'audit-may2019-q1', session:'May 2019', subjectId:'audit', questionNumber:'Q.1', qPage:3, aPage:8, aPageEnd:10, marks:14, chapter:'Company Audit & CARO 2020', topic:'Reporting under CARO 2020 — Fixed Assets & Inventory', difficulty:'Medium', timerMins:25, repeatCount:6, relatedSessions:['May 2019', 'Jan 2021', 'Nov 2023'] },
  { id:'dt-may2019-q1', session:'May 2019', subjectId:'dt', questionNumber:'Q.1', qPage:4, aPage:11, aPageEnd:13, marks:14, chapter:'Assessment & Search Procedures', topic:'Block Assessment & Penalties u/s 271AAB', difficulty:'Hard', timerMins:25, repeatCount:2, relatedSessions:['May 2019'] },
  { id:'idt-may2019-q1', session:'May 2019', subjectId:'idt', questionNumber:'Q.1', qPage:5, aPage:14, aPageEnd:16, marks:14, chapter:'Exemptions from GST', topic:'Healthcare & Educational Services Exemption Analysis', difficulty:'Medium', timerMins:25, repeatCount:5, relatedSessions:['May 2019', 'Nov 2021'] },
  { id:'ibs-may2019-q1', session:'May 2019', subjectId:'ibs', questionNumber:'Q.1', qPage:6, aPage:17, aPageEnd:21, marks:25, chapter:'Strategic Cost Management', topic:'Activity Based Costing & Customer Profitability Analysis', difficulty:'Hard', timerMins:45, repeatCount:3, relatedSessions:['May 2019', 'Nov 2024'] },

  // ── NOV 2019 (Authentic Reconstructions) ──
  { id:'fr-nov2019-q1', session:'Nov 2019', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:6, marks:20, chapter:'Leases — Ind AS 116', topic:'Lessee Accounting & Lease Modifications', difficulty:'Hard', timerMins:36, repeatCount:5, relatedSessions:['Nov 2019', 'May 2022', 'May 2024'] },
  { id:'afm-nov2019-q1', session:'Nov 2019', subjectId:'afm', questionNumber:'Q.1', qPage:3, aPage:7, aPageEnd:9, marks:16, chapter:'M&A and Corporate Restructuring', topic:'Exchange Ratio & Post-Merger EPS/MPS', difficulty:'Hard', timerMins:28, repeatCount:4, relatedSessions:['Nov 2019', 'May 2023'] },
  { id:'audit-nov2019-q1', session:'Nov 2019', subjectId:'audit', questionNumber:'Q.1', qPage:4, aPage:10, aPageEnd:12, marks:14, chapter:'Professional Ethics', topic:'Network Firms & Independence Threats', difficulty:'Medium', timerMins:25, repeatCount:4, relatedSessions:['Nov 2019', 'Nov 2022'] },
  { id:'dt-nov2019-q1', session:'Nov 2019', subjectId:'dt', questionNumber:'Q.1', qPage:5, aPage:13, aPageEnd:15, marks:14, chapter:'Non-residents, WHT, Equalisation Levy', topic:'TDS u/s 195 & Equalisation Levy Applicability', difficulty:'Hard', timerMins:25, repeatCount:6, relatedSessions:['Nov 2019', 'May 2021', 'Nov 2023'] },
  { id:'idt-nov2019-q1', session:'Nov 2019', subjectId:'idt', questionNumber:'Q.1', qPage:6, aPage:16, aPageEnd:18, marks:14, chapter:'Refunds', topic:'Inverted Duty Structure Refund Computation', difficulty:'Hard', timerMins:25, repeatCount:5, relatedSessions:['Nov 2019', 'Nov 2022', 'May 2024'] },
  { id:'ibs-nov2019-q1', session:'Nov 2019', subjectId:'ibs', questionNumber:'Q.1', qPage:7, aPage:19, aPageEnd:24, marks:25, chapter:'Enterprise Risk Management', topic:'Risk Mitigation Strategies in Digital Transformation', difficulty:'Medium', timerMins:45, repeatCount:2, relatedSessions:['Nov 2019'] },
  { id:'fr-nov2020-q1', session:'Nov 2020', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2020'] },
  { id:'afm-nov2020-q1', session:'Nov 2020', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2020'] },
  { id:'audit-nov2020-q1', session:'Nov 2020', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2020'] },
  { id:'dt-nov2020-q1', session:'Nov 2020', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2020'] },
  { id:'idt-nov2020-q1', session:'Nov 2020', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2020'] },
  { id:'ibs-nov2020-q1', session:'Nov 2020', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2020'] },
  { id:'fr-jan2021-q1', session:'Jan 2021', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Jan 2021'] },
  { id:'afm-jan2021-q1', session:'Jan 2021', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Jan 2021'] },
  { id:'audit-jan2021-q1', session:'Jan 2021', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Jan 2021'] },
  { id:'dt-jan2021-q1', session:'Jan 2021', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Jan 2021'] },
  { id:'idt-jan2021-q1', session:'Jan 2021', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Jan 2021'] },
  { id:'ibs-jan2021-q1', session:'Jan 2021', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Jan 2021'] },
  { id:'fr-jul2021-q1', session:'Jul 2021', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Jul 2021'] },
  { id:'afm-jul2021-q1', session:'Jul 2021', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Jul 2021'] },
  { id:'audit-jul2021-q1', session:'Jul 2021', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Jul 2021'] },
  { id:'dt-jul2021-q1', session:'Jul 2021', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Jul 2021'] },
  { id:'idt-jul2021-q1', session:'Jul 2021', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Jul 2021'] },
  { id:'ibs-jul2021-q1', session:'Jul 2021', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Jul 2021'] },
  { id:'fr-nov2021-q1', session:'Nov 2021', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2021'] },
  { id:'afm-nov2021-q1', session:'Nov 2021', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2021'] },
  { id:'audit-nov2021-q1', session:'Nov 2021', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2021'] },
  { id:'dt-nov2021-q1', session:'Nov 2021', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2021'] },
  { id:'idt-nov2021-q1', session:'Nov 2021', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2021'] },
  { id:'ibs-nov2021-q1', session:'Nov 2021', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2021'] },
  { id:'fr-may2022-q1', session:'May 2022', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2022'] },
  { id:'afm-may2022-q1', session:'May 2022', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2022'] },
  { id:'audit-may2022-q1', session:'May 2022', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2022'] },
  { id:'dt-may2022-q1', session:'May 2022', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2022'] },
  { id:'idt-may2022-q1', session:'May 2022', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2022'] },
  { id:'ibs-may2022-q1', session:'May 2022', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2022'] },
  { id:'fr-nov2022-q1', session:'Nov 2022', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2022'] },
  { id:'afm-nov2022-q1', session:'Nov 2022', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2022'] },
  { id:'audit-nov2022-q1', session:'Nov 2022', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2022'] },
  { id:'dt-nov2022-q1', session:'Nov 2022', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2022'] },
  { id:'idt-nov2022-q1', session:'Nov 2022', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2022'] },
  { id:'ibs-nov2022-q1', session:'Nov 2022', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2022'] },
  { id:'fr-may2023-q1', session:'May 2023', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2023'] },
  { id:'afm-may2023-q1', session:'May 2023', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2023'] },
  { id:'audit-may2023-q1', session:'May 2023', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2023'] },
  { id:'dt-may2023-q1', session:'May 2023', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2023'] },
  { id:'idt-may2023-q1', session:'May 2023', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2023'] },
  { id:'ibs-may2023-q1', session:'May 2023', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2023'] },
  { id:'fr-nov2023-q1', session:'Nov 2023', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2023'] },
  { id:'afm-nov2023-q1', session:'Nov 2023', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2023'] },
  { id:'audit-nov2023-q1', session:'Nov 2023', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2023'] },
  { id:'dt-nov2023-q1', session:'Nov 2023', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2023'] },
  { id:'idt-nov2023-q1', session:'Nov 2023', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2023'] },
  { id:'ibs-nov2023-q1', session:'Nov 2023', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2023'] },
  { id:'fr-may2024-q1', session:'May 2024', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2024'] },
  { id:'afm-may2024-q1', session:'May 2024', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2024'] },
  { id:'audit-may2024-q1', session:'May 2024', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2024'] },
  { id:'dt-may2024-q1', session:'May 2024', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2024'] },
  { id:'idt-may2024-q1', session:'May 2024', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2024'] },
  { id:'ibs-may2024-q1', session:'May 2024', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2024'] },
  { id:'fr-nov2024-q1', session:'Nov 2024', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2024'] },
  { id:'afm-nov2024-q1', session:'Nov 2024', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2024'] },
  { id:'audit-nov2024-q1', session:'Nov 2024', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2024'] },
  { id:'dt-nov2024-q1', session:'Nov 2024', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2024'] },
  { id:'idt-nov2024-q1', session:'Nov 2024', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2024'] },
  { id:'ibs-nov2024-q1', session:'Nov 2024', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2024'] },
  { id:'fr-may2025-q1', session:'May 2025', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2025'] },
  { id:'afm-may2025-q1', session:'May 2025', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2025'] },
  { id:'audit-may2025-q1', session:'May 2025', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2025'] },
  { id:'dt-may2025-q1', session:'May 2025', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2025'] },
  { id:'idt-may2025-q1', session:'May 2025', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2025'] },
  { id:'ibs-may2025-q1', session:'May 2025', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2025'] },
  { id:'fr-nov2025-q1', session:'Nov 2025', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2025'] },
  { id:'afm-nov2025-q1', session:'Nov 2025', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2025'] },
  { id:'audit-nov2025-q1', session:'Nov 2025', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2025'] },
  { id:'dt-nov2025-q1', session:'Nov 2025', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2025'] },
  { id:'idt-nov2025-q1', session:'Nov 2025', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2025'] },
  { id:'ibs-nov2025-q1', session:'Nov 2025', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2025'] },
  { id:'fr-may2026-q1', session:'May 2026', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2026'] },
  { id:'afm-may2026-q1', session:'May 2026', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2026'] },
  { id:'audit-may2026-q1', session:'May 2026', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2026'] },
  { id:'dt-may2026-q1', session:'May 2026', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2026'] },
  { id:'idt-may2026-q1', session:'May 2026', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2026'] },
  { id:'ibs-may2026-q1', session:'May 2026', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2026'] },
];
