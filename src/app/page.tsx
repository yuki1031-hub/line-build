import Link from 'next/link';

const categories = [
  {
    slug: 'lstep',
    name: 'Lステップ',
    desc: '設定方法・シナリオ設計・実案件での活用例',
    icon: '⚙️',
    count: 0,
  },
  {
    slug: 'elme',
    name: 'エルメ',
    desc: 'リッチメニュー・タグ・ステップ配信の実装',
    icon: '📋',
    count: 0,
  },
  {
    slug: 'api',
    name: 'LINE API',
    desc: 'Node.js・GASでのMessaging API実装',
    icon: '🔧',
    count: 0,
  },
  {
    slug: 'freelance',
    name: 'フリーランス実録',
    desc: '案件受注・単価・実際の失敗談まで',
    icon: '📝',
    count: 0,
  },
];

const posts = [
  {
    slug: 'lstep-vs-elme',
    category: 'lstep',
    categoryName: 'Lステップ',
    title: 'LステップとエルメをLINE構築した側から徹底比較',
    excerpt: '実際に両方のツールで案件を構築した経験から、機能・価格・使いやすさを正直に比較します。',
    date: '2025年6月',
    readTime: '8分',
  },
  {
    slug: 'richmenu-design',
    category: 'elme',
    categoryName: 'エルメ',
    title: 'リッチメニュー設計で失敗しないための手順と注意点',
    excerpt: '発注者に確認すべき項目・よくある設計ミス・Slack通知非対応など実務でハマったポイントを解説。',
    date: '2025年6月',
    readTime: '6分',
  },
  {
    slug: 'liff-nodejs',
    category: 'api',
    categoryName: 'LINE API',
    title: 'LIFF × Node.js でデジタルギフトコードAPIを実装した話',
    excerpt: '一条工務店向けキャンペーンシステムの実装。さくらVPS・nginx・Let\'s Encrypt環境での構築記録。',
    date: '2025年5月',
    readTime: '12分',
  },
  {
    slug: 'freelance-first-order',
    category: 'freelance',
    categoryName: 'フリーランス実録',
    title: 'フリーランス独立してLINE構築案件を受注するまでにやったこと',
    excerpt: '収入ほぼゼロからLancers・CrowdWorksで初案件を受注するまでの実録。応募戦略・ポートフォリオの作り方。',
    date: '2025年5月',
    readTime: '10分',
  },
  {
    slug: 'lstep-price',
    category: 'freelance',
    categoryName: 'フリーランス実録',
    title: 'フリーランスLINE構築の単価・相場・交渉の実態',
    excerpt: '実際に受注した案件の単価を公開。初心者が陥りやすい値下げ交渉のワナと対策。',
    date: '2025年5月',
    readTime: '7分',
  },
];

export default function Home() {
  return (
    <>
      {/* ヒーロー */}
      <section style={{
        background: 'linear-gradient(135deg, var(--line-green-light) 0%, white 60%)',
        borderBottom: '1px solid var(--border)',
        padding: '5rem 0 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* 背景装飾 */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '300px',
          height: '300px',
          background: 'var(--line-green)',
          borderRadius: '50%',
          opacity: 0.05,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-40px',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'var(--line-green)',
          borderRadius: '50%',
          opacity: 0.04,
        }} />

        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <span className="tag">現役フリーランスエンジニア発信</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.03em',
              marginBottom: '1.2rem',
              color: 'var(--text-primary)',
            }}>
              LINE構築・Lステップの<br />
              <span style={{ color: 'var(--line-green-dark)' }}>実務情報</span>を届けるブログ
            </h1>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '2rem',
              maxWidth: '560px',
            }}>
              Lステップ・エルメ・LINE Messaging APIを使った実案件の経験をもとに、設計・実装・フリーランスとしての働き方を発信しています。
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/blog/lstep" className="btn-primary">記事を読む →</Link>
              <Link href="/contact" className="btn-outline">案件を依頼する</Link>
            </div>
          </div>
        </div>
      </section>

      {/* カテゴリ */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="divider" style={{ marginBottom: '1rem' }} />
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700 }}>カテゴリ</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
          }}>
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/blog/${cat.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '1.5rem', height: '100%' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{cat.icon}</div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                  }}>{cat.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 記事一覧 */}
      <section style={{ padding: '0 0 4rem' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="divider" style={{ marginBottom: '1rem' }} />
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700 }}>新着記事</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.category}/${post.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                      <span className="tag">{post.categoryName}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{post.date} · {post.readTime}で読める</span>
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.4,
                    }}>{post.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{post.excerpt}</p>
                  </div>
                  <div style={{
                    color: 'var(--line-green)',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                    marginTop: '0.2rem',
                  }}>→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'var(--text-primary)',
        padding: '4rem 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            color: 'white',
            fontSize: '1.8rem',
            fontWeight: 700,
            marginBottom: '1rem',
          }}>LINE構築の案件、受け付けています</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Lステップ・エルメ・LINE Messaging APIの実装をお任せください。
          </p>
          <Link href="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--line-green)',
            color: 'white',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            padding: '0.9rem 2rem',
            borderRadius: '8px',
            fontSize: '1rem',
            transition: 'background 0.2s',
          }}>
            無料でご相談する →
          </Link>
        </div>
      </section>
    </>
  );
}
