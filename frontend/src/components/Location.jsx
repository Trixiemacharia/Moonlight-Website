export default function Location({ info }) {
  const days  = Object.entries(info.hours || {})
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()

  return (
    <section id="location" style={{ padding: '80px 5%', background: 'var(--cream-dark)' }}>
      <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: 12 }}>
        Find Us
      </div>
      <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 8 }}>Come visit us</h2>
      <p style={{ color: 'var(--warm-gray)', maxWidth: 540, marginBottom: 48 }}>
        Right in the heart of Nairobi CBD on Banda Street. Easy to find, hard to leave.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>

        {/* Hours + contact */}
        <div>
          <h3 style={{ fontFamily: "'Playfair Display',serif", marginBottom: 24, fontSize: '1.3rem' }}>
            Hours & Contact
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 28 }}>
            <tbody>
              {days.map(([day, hours]) => (
                <tr key={day} style={{ color: day === today ? 'var(--terracotta)' : 'inherit' }}>
                  <td style={{ padding: '10px 0', fontSize: '0.875rem', textTransform: 'capitalize', borderBottom: '1px solid var(--cream-dark)' }}>
                    {day === today ? `${day} (Today)` : day}
                  </td>
                  <td style={{ padding: '10px 0', fontSize: '0.875rem', textAlign: 'right', fontWeight: 600, borderBottom: '1px solid var(--cream-dark)' }}>
                    {hours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {[
            ['📍', 'Banda St, Nairobi',  'PR8C+JR Nairobi'],
            ['📞', '0702 099927',         'Call or WhatsApp'],
            ['🌐', 'goldenstar.co.ke',    'Full menu online'],
            ['🛵', 'Order on Bolt',       'No-contact delivery'],
          ].map(([icon, text, sub]) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, background: 'var(--terracotta)', borderRadius: 6,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '0.9rem', flexShrink: 0,
              }}>
                {icon}
              </div>
              <div>
                <div style={{ fontWeight: 500, fontSize: '0.875rem' }}>{text}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--warm-gray)' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div style={{
          borderRadius: 12, height: 380, background: 'var(--cream)',
          border: '2px solid var(--cream-dark)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 12, textAlign: 'center',
        }}>
          <div style={{ fontSize: '3rem' }}>📍</div>
          <div style={{ fontWeight: 600, fontSize: '1rem' }}>Moonlight Café</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--warm-gray)' }}>Banda St, Nairobi CBD</div>
          <a href="https://maps.google.com/?q=Moonlight+Cafe+Banda+Street+Nairobi"
            target="_blank" rel="noopener noreferrer"
            style={{
              marginTop: 12, padding: '10px 20px',
              background: 'var(--terracotta)', color: 'white',
              borderRadius: 8, fontWeight: 600, fontSize: '0.875rem',
            }}>
            Open in Google Maps →
          </a>
        </div>
      </div>
    </section>
  )
}