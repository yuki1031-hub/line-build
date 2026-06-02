'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      background: 'rgba(255,255,255,0.95)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(8px)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* ロゴ */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'var(--line-green)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2C5.13 2 2 4.91 2 8.5c0 2.28 1.3 4.27 3.25 5.47L4.5 16l2.8-1.2C7.9 14.93 8.44 15 9 15c3.87 0 7-2.91 7-6.5S12.87 2 9 2z" fill="white"/>
            </svg>
          </div>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '1.1rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}>
            line-build
          </span>
        </Link>

        {/* ナビゲーション（PC） */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="pc-nav">
          {[
            { href: '/blog/lstep', label: 'Lステップ' },
            { href: '/blog/elme', label: 'エルメ' },
            { href: '/blog/api', label: 'LINE API' },
            { href: '/blog/freelance', label: '実録' },
            { href: '/about', label: '運営者' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 500,
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--line-green-dark)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >{label}</Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}>
            案件を依頼する
          </Link>
        </nav>

        {/* ハンバーガー（SP） */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'none' }}
          className="sp-menu-btn"
          aria-label="メニュー"
        >
          <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ display: 'block', height: '2px', background: 'var(--text-primary)', borderRadius: '2px', transition: '0.2s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ display: 'block', height: '2px', background: 'var(--text-primary)', borderRadius: '2px', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', height: '2px', background: 'var(--text-primary)', borderRadius: '2px', transition: '0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </div>
        </button>
      </div>

      {/* SPメニュー */}
      {menuOpen && (
        <div style={{
          background: 'white',
          borderTop: '1px solid var(--border)',
          padding: '1rem 1.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {[
            { href: '/blog/lstep', label: 'Lステップ' },
            { href: '/blog/elme', label: 'エルメ' },
            { href: '/blog/api', label: 'LINE API' },
            { href: '/blog/freelance', label: '実録' },
            { href: '/about', label: '運営者' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              fontSize: '1rem',
            }} onClick={() => setMenuOpen(false)}>{label}</Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ textAlign: 'center', marginTop: '0.5rem' }} onClick={() => setMenuOpen(false)}>
            案件を依頼する
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .pc-nav { display: none !important; }
          .sp-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
