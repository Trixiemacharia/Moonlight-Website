export default function Services({ info }) {
  const chips = [
    ['🍽️', 'Dine-in'],
    ['🛍️', 'Takeaway'],
    ['🛵', 'No-contact delivery'],
    ['💸', info.price_range],
  ]
  return (
    <section style={{ padding: '60px 5%', background: 'var(--white)' }}>
      <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: 12 }}>
        We're Here For You
      </div>
      <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 8 }}>Dine your way</h2>
      <p style={{ color: 'var(--warm-gray)', lineHeight: 1.7, maxWidth: 540, marginBottom: 24 }}>
        Whether you're joining us at the table, picking up on the go, or ordering from home.
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {chips.map(([icon, label]) => (
          <div key={label} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'var(--cream)', border: '1px solid var(--cream-dark)',
            borderRadius: 8, padding: '10px 16px', fontSize: '0.85rem', fontWeight: 500,
            boxShadow: '0 4px 24px rgba(42,33,24,0.08)',
          }}>
            <span>{icon}</span>{label}
          </div>
        ))}
      </div>
    </section>
  )
}