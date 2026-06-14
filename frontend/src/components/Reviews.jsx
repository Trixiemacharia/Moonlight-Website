const FALLBACK = [
  { id: 1, author: 'dtads',       rating: 5, text: 'Nice food and nice service with a nice atmosphere. The lamb Mandi was nice and good portion size.',                                                       date: '3 months ago',  avatar_initials: 'DT' },
  { id: 2, author: 'Yilmaz Emre', rating: 4, text: 'Food is good. Nice views of the CBD from the balcony. Clever use of the plants as decoration. A nice place to chill in CBD. Highly recommended.',       date: '10 months ago', avatar_initials: 'YE' },
  { id: 3, author: 'Jay K',       rating: 5, text: "I loved the automation of services at the dinner tables. The meals portions are surprisingly amazing. The drinks were superb. The staff are friendly.",   date: 'a year ago',    avatar_initials: 'JK' },
  { id: 4, author: 'Sarah M',     rating: 5, text: "The Mexican Chicken Pizza was absolutely delicious — well flavoured with a crust that's not too thick. The 1/4 grilled chicken was filling too!",        date: '2 years ago',   avatar_initials: 'SM' },
  { id: 5, author: 'Kevin O',     rating: 4, text: 'Great spot for a business lunch. The salmon salad is fresh and the portions are generous. The balcony view of Nairobi CBD is a bonus.',                  date: '6 months ago',  avatar_initials: 'KO' },
]

function Stars({ rating }) {
  return (
    <span style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </span>
  )
}

export default function Reviews({ reviews, info }) {
  const list = reviews.length ? reviews : FALLBACK
  const bars = [[5, 0.72],[4, 0.18],[3, 0.06],[2, 0.02],[1, 0.02]]

  return (
    <section id="reviews" style={{ padding: '80px 5%', background: 'var(--cream)' }}>
      <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: 12 }}>
        Reviews
      </div>
      <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 16 }}>What our guests say</h2>

      {/* Rating summary box */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 32, padding: 28,
        background: 'var(--white)', borderRadius: 12,
        boxShadow: '0 4px 24px rgba(42,33,24,0.10)',
        maxWidth: 460, marginBottom: 40,
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '4rem', lineHeight: 1 }}>
            {info.rating}
          </div>
          <div style={{ fontSize: '1.2rem', color: 'var(--gold)', margin: '6px 0' }}>
            {'★'.repeat(Math.floor(info.rating))}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--warm-gray)' }}>
            {info.review_count} reviews
          </div>
        </div>
        <div style={{ flex: 1 }}>
          {bars.map(([n, pct]) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--warm-gray)', width: 8 }}>{n}</span>
              <div style={{ flex: 1, height: 6, background: 'var(--cream-dark)', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${pct * 100}%`, background: 'var(--gold)', borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
        {list.map(r => (
          <div key={r.id} style={{
            background: 'var(--white)', borderRadius: 12, padding: 24,
            boxShadow: '0 4px 24px rgba(42,33,24,0.10)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'var(--terracotta)', color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '0.9rem', flexShrink: 0,
              }}>
                {r.avatar_initials}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{r.author}</div>
                <Stars rating={r.rating} />
                <div style={{ fontSize: '0.75rem', color: 'var(--warm-gray)' }}>{r.date}</div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--warm-gray)', lineHeight: 1.7 }}>{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}