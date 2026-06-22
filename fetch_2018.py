import urllib.request
import re
from urllib.parse import quote, unquote

def find_pdf(query):
    url = f"https://html.duckduckgo.com/html/?q={quote(query)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        links = re.findall(r'uddg=(https%3A%2F%2F[^&]+\.pdf)', html)
        if links:
            return unquote(links[0])
    except:
        pass
    return None

fr_q = find_pdf('CA Final "Financial Reporting" "May 2018" Question Paper filetype:pdf')
fr_a = find_pdf('CA Final "Financial Reporting" "May 2018" Suggested Answers filetype:pdf')
print("FR Question PDF:", fr_q)
print("FR Answer PDF:", fr_a)
