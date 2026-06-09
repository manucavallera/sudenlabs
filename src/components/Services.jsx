import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  { num: '01', title: 'Automatización con IA', desc: '¿Tu equipo hace lo mismo todos los días? Clasificar, cargar, reenviar. Eso lo puede hacer un sistema solo — sin errores, sin espera.', tag: 'IA · Eficiencia', href: '/servicios#automatizacion' },
  { num: '02', title: 'Apps de gestión', desc: 'El software genérico cubre el caso estándar. Tu negocio vive en lo que no entra en el estándar. Construimos el sistema exacto para tu flujo.', tag: 'Full-stack', href: '/servicios#apps' },
  { num: '03', title: 'Chatbots y agentes', desc: 'Tus clientes escriben a las 11 de la noche. El bot responde, califica y agenda. Vos atendés solo lo que realmente requiere una persona.', tag: 'WhatsApp · Telegram', href: '/servicios#chatbots' },
  { num: '04', title: 'Calificación de leads', desc: 'Tu equipo de ventas persigue a todos por igual. El sistema los filtra antes de que lleguen — solo pasan los que tienen intención real.', tag: 'Ventas', href: '/servicios#leads' },
  { num: '05', title: 'Dashboards operativos', desc: 'Para saber cómo va el mes abrís tres sistemas distintos. Un panel que consolida todo y te avisa cuando algo se mueve mal.', tag: 'Data', href: '/servicios#dashboards' },
  { num: '06', title: 'Productos a medida', desc: 'El problema no entra en ninguna categoría. Mejor — empezamos desde cero y construimos exactamente lo que necesitás, sin plantilla previa.', tag: 'Custom', href: '/servicios#custom' },
]

function TiltCard({ s }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, scale: 1, bg: 'var(--bg-card)' })
  const [glow, setGlow] = useState({ x: '50%', y: '50%' })
  const [hovered, setHovered] = useState(false)

  const onMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setTilt({
      rx: ((y - rect.height / 2) / rect.height) * -7,
      ry: ((x - rect.width / 2) / rect.width) * 7,
      scale: 1.02, bg: 'var(--bg-card-hover)',
    })
    setGlow({ x: `${(x / rect.width) * 100}%`, y: `${(y / rect.height) * 100}%` })
  }

  const onMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, scale: 1, bg: 'var(--bg-card)' })
    setHovered(false)
  }

  return (
    <Link to={s.href}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      style={{
        display: 'block',
        background: tilt.bg,
        padding: '40px 36px',
        transform: `perspective(600px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${tilt.scale})`,
        transition: hovered ? 'transform 0.08s ease, background 0.2s' : 'transform 0.4s ease, background 0.2s',
        position: 'relative', overflow: 'hidden', willChange: 'transform',
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle at ${glow.x} ${glow.y}, rgba(57,255,20,0.07) 0%, transparent 60%)`,
          pointerEvents: 'none',
        }} />
      )}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '3px',
        height: hovered ? '100%' : '0%', background: 'var(--green)',
        transition: 'height 0.3s ease',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', fontWeight: 700,
          color: hovered ? 'var(--green)' : 'var(--text-muted)', letterSpacing: '1px', transition: 'color 0.2s',
        }}>
          {s.num}
        </span>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem',
          color: 'var(--text-sec)', border: '1px solid var(--text-sec)',
          padding: '4px 10px', borderRadius: '100px',
        }}>
          {s.tag}
        </span>
      </div>

      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem',
        fontWeight: 600, marginBottom: '12px', color: 'var(--text)', letterSpacing: '-0.3px',
      }}>
        {s.title}
      </h3>
      <p style={{ color: 'var(--text-sec)', fontSize: '0.875rem', lineHeight: 1.7 }}>{s.desc}</p>

      <p style={{
        marginTop: '20px', color: 'var(--green)', fontSize: '0.8rem',
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.2s',
      }}>
        Ver más →
      </p>
    </Link>
  )
}

export default function Services() {
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal({ delay: 0.1 })

  return (
    <section id="servicios" style={{ padding: '120px 48px', maxWidth: '1200px', margin: '0 auto' }}>
      <div ref={headRef} style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        marginBottom: '72px', flexWrap: 'wrap', gap: '24px',
        borderBottom: '1px solid var(--border)', paddingBottom: '48px',
      }}>
        <div>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)',
            fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px',
            textTransform: 'uppercase', marginBottom: '16px',
          }}>
            Qué construimos
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, letterSpacing: '-1px', maxWidth: '480px' }}>
            Seis problemas.<br />Seis maneras de resolverlos.
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}>
          <p style={{ color: 'var(--text-sec)', fontSize: '0.9rem', maxWidth: '320px', lineHeight: 1.7, textAlign: 'right' }}>
            Cada servicio nació de un problema real que vimos en algún negocio. Nada está en el catálogo por estar.
          </p>
          <Link to="/servicios" style={{
            color: 'var(--green)', fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            Ver todos los servicios →
          </Link>
        </div>
      </div>

      <div ref={gridRef} style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '1px', background: 'var(--border)',
        border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden',
      }}>
        {services.map((s, i) => <TiltCard key={i} s={s} />)}
      </div>
    </section>
  )
}
