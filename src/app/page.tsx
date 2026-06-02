import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

const categories = [
  {
    slug: 'lstep',
    name: 'Lステップ',
    benefit: 'Lステップを自分で設定できるようになる',
    icon: '⚙️',
  },
  {
    slug: 'elme',
    name: 'エルメ',
    benefit: 'リッチメニュー・自動配信が作れるようになる',
    icon: '📋',
  },
  {
    slug: 'api',
    name: 'LINE API',
    benefit: 'LINEと外部システムを連携できるようになる',
    icon: '🔧',
  },
  {
    slug: 'freelance',
    name: 'フリーランス実録',
    benefit: 'LINE構築を仕事にする道筋がわかる',
    icon: '📝',
  },
];

const posts = [
  {
    slug: 'lstep-vs-elme',
    category: 'lstep',
    categoryName: 'Lステップ',
    target: 'ツール選びで迷っている方',
    title: 'LステップとエルメをLINE構築した側から徹底比較',
    excerpt: '実際に両方のツールで案件を構築した経験から、機能・価格・使いやすさを正直に比較します。',
    date: '2025年6月',
    readTime: '8分',
  },
  {
    slug: 'richmenu-design',
    category: 'elme',
    categoryName: 'エルメ',
    target: 'リッチメニューを作りたい方',
    title: 'リッチメニュー設計で失敗しないための手順と注意点',
    excerpt: '発注者に確認すべき項目・よくある設計ミス・実務でハマったポイントを解説。',
    date: '2025年6月',
    readTime: '6分',
  },
  {
    slug: 'liff-nodejs',
    category: 'api',
    categoryName: 'LINE API',
    target: 'システム連携を検討中の方',
    title: 'LIFF × Node.js でデジタルギフトコードAPIを実装した話',
    excerpt: 'キャンペーンシステムの実装記録。さくらVPS・nginx・Let\'s Encrypt環境での構築の流れ。',
    date: '2025年5月',
    readTime: '12分',
  },
  {
    slug: 'freelance-first-order',
    category: 'freelance',
    categoryName: 'フリーランス実録',
    target: 'LINE構築を仕事にしたい方',
    title: 'フリーランス独立してLINE構築案件を受注するまでにやったこと',
    excerpt: '収入ほぼゼロから初案件を受注するまでの実録。応募戦略・ポートフォリオの作り方。',
    date: '2025年5月',
    readTime: '10分',
  },
];

const skills = ['Lステップ', 'エルメ', 'LINE Messaging API', 'Node.js', 'GAS', 'React / Next.js'];

const cases = [
  { industry: 'ゴルフ用品買取', desc: 'リッチメニュー・タグ・ステップ配信の全構築' },
  { industry: '住宅メーカー', desc: 'LIFF×外部API連携のキャンペーンシステム' },
  { industry: '占い事業', desc: '複数ペルソナのシナリオ設計・自動応答構築' },
];

export default function Home() {
  return (
    <>
      {/* ①ファーストビュー：3秒で自分ごと化 */}
      <section style={{
        background: 'linear-gradient(135deg, var(--line-green-light) 0%, white 60%)',
        borderBottom: '1px solid var(--border)',
        padding: '5rem 0 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', background: 'var(--line-green)', borderRadius: '50%', opacity: 0.05 }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '10%', width: '200px', height: '200px', background: 'var(--line-green)', borderRadius: '50%', opacity: 0.04 }} />

        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
              LINE構築・Lステップ実装の専門ブログ
            </span>
            <h1 style={{
              fontSize: 'clamp(1.9rem, 4.5vw, 2.8rem)',
              fontWeight: 700,
              lineHeight: 1.35,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}>
              LINE構築、<span style={{ color: 'var(--line-green-dark)' }}>何から始めれば</span><br />
              いいか迷っていませんか？
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '2rem', maxWidth: '600px' }}>
              「Lステップとエルメどっちを使う？」「自分で設定できる？」「外注すべき？」
              ——実際に手を動かしてきたエンジニアが、実案件の経験をもとに具体的に解説します。
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/blog/lstep" className="btn-primary">まず記事を読む →</Link>
              <Link href="/contact" className="btn-outline">構築を相談する</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ②信頼構築：権威性・専門性 */}
      <FadeIn>
        <section style={{ padding: '3.5rem 0', background: 'white', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem' }}>
                  なぜこのブログが役立つのか
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  ネット上のLINE構築情報の多くは、営業目的で書かれた表面的なものです。
                  このブログは、実際に複数の業種で構築・納品してきた経験から、
                  成功も失敗も含めた「実務のリアル」を発信しています。
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {skills.map((s) => (
                    <span key={s} style={{
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.8rem',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-heading)',
                    }}>{s}</span>
                  ))}
                </div>
              </div>

              <div style={{ background: 'var(--bg-secondary)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--border)' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.85rem', color: 'var(--line-green-dark)', marginBottom: '1rem' }}>
                  これまでの構築実績
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {cases.map((c) => (
                    <div key={c.industry} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--line-green)', fontWeight: 700, flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                      <div>
                        <p style={{ fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.1rem' }}>{c.industry}</p>
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ③価値提示：読むとどうなるか */}
      <FadeIn>
        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ marginBottom: '0.8rem' }}>
              <div className="divider" style={{ marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>このブログで学べること</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>カテゴリごとに、読むことで得られる力を整理しました。</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
              {categories.map((cat) => (
                <Link key={cat.slug} href={`/blog/${cat.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: '1.5rem', height: '100%' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{cat.icon}</div>
                    <h3 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.6rem' }}>{cat.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, display: 'flex', gap: '0.4rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--line-green)', flexShrink: 0 }}>→</span>
                      {cat.benefit}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ④記事一覧：悩み別で誘導 */}
      <FadeIn>
        <section style={{ padding: '0 0 4rem' }}>
          <div className="container">
            <div style={{ marginBottom: '2rem' }}>
              <div className="divider" style={{ marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>新着記事</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.category}/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: '1.5rem 2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                        <span className="tag">{post.categoryName}</span>
                        <span style={{
                          fontSize: '0.75rem',
                          color: 'var(--line-green-dark)',
                          background: 'var(--line-green-light)',
                          padding: '0.15rem 0.6rem',
                          borderRadius: '999px',
                          fontWeight: 600,
                        }}>こんな人に：{post.target}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{post.readTime}で読める</span>
                      </div>
                      <h3 style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>{post.title}</h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{post.excerpt}</p>
                    </div>
                    <div style={{ color: 'var(--line-green)', fontSize: '1.2rem', flexShrink: 0, marginTop: '0.2rem' }}>→</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ⑤CTA：敷居を下げて背中を押す */}
      <FadeIn>
        <section style={{ background: 'var(--text-primary)', padding: '4rem 0' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
            <h2 style={{ color: 'white', fontSize: '1.7rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.4 }}>
              自分でやるか、任せるか<br />迷っているだけでも大丈夫です
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.8 }}>
              「何が必要かわからない」段階のご相談も歓迎です。
              現状をお聞きして、自分で進める方法も含めて率直にお答えします。
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
            }}>
              まず無料で相談する →
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '1rem', fontSize: '0.8rem' }}>
              ※相談だけのご連絡でも問題ありません
            </p>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
