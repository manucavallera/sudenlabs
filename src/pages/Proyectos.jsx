import { usePageTitle } from '../hooks/usePageTitle'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    id: 'street-stylo',
    name: 'Street & Stylo',
    vertical: 'Indumentaria',
    location: 'Córdoba, Argentina',
    headline: 'Gestión completa para marca de indumentaria: reservas, POS y caja en un solo sistema.',
    description: 'Control de inventario por talle y color, reservas con bloqueo automático para evitar solapamientos, punto de venta, caja diaria, balance por período y bot de WhatsApp conectado. Sin herramientas externas, todo desde un panel.',
    modules: ['Inventario por SKU', 'Sistema de reservas', 'POS', 'Balance y caja', 'Bot conectado'],
    mainImg: '/street-dashboard.png',
    hoverImg: '/street-prendas.png',
    color: '#FF6B35',
  },
  {
    id: 'ternedata',
    name: 'TerneData',
    vertical: 'Ganadería',
    location: 'Entre Ríos, Argentina',
    headline: 'Seguimiento individual de rodeo bovino con alertas sanitarias y métricas en tiempo real.',
    description: 'Registro de animales con historial clínico individual, control de crecimiento y ganancia de peso diaria, seguimiento sanitario, alertas automáticas de mortalidad y morbilidad, y KPIs del rodeo actualizados en tiempo real.',
    modules: ['KPIs del rodeo', 'Control de crecimiento', 'Resumen de salud', 'Historial por animal', 'Alertas automáticas'],
    mainImg: '/terne-dashboard.png',
    hoverImg: '/terne-salud.png',
    color: '#4CAF50',
  },
  {
    id: 'speed-motors',
    name: 'Speed Motors',
    vertical: 'Concesionaria',
    location: 'Crespo, Entre Ríos',
    headline: 'Control de stock, créditos y vencimientos para concesionaria de motos y lanchas.',
    description: 'Inventario de productos con categorías, seguimiento de cuotas y créditos de clientes con alertas automáticas de vencimiento, presupuestos, órdenes de compra, dashboard financiero y reporte de cobros por período.',
    modules: ['Stock de productos', 'Cuotas y créditos', 'Alertas de vencimiento', 'Dashboard financiero', 'Gestión de ventas'],
    mainImg: '/speed-dashboard.png',
    hoverImg: '/speed-alertas.png',
    color: '#2563EB',
  },
]

function ProjectCard({ p, index }) {
  const [hovered, setHovered] = useState(false)
  const ref = useScrollReveal({ delay: index * 0.1 })

  return (
    <div ref={ref} style={{ position: 'relative', display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', background: 'var(--bg-card)', transition: 'border-color 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      {/* Screenshot preview — browser frame */}
      <div
        style={{ background: '#111', padding: '0 20px 0', flexShrink: 0 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Browser chrome bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 0 8px' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
          <div style={{ flex: 1, height: '22px', background: '#1e1e1e', borderRadius: '4px', marginLeft: '8px' }} />
        </div>

        {/* Image wrapper */}
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '6px 6px 0 0' }}>
          {/* Main image */}
          <img
            src={p.mainImg}
            alt={p.name}
            style={{
              width: '100%', height: 'auto', display: 'block',
              opacity: hovered ? 0 : 1,
              transition: 'opacity 0.4s ease',
            }}
          />
          {/* Hover image */}
          <img
            src={p.hoverImg}
            alt={`${p.name} detalle`}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />

          {/* Blur overlay on hover */}
          <div style={{
            position: 'absolute', inset: 0,
            backdropFilter: 'blur(3px)',
            background: 'rgba(0,0,0,0.45)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}>
            <a
              href="https://wa.me/5493434907989"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--green)', color: '#0D0D0D',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: '0.9rem',
                padding: '12px 28px', borderRadius: '8px',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 28px rgba(57,255,20,0.5)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              Solicitar demo →
            </a>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem', marginTop: '12px', fontFamily: "'Space Grotesk', sans-serif" }}>
              Acceso bajo solicitud
            </p>
          </div>

          {/* Bottom fade */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '60px',
            background: 'linear-gradient(to top, rgba(17,17,17,0.9), transparent)',
            pointerEvents: 'none',
          }} />
        </div>
      </div>

      {/* badge — now outside image, on the browser frame */}
      <div style={{
        position: 'absolute', top: '42px', left: '32px',
        background: p.color, borderRadius: '6px',
        padding: '4px 10px',
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.7rem', fontWeight: 700, color: '#fff',
        }}>
          {p.vertical}
        </div>

      {/* Info */}
      <div style={{ padding: '32px 36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
        {/* Left: name + description */}
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '8px' }}>
            📍 {p.location}
          </p>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.5px', marginBottom: '10px' }}>
            {p.name}
          </h3>
          <p style={{ color: 'var(--green)', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.875rem', fontWeight: 600, marginBottom: '14px', lineHeight: 1.4 }}>
            {p.headline}
          </p>
          <p style={{ color: 'var(--text-sec)', fontSize: '0.85rem', lineHeight: 1.7 }}>
            {p.description}
          </p>
        </div>

        {/* Right: modules + CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {p.modules.map((m, i) => (
              <span key={i} style={{
                background: 'var(--bg-alt)', border: '1px solid var(--border)',
                color: 'var(--text-sec)',
                fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem',
                padding: '5px 12px', borderRadius: '100px',
              }}>{m}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a
              href="https://wa.me/5493434907989"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--green)', color: '#0D0D0D',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: '0.85rem',
                padding: '11px 24px', borderRadius: '7px',
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(57,255,20,0.4)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              Solicitar demo →
            </a>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: "'Space Grotesk', sans-serif" }}>
              En producción
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Proyectos() {
  usePageTitle('Proyectos')
  const heroRef = useScrollReveal()

  return (
    <main style={{ paddingTop: '100px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} className="page-pad">

        <div ref={heroRef} style={{ padding: '60px 0 72px', borderBottom: '1px solid var(--border)', marginBottom: '64px' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Proyectos
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'end' }} className="grid-2">
            <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.05 }}>
              Producto real<br />antes que marca.
            </h1>
            <p style={{ color: 'var(--text-sec)', fontSize: '1rem', lineHeight: 1.75 }}>
              Estas apps están funcionando en producción antes de que Suden Labs existiera como nombre. Pasá el mouse sobre cada captura para ver el detalle.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '120px' }}>
          {projects.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />)}
        </div>

        <div style={{ borderTop: '1px solid var(--border)', padding: '60px 0 100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.3rem', marginBottom: '8px' }}>¿Tu industria no está acá?</h3>
            <p style={{ color: 'var(--text-sec)', fontSize: '0.9rem' }}>Mejor. Significa que hay espacio.</p>
          </div>
          <Link to="/contacto" style={{
            background: 'var(--green)', color: '#0D0D0D',
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.95rem',
            padding: '14px 32px', borderRadius: '8px', transition: 'box-shadow 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 28px rgba(57,255,20,0.4)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            Contanos el caso →
          </Link>
        </div>
      </div>
    </main>
  )
}
