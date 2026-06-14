const photos = [
  { label: 'Grilled Chicken',   tag: 'Signature Dish', big: true  },
  { label: 'Mexican Pizza',      tag: 'Most Ordered',   big: false },
  { label: 'Salmon Atlantis',    tag: "Chef's Pick",    big: false },
  { label: 'Moonlite Infusion',  tag: 'Cocktails',      big: false },
  { label: 'Salmon Salad',       tag: 'Fresh Daily',    big: false },
]

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: '80px 5%', background: 'var(--cream-dark)' }}>
      <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: 12 }}>
        Gallery
      </div>
      <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 8 }}>A feast for the eyes</h2>
      <p style={{ color: 'var(--warm-gray)', maxWidth: 540, marginBottom: 40 }}>
        The food, the vibe, and the views that keep our guests coming back.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {photos.map((p, i) => (
          <div key={i} style={{
            background: 'linear-gradient(135deg, var(--cream-dark), var(--cream))',
            border: '2px dashed var(--cream-dark)', borderRadius: 12,
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: 8, padding: 20, textAlign: 'center',
            minHeight:   p.big ? 340 : 160,
            gridColumn:  p.big ? 'span 2' : 'auto',
            gridRow:     p.big ? 'span 2' : 'auto',
          }}>
            <div style={{ fontSize: p.big ? '3.5rem' : '2rem', opacity: 0.75 }}>{p.emoji}</div>
            <div style={{ fontWeight: 600, color: 'var(--charcoal)', fontSize: p.big ? '1rem' : '0.85rem' }}>
              {p.label}
            </div>
            <div style={{
              background: 'var(--terracotta)', color: 'white',
              fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px',
              borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.06em',
            }}>
              {p.tag}
            </div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 16, fontSize: '0.8rem', color: 'var(--warm-gray)' }}>
        💡 Replace the emoji placeholders with real &lt;img&gt; tags once you have food photos.
      </p>
    </section>
  )
}