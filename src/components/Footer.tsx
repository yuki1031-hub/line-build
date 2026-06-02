'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--text-primary)',
      color: 'rgba(255,255,255,0.7)',
      marginTop: '5rem',
      padding: '3rem 0 2rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
        }}>
          {/* ブランド */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{
                width: '28px',
                height: '28px',
                background: 'var(--line-green)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2C5.13 2 2 4.91 2 8.5c0 2.28 1.3 4.27 3.25 5.47L4.5 16l2.8-1.2C7.9 14.93 8.44 15 9 15c3.87 0 7-2.91 7-6.5S12.87 2 9 2z" fill="white"/>
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'white', fontSize: '1rem' }}>line-build</span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7 }}>
              LINE構築・Lステップ実装の実務情報を、現役フリーランスエンジニアが発信するブログ。
            </p>
          </div>

          {/* カテゴリ */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', color: 'white', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>カテゴリ</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: '/blog/lstep', label: 'Lステップ' },
                { href: '/blog/elme', label: 'エルメ' },
                { href: '/blog/api', label: 'LINE API' },
                { href: '/blog/freelance', label: 'フリーランス実録' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--line-green)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >{label}</Link>
              ))}
            </div>
          </div>

          {/* サイト情報 */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', color: 'white', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>サイト情報</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: '/about', label: '運営者について' },
                { href: '/contact', label: '案件のご依頼' },
                { href: '/privacy', label: 'プライバシーポリシー' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--line-green)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >{label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
        }}>
          <p>© 2025 line-build. All rights reserved.</p>
          <p>運営：hishi（フリーランスエンジニア）</p>
        </div>
      </div>
    </footer>
  );
}
