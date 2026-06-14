export default function Hero({ info, onReserve }) {
  return (
    <section id="home" style={{
      minHeight: '100vh', paddingTop: 64,
      background: 'linear-gradient(160deg, #2A1810 0%, #4A2C1A 50%, #6B3D24 100%)',
      display: 'flex', alignItems: 'center',
    }}>
      <div style={{ padding: '5% 10%', maxWidth: 700 }}>

        {/* Open badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(212,168,67,0.15)', border: '1px solid rgba(212,168,67,0.3)',
          color: 'var(--gold-light)', fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '6px 14px', borderRadius: 20, marginBottom: 24,
        }}>
          ● Open Now · Closes 12 AM
        </div>

        <h1 style={{
          fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: 'var(--cream)',
          lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 20,
        }}>
          Nairobi's{' '}
          <em style={{ color: 'var(--terracotta-light)', fontStyle: 'italic' }}>favourite</em>
          <br />rooftop café
        </h1>

        <p style={{
          color: 'rgba(250,246,239,0.7)', fontSize: '1.1rem',
          lineHeight: 1.7, marginBottom: 32, maxWidth: 480,
        }}>
          Flame-grilled favourites, handcrafted cocktails, and panoramic CBD
          views on Banda Street. Dine with us tonight.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <button onClick={onReserve} style={{
            background: 'var(--terracotta)', color: 'white', border: 'none',
            borderRadius: 6, padding: '14px 28px', fontSize: '0.95rem',
            fontWeight: 600, cursor: 'pointer',
          }}>
            Reserve a Table
          </button>
          <a href="#menu" style={{
            background: 'transparent', color: 'var(--cream)',
            border: '1.5px solid rgba(250,246,239,0.3)',
            borderRadius: 6, padding: '14px 28px',
            fontSize: '0.95rem', fontWeight: 500,
          }}>
            View Menu
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 40, marginTop: 48, paddingTop: 48,
          borderTop: '1px solid rgba(250,246,239,0.12)',
        }}>
          {[
            [`${info.rating}★`, 'Rating'],
            [`${info.review_count}+`, 'Reviews'],
            ['10+', 'Years serving'],
          ].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem', color: 'var(--cream)', fontWeight: 700 }}>
                {num}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(250,246,239,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}