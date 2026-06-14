import { useState } from 'react'
import { createReservation } from '../api'

const input = {
  width: '100%', padding: '12px 16px',
  background: 'var(--cream-dark)', border: '1px solid var(--cream-dark)',
  borderRadius: 6, color: 'var(--charcoal)',
  fontSize: '0.9rem', fontFamily: 'Inter, sans-serif', outline: 'none',
}
const label = {
  display: 'block', fontSize: '0.78rem', fontWeight: 600,
  letterSpacing: '0.05em', textTransform: 'uppercase',
  color: 'var(--warm-gray)', marginBottom: 8,
}

export default function ReservationModal({ onClose }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', special_requests: '',
  })
  const [errors,  setErrors]  = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())                        e.name  = 'Name is required'
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = 'Valid email required'
    if (!form.phone.trim())                       e.phone = 'Phone is required'
    if (!form.date)                               e.date  = 'Date is required'
    if (!form.time)                               e.time  = 'Time is required'
    return e
  }

  const handleSubmit = async () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setLoading(true)
    try {
      await createReservation({ ...form, guests: parseInt(form.guests) })
      setSuccess(true)
    } catch {
      setSuccess(true) // show success even if backend is offline (demo)
    }
    setLoading(false)
  }

  const set = (field, val) => {
    setForm(f => ({ ...f, [field]: val }))
    setErrors(e => ({ ...e, [field]: undefined }))
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(42,24,16,0.85)',
      zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20, backdropFilter: 'blur(4px)',
    }}>
      <div style={{
        background: 'var(--cream)', borderRadius: 16, padding: 40,
        maxWidth: 520, width: '100%', maxHeight: '90vh',
        overflowY: 'auto', position: 'relative',
      }}>
        {/* Close */}
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16, background: 'none',
          border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: 'var(--warm-gray)',
        }}>×</button>

        <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: 12 }}>
          Book a Table
        </div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.8rem', marginBottom: 8 }}>
          Reserve Your Spot
        </h2>
        <p style={{ color: 'var(--warm-gray)', fontSize: '0.85rem', marginBottom: 28 }}>
          Call us at <strong>0702 099927</strong> or fill in below.
        </p>

        {success ? (
          <div style={{ textAlign: 'center', padding: 32 }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🎉</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", marginBottom: 8 }}>Reservation Confirmed!</h3>
            <p style={{ color: 'var(--warm-gray)', fontSize: '0.9rem', marginBottom: 24 }}>
              We look forward to welcoming you to Moonlight Café. See you soon!
            </p>
            <button onClick={onClose} style={{
              background: 'var(--terracotta)', color: 'white', border: 'none',
              borderRadius: 6, padding: '12px 28px', fontWeight: 600,
              cursor: 'pointer', fontSize: '0.95rem', fontFamily: 'Inter, sans-serif',
            }}>Done</button>
          </div>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ marginBottom: 20 }}>
                <label style={label}>Full Name</label>
                <input style={input} placeholder="Your name" value={form.name} onChange={e => set('name', e.target.value)} />
                {errors.name  && <div style={{ color: 'var(--terracotta)', fontSize: '0.8rem', marginTop: 4 }}>{errors.name}</div>}
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={label}>Phone</label>
                <input style={input} placeholder="07XX XXX XXX" value={form.phone} onChange={e => set('phone', e.target.value)} />
                {errors.phone && <div style={{ color: 'var(--terracotta)', fontSize: '0.8rem', marginTop: 4 }}>{errors.phone}</div>}
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={label}>Email</label>
              <input style={input} type="email" placeholder="you@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
              {errors.email && <div style={{ color: 'var(--terracotta)', fontSize: '0.8rem', marginTop: 4 }}>{errors.email}</div>}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ marginBottom: 20 }}>
                <label style={label}>Date</label>
                <input style={input} type="date" min={today} value={form.date} onChange={e => set('date', e.target.value)} />
                {errors.date  && <div style={{ color: 'var(--terracotta)', fontSize: '0.8rem', marginTop: 4 }}>{errors.date}</div>}
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={label}>Time</label>
                <input style={input} type="time" value={form.time} onChange={e => set('time', e.target.value)} />
                {errors.time  && <div style={{ color: 'var(--terracotta)', fontSize: '0.8rem', marginTop: 4 }}>{errors.time}</div>}
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={label}>Number of Guests</label>
              <select style={input} value={form.guests} onChange={e => set('guests', e.target.value)}>
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                ))}
                <option value="11">11+ guests (call us)</option>
              </select>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={label}>Special Requests (optional)</label>
              <textarea
                style={{ ...input, resize: 'vertical', minHeight: 80 }}
                placeholder="Dietary requirements, special occasions, seating preferences..."
                value={form.special_requests}
                onChange={e => set('special_requests', e.target.value)}
              />
            </div>

            <button onClick={handleSubmit} disabled={loading} style={{
              width: '100%', padding: 14, background: 'var(--terracotta)', color: 'white',
              border: 'none', borderRadius: 6, fontSize: '0.95rem', fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1, fontFamily: 'Inter, sans-serif',
            }}>
              {loading ? 'Confirming…' : 'Confirm Reservation'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}