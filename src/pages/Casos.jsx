import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const cases = [
  {
    id: 'inmobiliarias',
    vertical: 'Inmobiliarias',
    status: 'Activo',
    tag: 'WhatsApp · Calificación',
    headline: 'De 200 consultas por mes a solo hablar con los que quieren comprar.',
    context: 'Una inmobiliaria recibía decenas de consultas semanales por redes y portales. El equipo de ventas respondía todo manualmente, sin criterio de prioridad. La mayoría eran curiosos, no compradores.',
    solution: 'Implementamos un agente conversacional por WhatsApp que recibe la consulta inicial, hace preguntas clave (presupuesto, zona, urgencia, forma de pago) y califica automáticamente. Solo los leads con score alto llegan al vendedor.',
    result: 'El equipo de ventas redujo el tiempo en conversaciones no productivas. Los leads calificados cierran en menos reuniones porque ya llegan con información relevante.',
    tools: ['WhatsApp Business API', 'Agente conversacional con IA', 'Dashboard de leads calificados', 'Integración con CRM existente'],
  },
  {
    id: 'ganaderia',
    vertical: 'Ganadería',
    status: 'Producción',
    tag: 'App de gestión · Operaciones',
    headline: 'Control total del rodeo desde el campo, sin papel.',
    context: 'Un establecimiento ganadero manejaba toda la operación con cuadernos y Excel. El seguimiento de animales, movimientos, sanidad y productividad se perdía entre hojas y memoria.',
    solution: 'App mobile-first de gestión operativa. Registro de animales con identificación, historial sanitario, movimientos entre potreros, registros de parición y métricas por lote.',
    result: 'Operación registrada en tiempo real desde cualquier dispositivo. Historial completo por animal. Reportes automáticos para toma de decisiones.',
    tools: ['App web progresiva (PWA)', 'Base de datos en tiempo real', 'Acceso offline', 'Panel de reportes por período'],
  },
  {
    id: 'indumentaria',
    vertical: 'Indumentaria',
    status: 'Producción',
    tag: 'Inventario · Reservas',
    headline: 'Stock en tiempo real y reservas sin solapamiento.',
    context: 'Una marca de ropa manejaba el stock con planillas. Las reservas se hacían por WhatsApp. Habitual: mismo talle vendido dos veces, stock desactualizado, pérdida de ventas por no saber qué había disponible.',
    solution: 'Sistema de inventario con actualización en tiempo real por talle y color. Módulo de reservas con bloqueo automático para evitar solapamientos. Vista para punto de venta y para el equipo online.',
    result: 'Cero ventas duplicadas desde la implementación. Stock visible en tiempo real. El equipo online y el local trabajan sobre el mismo dato.',
    tools: ['Panel de inventario por SKU', 'Módulo de reservas con bloqueo', 'Vista de punto de venta', 'Historial de movimientos de stock'],
  },
  {
    id: 'concesionarias',
    vertical: 'Concesionarias',
    status: 'Producción',
    tag: 'Stock · Cuotas · Gestión',
    headline: 'Control de stock de motos y gestión de planes de financiación en un solo lugar.',
    context: 'Una concesionaria de motos y lanchas manejaba el stock con hojas de cálculo y el seguimiento de clientes en cuotas de forma manual. El proceso de venta era largo y propenso a errores.',
    solution: 'Sistema integral con módulo de stock (unidades, versiones, colores, estado), módulo de clientes con seguimiento de cuotas y vencimientos, y reportes de gestión para el dueño.',
    result: 'Visibilidad completa del stock en tiempo real. Alertas automáticas de vencimiento de cuotas. Proceso de venta más rápido con toda la información centralizada.',
    tools: ['Gestión de stock por unidad', 'Seguimiento de financiaciones', 'Alertas de vencimientos', 'Dashboard de gestión para dirección'],
  },
]

function CaseCard({ c }) {
  const [open, setOpen] = useState(false)
  const ref = useScrollReveal({ delay: 0.05 })

  return (
    <div ref={ref} id={c.id} style={{
      background: 'var(--bg-card)', border: '1px solid var(--border)',
      borderRadius: '12px', overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{ padding: '40px 40px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
              fontSize: '1.1rem', color: 'var(--text)',
            }}>{c.vertical}</span>
            <span style={{
              color: 'var(--green)', background: 'rgba(57,255,20,0.1)',
              border: '1px solid rgba(57,255,20,0.25)',
              fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.68rem', fontWeight: 700,
              padding: '3px 10px', borderRadius: '100px', letterSpacing: '0.5px',
            }}>{c.status}</span>
          </div>
          <span style={{
            border: '1px solid var(--text-sec)', color: 'var(--text-sec)',
            fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem',
            padding: '4px 12px', borderRadius: '100px',
          }}>{c.tag}</span>
        </div>

        <h3 style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 700,
          letterSpacing: '-0.3px', lineHeight: 1.25, marginBottom: '16px',
          color: 'var(--text)', maxWidth: '600px',
        }}>{c.headline}</h3>

        <p style={{ color: 'var(--text-sec)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '24px' }}>{c.context}</p>

        <button onClick={() => setOpen(o => !o)} style={{
          background: 'none', color: 'var(--green)',
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.85rem',
          display: 'flex', alignItems: 'center', gap: '6px',
          padding: '0', border: 'none',
          transition: 'opacity 0.15s',
        }}>
          {open ? 'Ocultar detalle ↑' : 'Ver solución y resultado ↓'}
        </button>
      </div>

      {open && (
        <div style={{
          borderTop: '1px solid var(--border)',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          gap: '0',
        }}>
          {[
            { label: 'La solución', text: c.solution, accent: false },
            { label: 'El resultado', text: c.result, accent: true },
            { label: 'Stack / herramientas', items: c.tools, accent: false },
          ].map((block, i) => (
            <div key={i} style={{
              padding: '28px 32px',
              borderRight: i < 2 ? '1px solid var(--border)' : 'none',
              borderLeft: block.accent ? '3px solid var(--green)' : 'none',
            }}>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem',
                fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px',
                color: block.accent ? 'var(--green)' : 'var(--text-muted)', marginBottom: '12px',
              }}>{block.label}</p>
              {block.text && <p style={{ color: 'var(--text-sec)', fontSize: '0.85rem', lineHeight: 1.7 }}>{block.text}</p>}
              {block.items && (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {block.items.map((item, j) => (
                    <li key={j} style={{ color: 'var(--text-sec)', fontSize: '0.85rem', display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'var(--green)', flexShrink: 0 }}>→</span>{item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Casos() {
  const heroRef = useScrollReveal()
  return (
    <main style={{ paddingTop: '100px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
        <div ref={heroRef} style={{ padding: '60px 0 60px', borderBottom: '1px solid var(--border)', marginBottom: '60px' }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)',
            fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px',
            textTransform: 'uppercase', marginBottom: '20px',
          }}>Casos</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'end' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.05 }}>
              Producto real antes que marca.
            </h1>
            <p style={{ color: 'var(--text-sec)', fontSize: '1rem', lineHeight: 1.75 }}>
              Las apps de Manu están en producción antes de que Suden Labs existiera como nombre. Estos son los casos que respaldan cada conversación de venta.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '120px' }}>
          {cases.map(c => <CaseCard key={c.id} c={c} />)}
        </div>

        <div style={{
          padding: '60px 0 100px', borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px',
        }}>
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.3rem', marginBottom: '8px' }}>
              ¿Tu industria no está acá?
            </h3>
            <p style={{ color: 'var(--text-sec)', fontSize: '0.9rem' }}>Mejor. Significa que hay espacio.</p>
          </div>
          <Link to="/contacto" style={{
            background: 'var(--green)', color: '#0D0D0D',
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.95rem',
            padding: '14px 32px', borderRadius: '8px',
            transition: 'box-shadow 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 28px rgba(57,255,20,0.45)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            Contanos el caso →
          </Link>
        </div>
      </div>
    </main>
  )
}
