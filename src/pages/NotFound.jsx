import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '48px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(8rem, 20vw, 18rem)',
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
        color: 'transparent', WebkitTextStroke: '1px var(--border)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>404</div>

      <div style={{ position: 'relative' }}>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>
          Página no encontrada
        </p>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-1px', marginBottom: '16px', maxWidth: '500px' }}>
          Esta URL no existe.<br />Pero el problema que tenés sí.
        </h1>
        <p style={{ color: 'var(--text-sec)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '40px' }}>
          Volvé al inicio o contanos directamente qué necesitás.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" style={{
            background: 'var(--green)', color: '#0D0D0D',
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.95rem',
            padding: '14px 32px', borderRadius: '8px',
          }}>Volver al inicio</Link>
          <Link to="/contacto" style={{
            border: '1px solid var(--border)', color: 'var(--text-sec)',
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: '0.95rem',
            padding: '14px 32px', borderRadius: '8px',
          }}>Contactar</Link>
        </div>
      </div>
    </main>
  )
}
