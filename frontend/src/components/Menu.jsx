import { useState } from 'react'

const FALLBACK = [
  { id: 1, name: 'Grills & Mains', items: [
    { id: 1, name: '1/4 Grilled Chicken',   description: 'Succulent quarter chicken, perfectly seasoned and flame-grilled', price: '650.00',  is_popular: true  },
    { id: 2, name: 'Grilled Salmon Atlantis',description: 'Atlantic salmon fillet, grilled with lemon-herb butter',           price: '1450.00', is_popular: true  },
    { id: 3, name: 'Lamb Mandi',             description: 'Slow-cooked tender lamb on fragrant spiced rice',                  price: '1300.00', is_popular: true  },
    { id: 4, name: 'Medium Rare Steak',      description: 'Premium beef steak, seared to perfection with garlic butter',      price: '1800.00', is_popular: true  },
  ]},
  { id: 2, name: 'Pizzas', items: [
    { id: 5, name: 'Mexican Chicken Pizza',  description: 'Spiced chicken, jalapeños, bell peppers, mozzarella',              price: '900.00',  is_popular: true  },
    { id: 6, name: 'Pepperoni Classic',      description: 'Generous pepperoni, tomato base, mozzarella, fresh basil',         price: '850.00',  is_popular: false },
  ]},
  { id: 3, name: 'Pasta & Salads', items: [
    { id: 7, name: 'Carbonara Pasta',        description: 'Creamy egg-based sauce, crispy pancetta, parmesan',                price: '750.00',  is_popular: true  },
    { id: 8, name: 'Salmon Salad',           description: 'Seared salmon, mixed greens, capers, lemon-dill dressing',         price: '950.00',  is_popular: true  },
  ]},
  { id: 4, name: 'Sides', items: [
    { id: 9,  name: 'French Fries with Goat',description: 'Crispy golden fries served with tender goat meat pieces',          price: '700.00',  is_popular: true  },
    { id: 10, name: 'Fries and 1/4 Chicken', description: 'Golden fries paired with a quarter grilled chicken',               price: '850.00',  is_popular: true  },
  ]},
  { id: 5, name: 'Drinks & Cocktails', items: [
    { id: 11, name: 'Passion Mojito',        description: 'Passion fruit, fresh mint, lime juice, soda water',                price: '550.00',  is_popular: true  },
    { id: 12, name: 'Moonlite Infusion',     description: 'House signature blend of tropical fruits and herbs',               price: '600.00',  is_popular: true  },
    { id: 13, name: 'Coffee Latte',          description: 'Smooth espresso with velvety steamed milk',                        price: '350.00',  is_popular: false },
    { id: 14, name: 'Milkshakes',            description: 'Thick creamy shakes — chocolate, vanilla, or strawberry',          price: '450.00',  is_popular: true  },
  ]},
]

export default function Menu({ categories }) {
  const [activeTab, setActiveTab] = useState(0)
  const cats    = categories.length ? categories : FALLBACK
  const current = cats[activeTab]

  return (
    <section id="menu" style={{ padding: '80px 5%', background: 'var(--cream)' }}>
      <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: 12 }}>
        Our Menu
      </div>
      <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 8 }}>
        Crafted with passion,<br />served with pride
      </h2>
      <p style={{ color: 'var(--warm-gray)', marginBottom: 0 }}>
        All prices in Kenyan Shillings.
      </p>

      {/* Tabs */}
      <div style={{
        display: 'flex', overflowX: 'auto', margin: '40px 0 32px',
        borderBottom: '2px solid var(--cream-dark)', scrollbarWidth: 'none',
      }}>
        {cats.map((cat, i) => (
          <button key={cat.id} onClick={() => setActiveTab(i)} style={{
            padding: '10px 20px', fontSize: '0.875rem', cursor: 'pointer',
            border: 'none', background: 'none', whiteSpace: 'nowrap',
            fontFamily: 'Inter, sans-serif', marginBottom: -2,
            fontWeight:      activeTab === i ? 600 : 500,
            color:           activeTab === i ? 'var(--terracotta)' : 'var(--warm-gray)',
            borderBottom:    activeTab === i ? '2px solid var(--terracotta)' : '2px solid transparent',
          }}>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Cards */}
      {current && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {current.items.map(item => (
            <div key={item.id} style={{
              background: 'var(--white)', borderRadius: 12, padding: 24,
              boxShadow: '0 4px 24px rgba(42,33,24,0.10)', position: 'relative',
            }}>
              {item.is_popular && (
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  background: 'var(--gold)', color: 'var(--charcoal)',
                  fontSize: '0.68rem', fontWeight: 700, padding: '3px 8px',
                  borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>⭐ Popular</div>
              )}
              <h3 style={{ fontSize: '1.05rem', marginBottom: 8, paddingRight: item.is_popular ? 70 : 0 }}>
                {item.name}
              </h3>
              <p style={{ fontSize: '0.83rem', color: 'var(--warm-gray)', lineHeight: 1.6, marginBottom: 16 }}>
                {item.description}
              </p>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--terracotta)' }}>
                Ksh {parseFloat(item.price).toLocaleString()}
                <span style={{ fontSize: '0.78rem', fontWeight: 400, color: 'var(--warm-gray)' }}> per serving</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Order links */}
      <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <a href="https://bolt.eu" target="_blank" rel="noopener noreferrer" style={{
          background: 'var(--terracotta)', color: 'white', borderRadius: 6,
          padding: '14px 28px', fontWeight: 600, fontSize: '0.95rem',
        }}>🛵 Order on Bolt</a>
        <a href="http://goldenstar.co.ke" target="_blank" rel="noopener noreferrer" style={{
          color: 'var(--terracotta)', border: '1.5px solid var(--terracotta)',
          borderRadius: 6, padding: '14px 28px', fontWeight: 500, fontSize: '0.95rem',
        }}>Full Menu Online</a>
      </div>
    </section>
  )
}