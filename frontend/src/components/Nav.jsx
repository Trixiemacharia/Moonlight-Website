import { useState, useEffect } from 'react'

export default function Nav({ onReserve }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    ['#menu',     'Menu'],
    ['#gallery',  'Gallery'],
    ['#reviews',  'Reviews'],
    ['#location', 'Find Us'],
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(250,246,239,0.96)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--cream-dark)',
      boxShadow: scrolled ? '0 2px 16px rgba(42,33,24,0.12)' : 'none',
      padding: '0 5%', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', height: 64,
    }}>
      {/* Logo */}
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--terracotta)' }}>
        Moonlite<span style={{ color: 'var(--charcoal)' }}> Café</span>
      </div>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: 28, listStyle: 'none' }}>
        {links.map(([href, label]) => (
          <li key={href} style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}>
            <a href={href} style={{ color: 'var(--warm-gray)', fontSize: '0.875rem', fontWeight: 500 }}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Reserve button */}
      <button onClick={onReserve} style={{
        background: 'var(--terracotta)', color: 'white', border: 'none',
        borderRadius: 8, padding: '9px 20px', fontSize: '0.875rem',
        fontWeight: 600, cursor: 'pointer',
      }}>
        Reserve a Table
      </button>
    </nav>
  )
}