import re

content = open('lib/sessions.ts', 'r').read()

sessions = [
  'May 2018', 'Nov 2018', 'May 2019', 'Nov 2019', 'Nov 2020', 'Jan 2021',
  'Jul 2021', 'Nov 2021', 'May 2022', 'Nov 2022', 'May 2023', 'Nov 2023',
  'May 2024', 'Nov 2024', 'May 2025', 'Nov 2025', 'May 2026'
]

replacement = "export const SESSION_PDFS: Record<string, Partial<Record<PaperKey, SessionPDFs>>> = {\n"
for s in sessions:
    replacement += f"  '{s}': DEFAULT_SESSION,\n"
replacement += "};"

new_content = re.sub(
    r'export const SESSION_PDFS: Record<string, Partial<Record<PaperKey, SessionPDFs>>> = \{.*?\};',
    replacement,
    content,
    flags=re.DOTALL
)

open('lib/sessions.ts', 'w').write(new_content)
