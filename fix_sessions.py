import re

content = open('lib/sessions.ts', 'r').read()

sessions = [
  'Jan 2021',
  'Jul 2021', 'Nov 2021', 'May 2022', 'Nov 2022', 'May 2023', 'Nov 2023',
  'May 2024', 'Nov 2024', 'May 2025', 'Nov 2025', 'May 2026'
]
subjects = ['fr', 'afm', 'audit', 'dt', 'idt', 'ibs']

replacement = "export const SESSION_PDFS: Record<string, Partial<Record<PaperKey, SessionPDFs>>> = {\n"
for s in sessions:
    if "2024" in s or "2025" in s or "2026" in s:
        replacement += f"  '{s}': DEFAULT_SESSION,\n"
    else:
        prefix = s.replace(" ", "").lower()
        obj_str = "  '" + s + "': {\n"
        for sub in subjects:
            obj_str += f"    {sub}: {{ qPdf: 'https://resource.cdn.icai.org/mock-{prefix}-{sub}-q.pdf', aPdf: 'https://resource.cdn.icai.org/mock-{prefix}-{sub}-a.pdf' }},\n"
        obj_str += "  },\n"
        replacement += obj_str
replacement += "};"

new_content = re.sub(
    r'export const SESSION_PDFS: Record<string, Partial<Record<PaperKey, SessionPDFs>>> = \{.*?\};',
    replacement,
    content,
    flags=re.DOTALL
)

open('lib/sessions.ts', 'w').write(new_content)
