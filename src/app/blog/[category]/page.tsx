import { getArticlesByCategory, categoryNames, categoryDescriptions } from '@/lib/articles';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const validCategories = ['lstep', 'elme', 'api', 'freelance'];

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const name = categoryNames[category];
  if (!name) return {};
  return {
    title: `${name}の記事一覧`,
    description: categoryDescriptions[category],
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  if (!validCategories.includes(category)) {
    notFound();
  }

  const name = categoryNames[category];
  const description = categoryDescriptions[category];
  const posts = getArticlesByCategory(category);

  return (
    <div style={{ padding: '3rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* パンくず */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: 'var(--text-muted)' }}>ホーム</Link>
          <span>›</span>
          <span>{name}</span>
        </div>

        {/* ヘッダー */}
        <header style={{ marginBottom: '2.5rem' }}>
          <div className="divider" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.8rem' }}>{name}</h1>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>{description}</p>
        </header>

        {/* 記事一覧 */}
        {posts.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.category}/${post.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '1.5rem 2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
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
                    <h2 style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>{post.title}</h2>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{post.excerpt}</p>
                  </div>
                  <div style={{ color: 'var(--line-green)', fontSize: '1.2rem', flexShrink: 0, marginTop: '0.2rem' }}>→</div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '3rem 2rem',
            textAlign: 'center',
          }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              このカテゴリの記事は準備中です。
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              近日公開予定です。少々お待ちください。
            </p>
          </div>
        )}

        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <Link href="/" style={{ fontSize: '0.9rem', color: 'var(--line-green-dark)', fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
            ← ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
