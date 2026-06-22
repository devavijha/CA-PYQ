import urllib.request
import re
from urllib.parse import quote

def search(query):
    url = f"https://html.duckduckgo.com/html/?q={quote(query)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        links = re.findall(r'href="([^"]+resource\.cdn\.icai\.org/[^"]+\.pdf)"', html)
        if not links:
            # Fallback regex for duckduckgo redirect links
            links = re.findall(r'uddg=(https%3A%2F%2Fresource\.cdn\.icai\.org%2F[^&]+)', html)
            links = [urllib.parse.unquote(l) for l in links]
        return list(set(links))
    except Exception as e:
        return [str(e)]

print("May 2018 Questions:")
print(search('site:resource.cdn.icai.org "May 2018" "Final" "Question Paper"'))
print("May 2018 Answers:")
print(search('site:resource.cdn.icai.org "May 2018" "Suggested Answers" "Final"'))
