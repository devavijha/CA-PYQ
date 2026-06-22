import re

sessions = [
  'May 2018', 'Nov 2018', 'May 2019', 'Nov 2019', 'Nov 2020', 'Jan 2021',
  'Jul 2021', 'Nov 2021', 'May 2022', 'Nov 2022', 'May 2023', 'Nov 2023',
  'May 2024', 'Nov 2024', 'May 2025', 'Nov 2025', 'May 2026'
]

subjects = ['fr', 'afm', 'audit', 'dt', 'idt', 'ibs']

questions = []
for session in sessions:
    for subj in subjects:
        # Just generate 1 dummy question per subject per session
        q_id = f"{subj}-{session.replace(' ', '').lower()}-q1"
        q = f"  {{ id:'{q_id}', session:'{session}', subjectId:'{subj}', questionNumber:'Q.1', qPage:2, aPage:3, aPageEnd:5, marks:10, chapter:'General Topic', topic:'Core Concept', difficulty:'Medium', timerMins:20, repeatCount:1, relatedSessions:['{session}'] }},"
        questions.append(q)

q_string = "\n".join(questions)

session_pdfs_entries = "\n".join([f"  '{s}': DEFAULT_SESSION," for s in sessions])

content = f"""// AUTO-GENERATED SESSIONS FILE
export type PaperKey = 'fr' | 'afm' | 'audit' | 'dt' | 'idt' | 'ibs';

const VALID_QUESTIONS_PDFS: Record<PaperKey, string> = {{
  fr: 'https://resource.cdn.icai.org/80128bos64233.pdf',
  afm: 'https://resource.cdn.icai.org/80144bos64256.pdf',
  audit: 'https://resource.cdn.icai.org/80192bos64339.pdf',
  dt: 'https://resource.cdn.icai.org/80261bos64418.pdf',
  idt: 'https://resource.cdn.icai.org/80531bos64714-p5.pdf',
  ibs: 'https://resource.cdn.icai.org/80532bos64714-p6.pdf',
}};

const VALID_ANSWERS_PDFS: Record<PaperKey, string> = {{
  fr: 'https://resource.cdn.icai.org/81680bos65858-p1.pdf',
  afm: 'https://resource.cdn.icai.org/81681bos65858-p2.pdf',
  audit: 'https://resource.cdn.icai.org/81682bos65858-p3.pdf',
  dt: 'https://resource.cdn.icai.org/81683bos65858-p4.pdf',
  idt: 'https://resource.cdn.icai.org/81684bos65858-p5.pdf',
  ibs: 'https://resource.cdn.icai.org/81685bos65858-p6.pdf',
}};

const DEFAULT_SESSION: Record<PaperKey, SessionPDFs> = {{
  fr: {{ qPdf: VALID_QUESTIONS_PDFS.fr, aPdf: VALID_ANSWERS_PDFS.fr }},
  afm: {{ qPdf: VALID_QUESTIONS_PDFS.afm, aPdf: VALID_ANSWERS_PDFS.afm }},
  audit: {{ qPdf: VALID_QUESTIONS_PDFS.audit, aPdf: VALID_ANSWERS_PDFS.audit }},
  dt: {{ qPdf: VALID_QUESTIONS_PDFS.dt, aPdf: VALID_ANSWERS_PDFS.dt }},
  idt: {{ qPdf: VALID_QUESTIONS_PDFS.idt, aPdf: VALID_ANSWERS_PDFS.idt }},
  ibs: {{ qPdf: VALID_QUESTIONS_PDFS.ibs, aPdf: VALID_ANSWERS_PDFS.ibs }},
}};

export interface SessionPDFs {{
  qPdf: string;
  aPdf: string;
}}

export const SESSION_PDFS: Record<string, Partial<Record<PaperKey, SessionPDFs>>> = {{
{session_pdfs_entries}
}};

export interface QMeta {{
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
}}

export const QUESTION_META: QMeta[] = [
{q_string}
];
"""

with open('lib/sessions.ts', 'w') as f:
    f.write(content)
