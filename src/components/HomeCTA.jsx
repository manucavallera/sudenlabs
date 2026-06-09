import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HomeCTA() {
  const ref = useScrollReveal()
  return (
    <section style={{
      padding: '120px 48px', borderTop: '1px solid var(--border)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '400px',
        background: 'radial-gradient(ellipse, var(--green-dim) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div ref={ref} style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 700,
          letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: '24px',
        }}>
          Contanos qué está frenando el negocio.
        </h2>
        <p style={{ color: 'var(--text-sec)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '40px', maxWidth: '460px', margin: '0 auto 40px' }}>
          Sin formularios corporativos. Describís el problema como lo vivís — nosotros te decimos si tiene solución tecnológica y cuánto costaría resolverlo.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contacto" style={{
            background: 'var(--green)', color: '#0D0D0D',
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1rem',
            padding: '16px 40px', borderRadius: '8px', display: 'inline-block',
            transition: 'box-shadow 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(57,255,20,0.45)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            Describir el problema →
          </Link>
          <Link to="/proyectos" style={{
            border: '1px solid var(--border)', color: 'var(--text-sec)',
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: '1rem',
            padding: '16px 40px', borderRadius: '8px', display: 'inline-block',
            transition: 'border-color 0.15s, color 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--text)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-sec)' }}
          >
            Ver proyectos reales →
          </Link>
        </div>
      </div>
    </section>
  )
}
