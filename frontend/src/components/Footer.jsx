export default function Footer({ onReserve }) {
  return (
    <footer style={{
      background: 'var(--charcoal)', color: 'rgba(250,246,239,0.6)',
      padding: '48px 5% 32px', textAlign: 'center',
    }}>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', color: 'var(--cream)', marginBottom: 8 }}>
        Moonlite Café
      </div>
      <div style={{ fontSize: '0.85rem', marginBottom: 24 }}>
        Where Every Bite Tells a Story · Banda St, Nairobi
      </div>

      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
        {[
          ['#menu',     'Menu'],
          ['#gallery',  'Gallery'],
          ['#reviews',  'Reviews'],
          ['#location', 'Find Us'],
          ['tel:0702099927',        '0702 099927'],
          ['http://goldenstar.co.ke','goldenstar.co.ke'],
        ].map(([href, label]) => (
          <a key={label} href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{ color: 'rgba(250,246,239,0.5)', fontSize: '0.83rem' }}>
            {label}
          </a>
        ))}
      </div>

      <button onClick={onReserve} style={{
        background: 'var(--terracotta)', color: 'white', border: 'none',
        borderRadius: 8, padding: '12px 28px', fontWeight: 600,
        cursor: 'pointer', fontSize: '0.9rem', fontFamily: 'Inter, sans-serif',
        marginBottom: 28,
      }}>
        Reserve a Table
      </button>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(250,246,239,0.1)', marginBottom: 24 }} />
      <div style={{ fontSize: '0.78rem', opacity: 0.4 }}>
        © {new Date().getFullYear()} Moonlite Café · All rights reserved · Banda Street, Nairobi
      </div>
    </footer>
  )
}