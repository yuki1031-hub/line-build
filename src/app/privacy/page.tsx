import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
};

export default function PrivacyPage() {
  return (
    <div style={{ padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          プライバシーポリシー
        </h1>
        <div className="divider" style={{ marginBottom: '2.5rem' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
              個人情報の収集について
            </h2>
            <p>当サイト（line-build.org）では、お問い合わせフォームをご利用の際に、お名前・メールアドレス等の個人情報をご入力いただく場合があります。これらの情報は、お問い合わせへの回答のみに使用し、第三者へ提供することはありません。</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
              広告について
            </h2>
            <p>当サイトでは、第三者配信の広告サービス（Google AdSense）を利用しています。このような広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。Cookieを無効にする設定は、お使いのブラウザの設定から行うことができます。</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
              アクセス解析ツールについて
            </h2>
            <p>当サイトでは、Googleアナリティクスによるアクセス解析を行っています。Googleアナリティクスはデータ収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
              免責事項
            </h2>
            <p>当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性・安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
              お問い合わせ
            </h2>
            <p>プライバシーポリシーに関するお問い合わせは、<a href="/contact">お問い合わせページ</a>よりご連絡ください。</p>
          </section>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>制定日：2025年6月</p>
        </div>
      </div>
    </div>
  );
}
