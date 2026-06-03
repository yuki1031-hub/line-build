import { getArticle, articles } from '@/lib/articles';
import ArticleBody from '@/components/ArticleBody';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return articles.map((a) => ({
    category: a.category,
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <article style={{ padding: '3rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        {/* パンくず */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)' }}>ホーム</Link>
          <span>›</span>
          <Link href={`/blog/${article.category}`} style={{ color: 'var(--text-muted)' }}>{article.categoryName}</Link>
          <span>›</span>
          <span>{article.title}</span>
        </div>

        {/* ヘッダー */}
        <header style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="tag">{article.categoryName}</span>
            <span style={{
              fontSize: '0.75rem',
              color: 'var(--line-green-dark)',
              background: 'var(--line-green-light)',
              padding: '0.15rem 0.6rem',
              borderRadius: '999px',
              fontWeight: 600,
            }}>こんな人に：{article.target}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, lineHeight: 1.4, marginBottom: '1rem' }}>
            {article.title}
          </h1>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}で読める</span>
          </div>
        </header>

        {/* 本文 */}
        <ArticleBody blocks={article.body} />

        {/* 記事下CTA */}
        <div style={{
          marginTop: '3rem',
          background: 'var(--text-primary)',
          borderRadius: '16px',
          padding: '2.5rem 2rem',
          textAlign: 'center',
        }}>
          <h2 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.8rem', lineHeight: 1.4 }}>
            LINE構築でお困りですか？
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.8rem', lineHeight: 1.8 }}>
            ツール選びから実装まで、実際に手を動かしてきた立場でご相談に乗ります。<br />
            相談だけのご連絡でも問題ありません。
          </p>
          <Link href="/contact" style={{
            display: 'inline-flex',
            background: 'var(--line-green)',
            color: 'white',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            padding: '0.85rem 2rem',
            borderRadius: '8px',
            fontSize: '0.95rem',
          }}>
            無料で相談する →
          </Link>
        </div>

        {/* カテゴリに戻る */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href={`/blog/${article.category}`} style={{ fontSize: '0.9rem', color: 'var(--line-green-dark)', fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
            ← {article.categoryName}の記事一覧へ
          </Link>
        </div>
      </div>
    </article>
  );
}
