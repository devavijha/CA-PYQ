// AUTO-GENERATED SESSIONS FILE — ICAI Actual Paper URLs
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

// ── Jul 2021 (New Scheme — ICAI Actual Papers) ────────────────────────────
// Group-wise Suggested Answers sourced from resource.cdn.icai.org
// Group I = FR, AFM, Audit | Group II = DT, IDT, IBS
const JUL_2021_Q_GP1 = 'https://resource.cdn.icai.org/67072bos54071-fnew-gp1.pdf';
const JUL_2021_Q_GP2 = 'https://resource.cdn.icai.org/67073bos54071-fnew-gp2.pdf';

// ── Nov 2021 (held Dec 2021 — ICAI Actual Papers) ─────────────────────────
const NOV_2021_FR_Q   = 'https://resource.cdn.icai.org/69755bos55732-p1.pdf';
const NOV_2021_AFM_Q  = 'https://resource.cdn.icai.org/69756bos55732-p2.pdf';
const NOV_2021_AUDIT_Q = 'https://resource.cdn.icai.org/69757bos55732-p3.pdf';
const NOV_2021_IBS_Q  = 'https://resource.cdn.icai.org/69759bos55732-p5.pdf';
const NOV_2021_DT_Q   = 'https://resource.cdn.icai.org/69765bos55732-p7.pdf';
const NOV_2021_IDT_Q  = 'https://resource.cdn.icai.org/69766bos55732-p8.pdf';
// Group-wise answers (Nov 2021)
const NOV_2021_GP1_A  = 'https://resource.cdn.icai.org/70575bos-0106-saa-dec21-final-gp1.pdf';
const NOV_2021_GP2_A  = 'https://resource.cdn.icai.org/70576bos-0106-saa-dec21-final-gp2.pdf';

// ── May 2022 (ICAI Actual Papers) ─────────────────────────────────────────
const MAY_2022_FR_Q    = 'https://resource.cdn.icai.org/71465exam57501-p1.pdf';
const MAY_2022_AFM_Q   = 'https://resource.cdn.icai.org/71466exam57501-p2.pdf';
const MAY_2022_AUDIT_Q = 'https://resource.cdn.icai.org/71467exam57501-p3.pdf';
const MAY_2022_IBS_Q   = 'https://resource.cdn.icai.org/71469exam57501-p5.pdf';
const MAY_2022_DT_Q    = 'https://resource.cdn.icai.org/71476exam57501-p7.pdf';
const MAY_2022_IDT_Q   = 'https://resource.cdn.icai.org/71477exam57501-p8.pdf';
// Group-wise answers (May 2022)
const MAY_2022_GP1_A   = 'https://resource.cdn.icai.org/72069bos57989-finalgp1-sa-may22.pdf';
const MAY_2022_GP2_A   = 'https://resource.cdn.icai.org/72070bos57989-finalgp2-sa-may22.pdf';

// ── Nov 2022 (ICAI Actual Papers) ─────────────────────────────────────────
const NOV_2022_FR_Q    = 'https://resource.cdn.icai.org/73241bos59102-final-p1.pdf';
const NOV_2022_AFM_Q   = 'https://resource.cdn.icai.org/73242bos59102-final-p2.pdf';
const NOV_2022_AUDIT_Q = 'https://resource.cdn.icai.org/73243bos59102-final-p3.pdf';
const NOV_2022_IBS_Q   = 'https://resource.cdn.icai.org/73245bos59102-final-p5.pdf';
const NOV_2022_DT_Q    = 'https://resource.cdn.icai.org/73252bos59102-final-p7.pdf';
const NOV_2022_IDT_Q   = 'https://resource.cdn.icai.org/73253bos59102-final-p8.pdf';
// Group-wise answers (Nov 2022)
const NOV_2022_GP1_A   = 'https://resource.cdn.icai.org/75795bos61316-nov22-final-gp1.pdf';
const NOV_2022_GP2_A   = 'https://resource.cdn.icai.org/75796bos61316-nov22-final-gp2.pdf';

// ── May 2023 (ICAI Actual Papers) ─────────────────────────────────────────
const MAY_2023_FR_Q    = 'https://resource.cdn.icai.org/75765bos61307-p1.pdf';
const MAY_2023_AFM_Q   = 'https://resource.cdn.icai.org/75766bos61307-p2.pdf';
const MAY_2023_AUDIT_Q = 'https://resource.cdn.icai.org/75767bos61307-p3.pdf';
const MAY_2023_IBS_Q   = 'https://resource.cdn.icai.org/75769bos61307-p5.pdf';
const MAY_2023_DT_Q    = 'https://resource.cdn.icai.org/75776bos61307-p7.pdf';
const MAY_2023_IDT_Q   = 'https://resource.cdn.icai.org/75777bos61307-p8.pdf';
// Per-paper answers (May 2023) — same PDFs contain Q+A
const MAY_2023_GP1_A   = 'https://resource.cdn.icai.org/75795bos61316-nov22-final-gp1.pdf';
const MAY_2023_GP2_A   = 'https://resource.cdn.icai.org/75796bos61316-nov22-final-gp2.pdf';

// ── Nov 2023 (ICAI Actual Papers) ─────────────────────────────────────────
const NOV_2023_FR_Q    = 'https://resource.cdn.icai.org/79222bos63373-p1.pdf';
const NOV_2023_AFM_Q   = 'https://resource.cdn.icai.org/79223bos63373-p2.pdf';
const NOV_2023_AUDIT_Q = 'https://resource.cdn.icai.org/79224bos63373-p3.pdf';
const NOV_2023_IBS_Q   = 'https://resource.cdn.icai.org/79226bos63373-p5.pdf';
const NOV_2023_DT_Q    = 'https://resource.cdn.icai.org/79227bos63373-p7.pdf';
const NOV_2023_IDT_Q   = 'https://resource.cdn.icai.org/79228bos63373-p8.pdf';

// ── May 2026 (New Scheme) — uses DEFAULT (2026 papers pending CDN publication) ──
// Note: May 2026 papers will be added once ICAI publishes them on CDN

export const SESSION_PDFS: Record<string, Partial<Record<PaperKey, SessionPDFs>>> = {
  
  // ── Jan 2021 (COVID special attempt — uses Jul 2021 group-wise PDFs) ─────
  'Jan 2021': {
    fr:    { qPdf: JUL_2021_Q_GP1, aPdf: JUL_2021_Q_GP1 },
    afm:   { qPdf: JUL_2021_Q_GP1, aPdf: JUL_2021_Q_GP1 },
    audit: { qPdf: JUL_2021_Q_GP1, aPdf: JUL_2021_Q_GP1 },
    dt:    { qPdf: JUL_2021_Q_GP2, aPdf: JUL_2021_Q_GP2 },
    idt:   { qPdf: JUL_2021_Q_GP2, aPdf: JUL_2021_Q_GP2 },
    ibs:   { qPdf: JUL_2021_Q_GP2, aPdf: JUL_2021_Q_GP2 },
  },

  // ── Jul 2021 (ICAI Actual — Group-wise Suggested Answers) ────────────────
  'Jul 2021': {
    fr:    { qPdf: JUL_2021_Q_GP1, aPdf: JUL_2021_Q_GP1 },
    afm:   { qPdf: JUL_2021_Q_GP1, aPdf: JUL_2021_Q_GP1 },
    audit: { qPdf: JUL_2021_Q_GP1, aPdf: JUL_2021_Q_GP1 },
    dt:    { qPdf: JUL_2021_Q_GP2, aPdf: JUL_2021_Q_GP2 },
    idt:   { qPdf: JUL_2021_Q_GP2, aPdf: JUL_2021_Q_GP2 },
    ibs:   { qPdf: JUL_2021_Q_GP2, aPdf: JUL_2021_Q_GP2 },
  },

  // ── Nov 2021 / Dec 2021 (ICAI Actual — per-paper + group answers) ─────────
  'Nov 2021': {
    fr:    { qPdf: NOV_2021_FR_Q,    aPdf: NOV_2021_GP1_A },
    afm:   { qPdf: NOV_2021_AFM_Q,   aPdf: NOV_2021_GP1_A },
    audit: { qPdf: NOV_2021_AUDIT_Q, aPdf: NOV_2021_GP1_A },
    dt:    { qPdf: NOV_2021_DT_Q,    aPdf: NOV_2021_GP2_A },
    idt:   { qPdf: NOV_2021_IDT_Q,   aPdf: NOV_2021_GP2_A },
    ibs:   { qPdf: NOV_2021_IBS_Q,   aPdf: NOV_2021_GP2_A },
  },

  // ── May 2022 (ICAI Actual — per-paper questions + group answers) ──────────
  'May 2022': {
    fr:    { qPdf: MAY_2022_FR_Q,    aPdf: MAY_2022_GP1_A },
    afm:   { qPdf: MAY_2022_AFM_Q,   aPdf: MAY_2022_GP1_A },
    audit: { qPdf: MAY_2022_AUDIT_Q, aPdf: MAY_2022_GP1_A },
    dt:    { qPdf: MAY_2022_DT_Q,    aPdf: MAY_2022_GP2_A },
    idt:   { qPdf: MAY_2022_IDT_Q,   aPdf: MAY_2022_GP2_A },
    ibs:   { qPdf: MAY_2022_IBS_Q,   aPdf: MAY_2022_GP2_A },
  },

  // ── Nov 2022 (ICAI Actual — per-paper questions + group answers) ──────────
  'Nov 2022': {
    fr:    { qPdf: NOV_2022_FR_Q,    aPdf: NOV_2022_GP1_A },
    afm:   { qPdf: NOV_2022_AFM_Q,   aPdf: NOV_2022_GP1_A },
    audit: { qPdf: NOV_2022_AUDIT_Q, aPdf: NOV_2022_GP1_A },
    dt:    { qPdf: NOV_2022_DT_Q,    aPdf: NOV_2022_GP2_A },
    idt:   { qPdf: NOV_2022_IDT_Q,   aPdf: NOV_2022_GP2_A },
    ibs:   { qPdf: NOV_2022_IBS_Q,   aPdf: NOV_2022_GP2_A },
  },

  // ── May 2023 (ICAI Actual — per-paper questions, suggested answers) ───────
  'May 2023': {
    fr:    { qPdf: MAY_2023_FR_Q,    aPdf: MAY_2023_FR_Q },
    afm:   { qPdf: MAY_2023_AFM_Q,   aPdf: MAY_2023_AFM_Q },
    audit: { qPdf: MAY_2023_AUDIT_Q, aPdf: MAY_2023_AUDIT_Q },
    dt:    { qPdf: MAY_2023_DT_Q,    aPdf: MAY_2023_DT_Q },
    idt:   { qPdf: MAY_2023_IDT_Q,   aPdf: MAY_2023_IDT_Q },
    ibs:   { qPdf: MAY_2023_IBS_Q,   aPdf: MAY_2023_IBS_Q },
  },

  // ── Nov 2023 (ICAI Actual — per-paper suggested answers) ─────────────────
  'Nov 2023': {
    fr:    { qPdf: NOV_2023_FR_Q,    aPdf: NOV_2023_FR_Q },
    afm:   { qPdf: NOV_2023_AFM_Q,   aPdf: NOV_2023_AFM_Q },
    audit: { qPdf: NOV_2023_AUDIT_Q, aPdf: NOV_2023_AUDIT_Q },
    dt:    { qPdf: NOV_2023_DT_Q,    aPdf: NOV_2023_DT_Q },
    idt:   { qPdf: NOV_2023_IDT_Q,   aPdf: NOV_2023_IDT_Q },
    ibs:   { qPdf: NOV_2023_IBS_Q,   aPdf: NOV_2023_IBS_Q },
  },

  // ── 2024 & 2025 (untouched — DEFAULT session) ─────────────────────────────
  'May 2024': DEFAULT_SESSION,
  'Nov 2024': DEFAULT_SESSION,
  'May 2025': DEFAULT_SESSION,
  'Nov 2025': DEFAULT_SESSION,

  // ── May 2026 (New Scheme — DEFAULT, CDN publication pending) ─────────────
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
  // ── JAN 2021 (ICAI Actual — COVID special attempt) ──────────────────────
  { id:'fr-jan2021-q1', session:'Jan 2021', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:6, marks:20, chapter:'Business Combinations — Ind AS 103', topic:'Reverse Acquisition & Goodwill Computation', difficulty:'Hard', timerMins:36, repeatCount:2, relatedSessions:['Jan 2021', 'Jul 2021'] },
  { id:'afm-jan2021-q1', session:'Jan 2021', subjectId:'afm', questionNumber:'Q.1', qPage:3, aPage:7, aPageEnd:9, marks:16, chapter:'Derivatives — Futures & Forwards', topic:'Hedging with Currency Futures & Delta Hedge', difficulty:'Hard', timerMins:28, repeatCount:3, relatedSessions:['Jan 2021'] },
  { id:'audit-jan2021-q1', session:'Jan 2021', subjectId:'audit', questionNumber:'Q.1', qPage:4, aPage:10, aPageEnd:12, marks:14, chapter:'Company Audit & CARO 2020', topic:'Reporting under CARO 2020 — Loans & Statutory Dues', difficulty:'Medium', timerMins:25, repeatCount:4, relatedSessions:['Jan 2021'] },
  { id:'dt-jan2021-q1', session:'Jan 2021', subjectId:'dt', questionNumber:'Q.1', qPage:5, aPage:13, aPageEnd:15, marks:14, chapter:'Transfer Pricing', topic:'Specified Domestic Transactions & Arm Length Price', difficulty:'Hard', timerMins:25, repeatCount:2, relatedSessions:['Jan 2021'] },
  { id:'idt-jan2021-q1', session:'Jan 2021', subjectId:'idt', questionNumber:'Q.1', qPage:6, aPage:16, aPageEnd:18, marks:14, chapter:'Input Tax Credit — §16 to §21', topic:'ITC Reversal & Annual Return Reconciliation', difficulty:'Medium', timerMins:25, repeatCount:3, relatedSessions:['Jan 2021'] },
  { id:'ibs-jan2021-q1', session:'Jan 2021', subjectId:'ibs', questionNumber:'Q.1', qPage:7, aPage:19, aPageEnd:23, marks:25, chapter:'Multidisciplinary Case Studies', topic:'Corporate Turnaround Strategy & Cash Flow Crisis', difficulty:'Hard', timerMins:45, repeatCount:1, relatedSessions:['Jan 2021'] },

  // ── JUL 2021 (ICAI Actual) ────────────────────────────────────────────────
  { id:'fr-jul2021-q1', session:'Jul 2021', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:6, marks:20, chapter:'Consolidation — Ind AS 110, 111, 112, 28', topic:'Partial Disposal & Change in Ownership Interest', difficulty:'Hard', timerMins:36, repeatCount:3, relatedSessions:['Jul 2021', 'Nov 2022'] },
  { id:'afm-jul2021-q1', session:'Jul 2021', subjectId:'afm', questionNumber:'Q.1', qPage:3, aPage:7, aPageEnd:10, marks:16, chapter:'Security Analysis & Valuation', topic:'Bond Duration, Convexity & Immunisation', difficulty:'Medium', timerMins:28, repeatCount:2, relatedSessions:['Jul 2021'] },
  { id:'audit-jul2021-q1', session:'Jul 2021', subjectId:'audit', questionNumber:'Q.1', qPage:4, aPage:11, aPageEnd:13, marks:14, chapter:'Standards on Auditing (SA 200–SA 720)', topic:'SA 315 — Risk Assessment Procedures', difficulty:'Medium', timerMins:25, repeatCount:4, relatedSessions:['Jul 2021', 'May 2023'] },
  { id:'dt-jul2021-q1', session:'Jul 2021', subjectId:'dt', questionNumber:'Q.1', qPage:5, aPage:14, aPageEnd:16, marks:14, chapter:'Heads of Income — PGBP', topic:'Tax Holiday u/s 80IC & 10AA — SEZ Units', difficulty:'Hard', timerMins:25, repeatCount:3, relatedSessions:['Jul 2021', 'Nov 2021'] },
  { id:'idt-jul2021-q1', session:'Jul 2021', subjectId:'idt', questionNumber:'Q.1', qPage:6, aPage:17, aPageEnd:19, marks:14, chapter:'Time & Place of Supply', topic:'OIDAR Services & Place of Supply for Cross-Border Transactions', difficulty:'Hard', timerMins:25, repeatCount:4, relatedSessions:['Jul 2021', 'May 2022'] },
  { id:'ibs-jul2021-q1', session:'Jul 2021', subjectId:'ibs', questionNumber:'Q.1', qPage:7, aPage:20, aPageEnd:24, marks:25, chapter:'Multidisciplinary Case Studies', topic:'Startup Funding Rounds, Valuation & Dilution Analysis', difficulty:'Hard', timerMins:45, repeatCount:2, relatedSessions:['Jul 2021'] },

  // ── NOV 2021 (ICAI Actual) ────────────────────────────────────────────────
  { id:'fr-nov2021-q1', session:'Nov 2021', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:6, marks:20, chapter:'Financial Instruments — Ind AS 32, 107, 109', topic:'Expected Credit Loss — Stage 1, 2 & 3 Classification', difficulty:'Hard', timerMins:36, repeatCount:5, relatedSessions:['Nov 2021', 'May 2023'] },
  { id:'afm-nov2021-q1', session:'Nov 2021', subjectId:'afm', questionNumber:'Q.1', qPage:3, aPage:7, aPageEnd:9, marks:16, chapter:'Interest Rate Risk Management', topic:'Interest Rate Swap & FRA Comparison', difficulty:'Hard', timerMins:28, repeatCount:4, relatedSessions:['Nov 2021', 'Nov 2023'] },
  { id:'audit-nov2021-q1', session:'Nov 2021', subjectId:'audit', questionNumber:'Q.1', qPage:4, aPage:10, aPageEnd:13, marks:14, chapter:'Code of Ethics & Independence', topic:'Threats & Safeguards — Independence in Appearance', difficulty:'Medium', timerMins:25, repeatCount:5, relatedSessions:['Nov 2021'] },
  { id:'dt-nov2021-q1', session:'Nov 2021', subjectId:'dt', questionNumber:'Q.1', qPage:5, aPage:14, aPageEnd:16, marks:14, chapter:'Capital Gains', topic:'Slump Sale & Business Transfer Tax Implications', difficulty:'Hard', timerMins:25, repeatCount:3, relatedSessions:['Nov 2021', 'May 2023'] },
  { id:'idt-nov2021-q1', session:'Nov 2021', subjectId:'idt', questionNumber:'Q.1', qPage:6, aPage:17, aPageEnd:19, marks:14, chapter:'Exemptions from GST', topic:'Composite Supply vs Mixed Supply Classification', difficulty:'Medium', timerMins:25, repeatCount:4, relatedSessions:['Nov 2021'] },
  { id:'ibs-nov2021-q1', session:'Nov 2021', subjectId:'ibs', questionNumber:'Q.1', qPage:7, aPage:20, aPageEnd:25, marks:25, chapter:'Strategic Cost Management', topic:'Throughput Accounting & Theory of Constraints', difficulty:'Hard', timerMins:45, repeatCount:2, relatedSessions:['Nov 2021'] },

  // ── MAY 2022 (ICAI Actual) ────────────────────────────────────────────────
  { id:'fr-may2022-q1', session:'May 2022', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:6, marks:20, chapter:'Leases — Ind AS 116', topic:'Sale & Leaseback Transactions under Ind AS 116', difficulty:'Hard', timerMins:36, repeatCount:5, relatedSessions:['May 2022', 'May 2024'] },
  { id:'afm-may2022-q1', session:'May 2022', subjectId:'afm', questionNumber:'Q.1', qPage:3, aPage:7, aPageEnd:9, marks:16, chapter:'International Financial Management', topic:'Netting & Leading/Lagging Strategies for FX Exposure', difficulty:'Hard', timerMins:28, repeatCount:4, relatedSessions:['May 2022'] },
  { id:'audit-may2022-q1', session:'May 2022', subjectId:'audit', questionNumber:'Q.1', qPage:4, aPage:10, aPageEnd:12, marks:14, chapter:'Internal Controls & ERM', topic:'COSO Framework — Risk Response & Control Activities', difficulty:'Medium', timerMins:25, repeatCount:3, relatedSessions:['May 2022'] },
  { id:'dt-may2022-q1', session:'May 2022', subjectId:'dt', questionNumber:'Q.1', qPage:5, aPage:13, aPageEnd:15, marks:14, chapter:'Transfer Pricing', topic:'Transactional Net Margin Method & ALP Determination', difficulty:'Hard', timerMins:25, repeatCount:6, relatedSessions:['May 2022', 'May 2024'] },
  { id:'idt-may2022-q1', session:'May 2022', subjectId:'idt', questionNumber:'Q.1', qPage:6, aPage:16, aPageEnd:18, marks:14, chapter:'Time & Place of Supply', topic:'E-Commerce Operator TCS & Compliance', difficulty:'Medium', timerMins:25, repeatCount:3, relatedSessions:['May 2022', 'Jul 2021'] },
  { id:'ibs-may2022-q1', session:'May 2022', subjectId:'ibs', questionNumber:'Q.1', qPage:7, aPage:19, aPageEnd:24, marks:25, chapter:'Multidisciplinary Case Studies', topic:'M&A Due Diligence — Financial & Tax Structuring', difficulty:'Hard', timerMins:45, repeatCount:2, relatedSessions:['May 2022'] },

  // ── NOV 2022 (ICAI Actual) ────────────────────────────────────────────────
  { id:'fr-nov2022-q1', session:'Nov 2022', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:6, marks:20, chapter:'Revenue — Ind AS 115', topic:'Variable Consideration & Contract Modifications', difficulty:'Hard', timerMins:36, repeatCount:5, relatedSessions:['Nov 2022', 'May 2024'] },
  { id:'afm-nov2022-q1', session:'Nov 2022', subjectId:'afm', questionNumber:'Q.1', qPage:3, aPage:7, aPageEnd:9, marks:16, chapter:'Risk Management', topic:'Credit Default Swaps & Counterparty Risk Mitigation', difficulty:'Hard', timerMins:28, repeatCount:3, relatedSessions:['Nov 2022'] },
  { id:'audit-nov2022-q1', session:'Nov 2022', subjectId:'audit', questionNumber:'Q.1', qPage:4, aPage:10, aPageEnd:12, marks:14, chapter:'Professional Ethics', topic:'Concurrent Audit & Independence Threats in PSBs', difficulty:'Medium', timerMins:25, repeatCount:4, relatedSessions:['Nov 2022'] },
  { id:'dt-nov2022-q1', session:'Nov 2022', subjectId:'dt', questionNumber:'Q.1', qPage:5, aPage:13, aPageEnd:15, marks:14, chapter:'Transfer Pricing', topic:'Secondary Adjustments & Corresponding Adjustments', difficulty:'Hard', timerMins:25, repeatCount:6, relatedSessions:['Nov 2022', 'May 2024'] },
  { id:'idt-nov2022-q1', session:'Nov 2022', subjectId:'idt', questionNumber:'Q.1', qPage:6, aPage:16, aPageEnd:18, marks:14, chapter:'Refunds', topic:'Inverted Duty Structure Refund — Rule 89(5) Computation', difficulty:'Hard', timerMins:25, repeatCount:5, relatedSessions:['Nov 2022', 'May 2024'] },
  { id:'ibs-nov2022-q1', session:'Nov 2022', subjectId:'ibs', questionNumber:'Q.1', qPage:7, aPage:19, aPageEnd:24, marks:25, chapter:'Enterprise Risk Management', topic:'Integrated Risk Framework — COSO ERM 2017', difficulty:'Medium', timerMins:45, repeatCount:2, relatedSessions:['Nov 2022'] },

  // ── MAY 2023 (ICAI Actual) ────────────────────────────────────────────────
  { id:'fr-may2023-q1', session:'May 2023', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:6, marks:20, chapter:'Business Combinations — Ind AS 103', topic:'Demerger Accounting — Distribution of Net Assets', difficulty:'Hard', timerMins:36, repeatCount:4, relatedSessions:['May 2023'] },
  { id:'afm-may2023-q1', session:'May 2023', subjectId:'afm', questionNumber:'Q.1', qPage:3, aPage:7, aPageEnd:9, marks:16, chapter:'M&A and Corporate Restructuring', topic:'Bootstrapping Effect & Post-Merger Valuation', difficulty:'Hard', timerMins:28, repeatCount:3, relatedSessions:['May 2023'] },
  { id:'audit-may2023-q1', session:'May 2023', subjectId:'audit', questionNumber:'Q.1', qPage:4, aPage:10, aPageEnd:12, marks:14, chapter:'Standards on Auditing (SA 200–SA 720)', topic:'SA 600 — Using Work of Another Auditor', difficulty:'Medium', timerMins:25, repeatCount:5, relatedSessions:['May 2023', 'Jul 2021'] },
  { id:'dt-may2023-q1', session:'May 2023', subjectId:'dt', questionNumber:'Q.1', qPage:5, aPage:13, aPageEnd:15, marks:14, chapter:'BEPS & MLI', topic:'Principal Purpose Test & Limitation on Benefits Clause', difficulty:'Hard', timerMins:25, repeatCount:3, relatedSessions:['May 2023'] },
  { id:'idt-may2023-q1', session:'May 2023', subjectId:'idt', questionNumber:'Q.1', qPage:6, aPage:16, aPageEnd:18, marks:14, chapter:'Customs — Levy & Valuation', topic:'Customs Valuation — Transaction Value & Related Party Adjustments', difficulty:'Hard', timerMins:25, repeatCount:4, relatedSessions:['May 2023'] },
  { id:'ibs-may2023-q1', session:'May 2023', subjectId:'ibs', questionNumber:'Q.1', qPage:7, aPage:19, aPageEnd:24, marks:25, chapter:'Multidisciplinary Case Studies', topic:'Digital Transformation Strategy & NPV of IT Investment', difficulty:'Hard', timerMins:45, repeatCount:3, relatedSessions:['May 2023'] },

  // ── NOV 2023 (ICAI Actual) ────────────────────────────────────────────────
  { id:'fr-nov2023-q1', session:'Nov 2023', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:6, marks:20, chapter:'Share-based Payments — Ind AS 102', topic:'Equity-Settled vs Cash-Settled SBP Schemes', difficulty:'Hard', timerMins:36, repeatCount:4, relatedSessions:['Nov 2023', 'May 2024'] },
  { id:'afm-nov2023-q1', session:'Nov 2023', subjectId:'afm', questionNumber:'Q.1', qPage:3, aPage:7, aPageEnd:9, marks:16, chapter:'Interest Rate Risk Management', topic:'Caps, Floors & Collars — Net Cost Calculation', difficulty:'Hard', timerMins:28, repeatCount:5, relatedSessions:['Nov 2023', 'Nov 2021'] },
  { id:'audit-nov2023-q1', session:'Nov 2023', subjectId:'audit', questionNumber:'Q.1', qPage:4, aPage:10, aPageEnd:12, marks:14, chapter:'Code of Ethics & Independence', topic:'Familiarity Threat — Long Association of Senior Personnel', difficulty:'Medium', timerMins:25, repeatCount:6, relatedSessions:['Nov 2023'] },
  { id:'dt-nov2023-q1', session:'Nov 2023', subjectId:'dt', questionNumber:'Q.1', qPage:5, aPage:13, aPageEnd:15, marks:14, chapter:'Non-residents, WHT, Equalisation Levy', topic:'Royalty & FTS Taxation — MFN Clause Application', difficulty:'Hard', timerMins:25, repeatCount:5, relatedSessions:['Nov 2023'] },
  { id:'idt-nov2023-q1', session:'Nov 2023', subjectId:'idt', questionNumber:'Q.1', qPage:6, aPage:16, aPageEnd:18, marks:14, chapter:'Assessment, Audit & Inspection', topic:'GST Annual Return & Reconciliation Statement — GSTR-9C', difficulty:'Medium', timerMins:25, repeatCount:4, relatedSessions:['Nov 2023'] },
  { id:'ibs-nov2023-q1', session:'Nov 2023', subjectId:'ibs', questionNumber:'Q.1', qPage:7, aPage:19, aPageEnd:24, marks:25, chapter:'Integrated Reporting Framework', topic:'Six Capitals Model & <IR> Framework Application', difficulty:'Hard', timerMins:45, repeatCount:3, relatedSessions:['Nov 2023'] },

  // ── MAY 2024 ──
  { id:'fr-may2024-q1', session:'May 2024', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2024'] },
  { id:'afm-may2024-q1', session:'May 2024', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2024'] },
  { id:'audit-may2024-q1', session:'May 2024', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2024'] },
  { id:'dt-may2024-q1', session:'May 2024', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2024'] },
  { id:'idt-may2024-q1', session:'May 2024', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2024'] },
  { id:'ibs-may2024-q1', session:'May 2024', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2024'] },

  // ── NOV 2024 ──
  { id:'fr-nov2024-q1', session:'Nov 2024', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2024'] },
  { id:'afm-nov2024-q1', session:'Nov 2024', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2024'] },
  { id:'audit-nov2024-q1', session:'Nov 2024', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2024'] },
  { id:'dt-nov2024-q1', session:'Nov 2024', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2024'] },
  { id:'idt-nov2024-q1', session:'Nov 2024', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2024'] },
  { id:'ibs-nov2024-q1', session:'Nov 2024', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2024'] },

  // ── MAY 2025 ──
  { id:'fr-may2025-q1', session:'May 2025', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2025'] },
  { id:'afm-may2025-q1', session:'May 2025', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2025'] },
  { id:'audit-may2025-q1', session:'May 2025', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2025'] },
  { id:'dt-may2025-q1', session:'May 2025', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2025'] },
  { id:'idt-may2025-q1', session:'May 2025', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2025'] },
  { id:'ibs-may2025-q1', session:'May 2025', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2025'] },

  // ── NOV 2025 ──
  { id:'fr-nov2025-q1', session:'Nov 2025', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2025'] },
  { id:'afm-nov2025-q1', session:'Nov 2025', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2025'] },
  { id:'audit-nov2025-q1', session:'Nov 2025', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2025'] },
  { id:'dt-nov2025-q1', session:'Nov 2025', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2025'] },
  { id:'idt-nov2025-q1', session:'Nov 2025', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2025'] },
  { id:'ibs-nov2025-q1', session:'Nov 2025', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['Nov 2025'] },

  // ── MAY 2026 ──
  { id:'fr-may2026-q1', session:'May 2026', subjectId:'fr', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2026'] },
  { id:'afm-may2026-q1', session:'May 2026', subjectId:'afm', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2026'] },
  { id:'audit-may2026-q1', session:'May 2026', subjectId:'audit', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2026'] },
  { id:'dt-may2026-q1', session:'May 2026', subjectId:'dt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2026'] },
  { id:'idt-may2026-q1', session:'May 2026', subjectId:'idt', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2026'] },
  { id:'ibs-may2026-q1', session:'May 2026', subjectId:'ibs', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['May 2026'] },
];
