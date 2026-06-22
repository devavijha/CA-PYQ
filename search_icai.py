import urllib.request
import json
import re

url = "https://html.duckduckgo.com/html/?q=site:resource.cdn.icai.org+%22Suggested+Answers%22+%22May+2024%22+%22Final%22"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    links = set(re.findall(r'https://resource\.cdn\.icai\.org/[a-zA-Z0-9_-]+\.pdf', html))
    print("Found PDFs:", links)
except Exception as e:
    print("Error:", e)
