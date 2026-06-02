import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ・案件のご依頼',
};

export default function ContactPage() {
  return (
    <div style={{ padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '680px' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          お問い合わせ・案件のご依頼
        </h1>
        <div className="divider" style={{ marginBottom: '1.5rem' }} />
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
          LINE構築・Lステップ・エルメ・LINE Messaging APIの実装に関するご依頼・ご質問はこちらからお気軽にどうぞ。
        </p>

        {/* 対応内容 */}
        <div style={{
          background: 'var(--line-green-light)',
          border: '1px solid var(--line-green-mid)',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2.5rem',
        }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--line-green-dark)' }}>
            対応できること
          </h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              'Lステップの初期設定・シナリオ構築',
              'エルメのリッチメニュー・ステップ配信設定',
              'LINE Messaging API実装（Node.js / GAS）',
              'LIFF・外部APIとの連携システム構築',
              '既存LINE公式アカウントの改善・追加機能実装',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--line-green)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* フォーム */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            { id: 'name', label: 'お名前', type: 'text', placeholder: '山田 太郎', required: true },
            { id: 'email', label: 'メールアドレス', type: 'email', placeholder: 'example@email.com', required: true },
            { id: 'company', label: '会社名・屋号（任意）', type: 'text', placeholder: '株式会社〇〇', required: false },
          ].map(({ id, label, type, placeholder, required }) => (
            <div key={id}>
              <label htmlFor={id} style={{
                display: 'block',
                fontFamily: 'var(--font-heading)',
                fontWeight: 500,
                fontSize: '0.9rem',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)',
              }}>
                {label}{required && <span style={{ color: 'var(--line-green-dark)', marginLeft: '0.3rem' }}>*</span>}
              </label>
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '1.5px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-body)',
                  background: 'white',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--line-green)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" style={{
              display: 'block',
              fontFamily: 'var(--font-heading)',
              fontWeight: 500,
              fontSize: '0.9rem',
              marginBottom: '0.5rem',
              color: 'var(--text-primary)',
            }}>
              お問い合わせ内容 <span style={{ color: 'var(--line-green-dark)' }}>*</span>
            </label>
            <textarea
              id="message"
              required
              rows={6}
              placeholder="ご依頼の内容・現在の状況・ご予算・希望納期などをご記入ください"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1.5px solid var(--border)',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontFamily: 'var(--font-body)',
                background: 'white',
                color: 'var(--text-primary)',
                outline: 'none',
                resize: 'vertical',
                lineHeight: 1.7,
                transition: 'border-color 0.2s',
              }}
              onFocus={e => (e.target.style.borderColor = 'var(--line-green)')}
              onBlur={e => (e.target.style.borderColor = 'var(--border)')}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '0.85rem 2rem' }}>
            送信する →
          </button>
        </form>
      </div>
    </div>
  );
}
