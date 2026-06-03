import { Block } from '@/lib/articles';

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'lead':
            return (
              <p key={i} style={{
                fontSize: '1.05rem',
                lineHeight: 2,
                color: 'var(--text-secondary)',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--border)',
              }}>{block.text}</p>
            );

          case 'toc':
            return (
              <nav key={i} style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.5rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginBottom: '1rem',
                  color: 'var(--text-primary)',
                }}>目次</p>
                <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', counterReset: 'toc' }}>
                  {block.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', gap: '0.7rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--line-green-dark)', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>{j + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </nav>
            );

          case 'h2':
            return (
              <h2 key={i} id={block.id} style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                marginTop: '2rem',
                paddingLeft: '1rem',
                borderLeft: '4px solid var(--line-green)',
                lineHeight: 1.4,
                scrollMarginTop: '80px',
              }}>{block.text}</h2>
            );

          case 'h3':
            return (
              <h3 key={i} style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                marginTop: '1rem',
                color: 'var(--text-primary)',
              }}>{block.text}</h3>
            );

          case 'p':
            return (
              <p key={i} style={{ fontSize: '1rem', lineHeight: 2, color: 'var(--text-primary)' }}>{block.text}</p>
            );

          case 'list':
            return (
              <ul key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: '0.5rem' }}>
                {block.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--line-green)', flexShrink: 0 }}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
            );

          case 'point':
            return (
              <div key={i} style={{
                background: 'var(--line-green-light)',
                border: '1px solid var(--line-green-mid)',
                borderRadius: '12px',
                padding: '1.3rem 1.5rem',
              }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.85rem', color: 'var(--line-green-dark)', marginBottom: '0.8rem' }}>ポイント</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {block.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--line-green)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );

          case 'table':
            return (
              <div key={i} style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr>
                      {block.headers.map((h, j) => (
                        <th key={j} style={{
                          background: 'var(--line-green)',
                          color: 'white',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 600,
                          padding: '0.7rem 1rem',
                          textAlign: 'left',
                          fontSize: '0.85rem',
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} style={{ background: j % 2 === 0 ? 'white' : 'var(--bg-secondary)' }}>
                        {row.map((cell, k) => (
                          <td key={k} style={{
                            padding: '0.7rem 1rem',
                            border: '1px solid var(--border)',
                            color: 'var(--text-primary)',
                          }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case 'callout':
            return (
              <div key={i} style={{
                background: 'var(--bg-secondary)',
                borderLeft: '4px solid var(--line-green)',
                borderRadius: '0 8px 8px 0',
                padding: '1.2rem 1.5rem',
              }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{block.title}</p>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>{block.text}</p>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
