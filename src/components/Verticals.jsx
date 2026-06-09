import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const active = [
  { label: 'Inmobiliarias', detail: 'Calificación de leads por WhatsApp', href: '/proyectos' },
  { label: 'Ganadería', detail: 'App de gestión operativa', href: '/proyectos' },
  { label: 'Indumentaria', detail: 'Inventario y reservas', href: '/proyectos' },
  { label: 'Concesionarias', detail: 'Stock y cuotas', href: '/proyectos' },
]

const radar = ['Gastronomía', 'Salud', 'Contabilidad', 'Turismo', 'Pesca', 'Fútbol', 'Pymes con procesos repetitivos']

function VerticalRow({ v }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link to={v.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 24px', background: hovered ? 'var(--bg-card-hover)' : 'var(--bg-card)',
        border: '1px solid', borderColor: hovered ? 'var(--border-hover)' : 'var(--border)',
        borderRadius: '8px', transition: 'all 0.15s',
      }}
    >
      <div>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '1rem', marginBottom: '3px' }}>{v.label}</p>
        <p style={{ color: 'var(--text-sec)', fontSize: '0.8rem' }}>{v.detail}</p>
      </div>
      <span style={{
        color: 'var(--green)', background: 'rgba(57,255,20,0.08)',
        border: '1px solid rgba(57,255,20,0.2)',
        fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.68rem', fontWeight: 700,
        padding: '4px 10px', borderRadius: '100px', flexShrink: 0,
      }}>Producción</span>
    </Link>
  )
}

export default function Verticals() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal({ delay: 0.1 })
  const radarRef = useScrollReveal({ delay: 0.15 })

  return (
    <section style={{ padding: '120px 48px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div ref={leftRef}>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)',
              fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px',
              textTransform: 'uppercase', marginBottom: '16px',
            }}>Alcance</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, letterSpacing: '-1px', marginBottom: '20px', lineHeight: 1.15 }}>
              Probado en campo.<br />No en PowerPoint.
            </h2>
            <p style={{ color: 'var(--text-sec)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '360px', marginBottom: '28px' }}>
              Cuando Franco habla con un cliente, ya tiene tres aplicaciones funcionando para mostrar. Eso pesa diferente a un portfolio de mockups.
            </p>
            <Link to="/proyectos" style={{
              color: 'var(--green)', fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.85rem', fontWeight: 600,
            }}>Ver los proyectos →</Link>
          </div>

          <div ref={rightRef} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {active.map((v, i) => <VerticalRow key={i} v={v} />)}
          </div>
        </div>

        <div ref={radarRef} style={{
          marginTop: '80px', paddingTop: '48px', borderTop: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap',
        }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-sec)',
            fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px',
            textTransform: 'uppercase', flexShrink: 0,
          }}>En radar →</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {radar.map((r, i) => (
              <span key={i} style={{
                border: '1px solid rgba(57,255,20,0.2)',
                color: 'var(--text-sec)',
                background: 'rgba(57,255,20,0.05)',
                fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem',
                padding: '6px 14px', borderRadius: '100px', transition: 'border-color 0.15s, color 0.15s, background 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'rgba(57,255,20,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(57,255,20,0.2)'; e.currentTarget.style.color = 'var(--text-sec)'; e.currentTarget.style.background = 'rgba(57,255,20,0.05)' }}
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
