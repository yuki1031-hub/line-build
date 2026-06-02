import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '運営者について',
};

export default function AboutPage() {
  const skills = [
    'Lステップ（プロプラン）',
    'エルメ',
    'LINE Messaging API',
    'Node.js / Express',
    'GAS（Google Apps Script）',
    'React / Next.js',
    'Supabase',
    'OpenAI API',
    'Python（基礎）',
  ];

  return (
    <div style={{ padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          運営者について
        </h1>
        <div className="divider" style={{ marginBottom: '2.5rem' }} />

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {/* アバター */}
          <div style={{
            width: '100px',
            height: '100px',
            background: 'var(--line-green-light)',
            border: '3px solid var(--line-green)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: '2.5rem',
          }}>
            👨‍💻
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.3rem' }}>
              hishi
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>
              フリーランスエンジニア / 関東在住
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <a href="https://twitter.com/hshkwx" target="_blank" rel="noopener noreferrer" className="tag">
                X @hshkwx
              </a>
              <a href="https://my-portfolio-2026-sigma.vercel.app" target="_blank" rel="noopener noreferrer" className="tag">
                ポートフォリオ
              </a>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
              このブログについて
            </h2>
            <p>
              LINE構築・Lステップ・エルメ・LINE Messaging APIの実務情報を発信するブログです。
              実際に手を動かした案件の経験をもとに、設計・実装・フリーランスとしての働き方まで一次情報でお届けします。
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
              経歴
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { period: '〜2024年', desc: 'アサヒ飲料にて製造業・品質管理を約7年間担当' },
                { period: '2024年', desc: 'IT系ベンチャーにてLINEチャットボット実装エンジニアとして従事（約4ヶ月）' },
                { period: '2025年〜', desc: 'フリーランスエンジニアとして独立。Lステップ・エルメ・LINE API実装を専門に複数案件を受注' },
              ].map(({ period, desc }) => (
                <div key={period} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{
                    background: 'var(--line-green-light)',
                    color: 'var(--line-green-dark)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    flexShrink: 0,
                    marginTop: '0.2rem',
                  }}>{period}</span>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
              技術スタック
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skills.map((skill) => (
                <span key={skill} style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.83rem',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-heading)',
                }}>{skill}</span>
              ))}
            </div>
          </section>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link href="/contact" className="btn-primary">案件のご依頼はこちら →</Link>
        </div>
      </div>
    </div>
  );
}
