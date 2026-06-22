import { QMeta, QUESTION_META, SESSION_PDFS, PaperKey } from './sessions';
export { QUESTION_META, SESSION_PDFS } from './sessions';
export type { QMeta, PaperKey, SessionPDFs } from './sessions';

export interface Paper {
  id: string;
  code: string;
  name: string;
  shortName: string;
  color: string;
  chapters: string[];
  examSessions: string[];
}

export type Question = QMeta;

export interface UserProgress {
  attempted?: boolean;
  correct?: boolean | null;
  bookmarked?: boolean;
  userNotes?: string;
  timeTaken?: number | null;
  attemptedAt?: string | null;
  updatedAt?: number;
}

export const EXAM_SESSIONS = [
  'Jan 2021',
  'Jul 2021', 'Nov 2021', 'May 2022', 'Nov 2022', 'May 2023', 'Nov 2023',
  'May 2024', 'Nov 2024', 'May 2025', 'Nov 2025', 'May 2026'
];

// ── Papers ────────────────────────────────────────────────
export const PAPERS_DATA: Record<string, Paper> = {
  fr: {
    id: 'fr', code: 'P1',
    name: 'Financial Reporting', shortName: 'FR',
    color: '#C8B8F8',
    chapters: [
      'Framework & Presentation',
      'Ind AS 1, 2, 7, 8, 10',
      'Revenue — Ind AS 115',
      'Leases — Ind AS 116',
      'Financial Instruments — Ind AS 32, 107, 109',
      'Business Combinations — Ind AS 103',
      'Consolidation — Ind AS 110, 111, 112, 28',
      'Share-based Payments — Ind AS 102',
      'Employee Benefits — Ind AS 19',
      'Taxation — Ind AS 12',
      'Impairment — Ind AS 36',
      'Agriculture, Government Grants',
      'Insurance — Ind AS 104',
      'Valuation of Shares & Intangibles',
    ],
    examSessions: EXAM_SESSIONS,
  },
  afm: {
    id: 'afm', code: 'P2',
    name: 'Advanced Financial Management', shortName: 'AFM',
    color: '#F5C842',
    chapters: [
      'Financial Policy & Corporate Strategy',
      'Risk Management',
      'Security Analysis & Valuation',
      'Securitization & Mutual Funds',
      'Derivatives — Futures & Forwards',
      'Derivatives — Options & Swaps',
      'Interest Rate Risk Management',
      'International Financial Management',
      'M&A and Corporate Restructuring',
      'Business Valuation',
      'Startup Finance & PE/VC',
      'Digital Finance & Fintech',
    ],
    examSessions: EXAM_SESSIONS,
  },
  audit: {
    id: 'audit', code: 'P3',
    name: 'Advanced Auditing & Ethics', shortName: 'AUDIT',
    color: '#7EDDB0',
    chapters: [
      'Standards on Auditing (SA 200–SA 720)',
      'Audit Planning & Risk Assessment',
      'Internal Controls & ERM',
      'Company Audit & CARO 2020',
      'Special Audits (Bank, Insurance, Govt)',
      'Reporting — Ind AS, NFRA, UDIN',
      'Consolidated FS Audit',
      'Due Diligence & Investigation',
      'Forensic Audit',
      'Code of Ethics & Independence',
      'IT Audit & CISA Concepts',
    ],
    examSessions: EXAM_SESSIONS,
  },
  dt: {
    id: 'dt', code: 'P4',
    name: 'Direct Tax Laws & Intl. Taxation', shortName: 'DT',
    color: '#F4876A',
    chapters: [
      'Basic Concepts & Residential Status',
      'Heads of Income — PGBP',
      'Capital Gains',
      'Income from Other Sources',
      'Clubbing, Set-off, Carry Forward',
      'Deductions u/s 80C–80U',
      'Assessment & Search Procedures',
      'Appeals, Revision, Settlement',
      'Penalties & Prosecution',
      'International Taxation — DTAA',
      'Transfer Pricing',
      'BEPS & MLI',
      'Non-residents, WHT, Equalisation Levy',
    ],
    examSessions: EXAM_SESSIONS,
  },
  idt: {
    id: 'idt', code: 'P5',
    name: 'Indirect Tax Laws', shortName: 'IDT',
    color: '#9BB8F5',
    chapters: [
      'GST — Constitutional Framework',
      'Levy & Supply',
      'Exemptions from GST',
      'Time & Place of Supply',
      'Valuation of Supply',
      'Input Tax Credit — §16 to §21',
      'ITC Restrictions — §17(5)',
      'Registration',
      'Returns, Payment & Reconciliation',
      'Refunds',
      'Assessment, Audit & Inspection',
      'Demand, Recovery & Appeals',
      'E-way Bill, TDS/TCS under GST',
      'Customs — Levy & Valuation',
      'Customs — Procedures & Exemptions',
      'Foreign Trade Policy (FTP)',
    ],
    examSessions: EXAM_SESSIONS,
  },
  ibs: {
    id: 'ibs', code: 'P6',
    name: 'Integrated Business Solutions', shortName: 'IBS',
    color: '#F5A623',
    chapters: [
      'Multidisciplinary Case Studies',
      'Strategic Cost Management',
      'Enterprise Risk Management',
      'Startup & PE/VC Ecosystem',
      'Digital Transformation',
      'Integrated Reporting Framework',
    ],
    examSessions: EXAM_SESSIONS,
  },
};

export const ALL_QUESTIONS = QUESTION_META;

// ── Frequency Map ─────────────────────────────────────────
export function buildFrequencyMap(questions: Question[]) {
  const map: Record<string, { count: number; sessions: string[] }> = {};
  questions.forEach(q => {
    const key = q.topic.toLowerCase().trim();
    if (!map[key]) map[key] = { count: 0, sessions: [] };
    map[key].count++;
    if (!map[key].sessions.includes(q.session)) map[key].sessions.push(q.session);
  });
  return map;
}

export const FREQ_MAP = buildFrequencyMap(ALL_QUESTIONS);

export function getHotTopics(subjectId: string, questions: Question[], freqMap: ReturnType<typeof buildFrequencyMap>) {
  const subjectQs = questions.filter(q => q.subjectId === subjectId);
  const unique = [...new Set(subjectQs.map(q => q.topic))];
  return unique
    .map(t => ({ topic: t, count: freqMap[t.toLowerCase().trim()]?.count || 1 }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

