export default function HappyHourBanner() {
  return (
    <div style={{
      background: 'var(--gold)', color: 'var(--charcoal)',
      padding: '16px 5%', display: 'flex', alignItems: 'center',
      justifyContent: 'center', gap: 12, fontWeight: 600,
      fontSize: '0.9rem', flexWrap: 'wrap', textAlign: 'center',
    }}>
      <span style={{
        background: 'var(--charcoal)', color: 'var(--gold)',
        padding: '4px 10px', borderRadius: 4, fontSize: '0.75rem',
        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>
        🍹 Happy Hour
      </span>
      <span>
        Every day from <strong>3:00 PM – 6:00 PM</strong> — 20% off all cocktails and mocktails
      </span>
    </div>
  )
}