'use client';
import { useState } from 'react';

interface ICAIAnswerViewerProps {
  answerPdfUrl: string;
  answerPage: number;
  answerPageEnd: number;
  questionLabel: string;
}

export function ICAIAnswerViewer({
  answerPdfUrl,
  answerPage,
  answerPageEnd,
  questionLabel,
}: ICAIAnswerViewerProps) {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(answerPage);

  // Build the URL with #page fragment so the browser PDF viewer jumps directly
  const iframeSrc = `${answerPdfUrl}#page=${currentPage}&toolbar=1&navpanes=0&scrollbar=1`;

  const btnStyle: React.CSSProperties = {
    background: 'var(--bg)',
    border: '1px solid var(--border-dark)',
    borderRadius: 6,
    padding: '5px 12px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: 11,
    cursor: 'pointer',
    color: 'var(--ink)',
    transition: 'background 0.18s ease',
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        id="icai-viewer-toggle"
        onClick={() => {
          setCurrentPage(answerPage); // reset to answer page on every open
          setOpen(o => !o);
        }}
        style={{
          width: '100%',
          background: open ? 'var(--ink)' : 'var(--surface)',
          color: open ? '#F2F0EB' : 'var(--ink)',
          border: '1px solid var(--border-dark)',
          borderRadius: 10,
          padding: '12px 20px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: 14,
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.18s ease',
        }}
      >
        <span>📄 View ICAI Suggested Answer</span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, opacity: 0.6 }}>
          {open ? '▲ Hide Answer' : `▼ Jump to page ${answerPage}`}
        </span>
      </button>

      {/* PDF Viewer Panel */}
      {open && (
        <div
          className="slide-down"
          style={{
            marginTop: 12,
            border: '1px solid var(--border-dark)',
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          {/* Toolbar */}
          <div
            style={{
              background: 'var(--surface)',
              borderBottom: '1px solid var(--border)',
              padding: '10px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 12,
                color: 'var(--ink-muted)',
              }}
            >
              ICAI Suggested Answer · {questionLabel}
            </span>

            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Page jump buttons covering the answer range */}
              {Array.from(
                { length: Math.min(answerPageEnd - answerPage + 1, 6) },
                (_, i) => answerPage + i
              ).map(pg => (
                <button
                  key={pg}
                  style={{
                    ...btnStyle,
                    background: currentPage === pg ? 'var(--ink)' : 'var(--bg)',
                    color: currentPage === pg ? '#F2F0EB' : 'var(--ink)',
                    borderColor: currentPage === pg ? 'var(--ink)' : 'var(--border-dark)',
                    minWidth: 36,
                    textAlign: 'center',
                  }}
                  onClick={() => setCurrentPage(pg)}
                >
                  p{pg}
                </button>
              ))}

              <div style={{ width: 1, height: 20, background: 'var(--border)' }} />

              <button
                style={btnStyle}
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              >
                ← Prev
              </button>

              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 700,
                  fontSize: 12,
                  color: 'var(--ink)',
                  minWidth: 64,
                  textAlign: 'center',
                }}
              >
                Page {currentPage}
              </span>

              <button
                style={btnStyle}
                onClick={() => setCurrentPage(p => p + 1)}
              >
                Next →
              </button>

              <a
                href={`${answerPdfUrl}#page=${answerPage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...btnStyle,
                  background: 'var(--ink)',
                  color: '#F2F0EB',
                  textDecoration: 'none',
                  marginLeft: 4,
                }}
              >
                ↗ Full PDF
              </a>
            </div>
          </div>

          {/* iframe — bypasses CORS, uses browser's native PDF viewer, #page= jumps directly */}
          <iframe
            key={iframeSrc}           /* re-mounts when page changes so #page= takes effect */
            src={iframeSrc}
            title={`ICAI Suggested Answer — ${questionLabel}`}
            style={{
              width: '100%',
              height: 580,
              border: 'none',
              display: 'block',
              background: '#525659',
            }}
            loading="lazy"
          />

          {/* Footer */}
          <div
            style={{
              background: 'var(--surface)',
              borderTop: '1px solid var(--border)',
              padding: '8px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                color: 'var(--ink-dim)',
              }}
            >
              Source: ICAI Board of Studies · Official Suggested Answer · © Institute of Chartered Accountants of India
            </span>
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: 700,
                fontSize: 10,
                color: 'var(--ink-dim)',
              }}
            >
              Answer: pp. {answerPage}–{answerPageEnd}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
