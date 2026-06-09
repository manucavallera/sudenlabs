import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: '¿Cuánto cuesta un proyecto?',
    a: 'Depende del alcance — y no lo sabemos antes de entender el problema. Después de una primera conversación podemos darte una estimación honesta. No hay número de catálogo porque cada proyecto es distinto.',
  },
  {
    q: '¿Cuánto tarda en estar listo?',
    a: 'Un bot de calificación de leads puede estar corriendo en 1-2 semanas. Una app de gestión completa entre 4-8 semanas. Cerramos el plazo antes de arrancar y no lo movemos sin avisarte primero.',
  },
  {
    q: '¿Trabajan con negocios chicos o pymes?',
    a: 'Sí, y es donde más impacto tiene lo que hacemos. Una pyme con procesos manuales tiene más para ganar con automatización que una empresa que ya tiene equipo de IT. No hay tamaño mínimo de entrada.',
  },
  {
    q: '¿Qué pasa si el proyecto cambia a mitad de camino?',
    a: 'Cerramos el alcance antes de empezar exactamente para evitar esto. Si aparece algo nuevo, lo evaluamos y acordamos antes de hacerlo. Sin cambios silenciosos, sin factura sorpresa al final.',
  },
  {
    q: '¿Necesito saber de tecnología para trabajar con ustedes?',
    a: 'No. Describís el problema como lo vivís en el día a día. Franco se encarga de entenderlo y traducirlo. Manu construye. Vos revisás si lo que se construye resuelve lo que describiste.',
  },
  {
    q: '¿Qué pasa cuando el proyecto termina?',
    a: 'El sistema es tuyo. Entregamos documentación para que cualquier desarrollador pueda entenderlo y mantenerlo. No hay lock-in — si en algún momento necesitás que otra persona lo mantenga, puede.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', background: 'none', border: 'none', padding: '24px 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px',
        textAlign: 'left',
      }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', color: 'var(--text)', lineHeight: 1.3 }}>
          {item.q}
        </span>
        <span style={{
          width: '28px', height: '28px', borderRadius: '50%',
          border: '1px solid var(--border)', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: open ? 'var(--green)' : 'var(--text-muted)',
          borderColor: open ? 'var(--green)' : 'var(--border)',
          fontSize: '1rem', transition: 'all 0.2s',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>+</span>
      </button>
      {open && (
        <p style={{ color: 'var(--text-sec)', fontSize: '0.9rem', lineHeight: 1.75, paddingBottom: '24px', maxWidth: '720px', animation: 'fadeUp 0.2s ease' }}>
          {item.a}
        </p>
      )}
    </div>
  )
}

export default function FAQ() {
  const headRef = useScrollReveal()
  const listRef = useScrollReveal({ delay: 0.1 })

  return (
    <section style={{ padding: '120px 48px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }} className="grid-faq">
          <div ref={headRef}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>FAQ</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1.15, marginBottom: '20px' }}>
              Las preguntas que todos hacen.
            </h2>
            <p style={{ color: 'var(--text-sec)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '28px' }}>
              Sin respuestas corporativas. Si no está acá, escribinos directo.
            </p>
            <Link to="/contacto" style={{ color: 'var(--green)', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', fontWeight: 600 }}>
              Hacer otra pregunta →
            </Link>
          </div>
          <div ref={listRef} style={{ borderTop: '1px solid var(--border)' }}>
            {faqs.map((item, i) => <FAQItem key={i} item={item} index={i} />)}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .grid-faq { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
