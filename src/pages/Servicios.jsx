import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'automatizacion', num: '01', title: 'Automatización con IA', tag: 'IA · Procesos',
    short: 'Los procesos que se hacen a mano todos los días — los ejecuta el sistema solo.',
    problem: 'Cada semana hay horas que se van en lo mismo: cargar datos, reenviar cosas, clasificar consultas, armar reportes. Tiempo real de personas reales que se gasta sin agregar valor.',
    solution: 'Identificamos los procesos que más tiempo consumen y construimos el sistema que los ejecuta solo. Sin errores por cansancio, sin cola de pendientes que se acumula.',
    examples: ['Clasificación automática de consultas entrantes', 'Reportes semanales generados sin intervención', 'Sincronización de datos entre sistemas que no se hablan', 'Alertas automáticas cuando algo sale de rango'],
  },
  {
    id: 'apps', num: '02', title: 'Apps de gestión', tag: 'Full-stack · Custom',
    short: 'El sistema exacto para tu flujo. No el 80% de algo parecido.',
    problem: 'El software genérico cubre el caso estándar. Tu negocio vive en lo que no entra en el estándar. Terminás con Excel, WhatsApp y tres apps que no se hablan entre sí.',
    solution: 'Construimos la aplicación exacta que necesitás: las funciones que usás, sin las que no. Interfaz pensada para el flujo real de tu equipo, no para un usuario imaginario.',
    examples: ['Gestión de stock e inventario por industria', 'CRM adaptado al ciclo de venta específico', 'Portales de clientes con acceso controlado', 'Apps de seguimiento operativo en tiempo real'],
  },
  {
    id: 'chatbots', num: '03', title: 'Chatbots y agentes conversacionales', tag: 'WhatsApp · Telegram · AI',
    short: 'Tus clientes escriben cuando pueden. El bot responde, siempre.',
    problem: 'Los clientes escriben fuera de horario. Las mismas preguntas de siempre le consumen tiempo al equipo. La atención manual no escala cuando hay más volumen.',
    solution: 'Agentes conversacionales en WhatsApp o Telegram que responden, califican y agendan. Cuando el caso necesita una persona real, transfieren con el contexto completo.',
    examples: ['Bot de calificación de leads para inmobiliarias', 'Atención de consultas frecuentes sin intervención humana', 'Agendamiento automático de turnos o visitas', 'Notificaciones proactivas con estado del pedido o trámite'],
  },
  {
    id: 'leads', num: '04', title: 'Calificación de leads', tag: 'Ventas · Automatización',
    short: 'Tu equipo de ventas habla solo con quien tiene intención real de comprar.',
    problem: 'Los vendedores persiguen a todos por igual. Sin criterio para priorizar, el tiempo se va con quien nunca iba a comprar. El seguimiento se hace por WhatsApp personal y no queda registro.',
    solution: 'Sistema que recibe el lead, lo califica con preguntas clave por WhatsApp, le asigna un puntaje y lo entrega listo al vendedor. Con historial completo desde el primer contacto.',
    examples: ['Formulario web + bot de WhatsApp integrados', 'Puntuación automática según respuestas y comportamiento', 'Notificación instantánea al vendedor asignado', 'Dashboard de leads con historial y estado actual'],
  },
  {
    id: 'dashboards', num: '05', title: 'Dashboards operativos', tag: 'Data · Tiempo real',
    short: 'Todo lo que necesitás saber del negocio, en una sola pantalla.',
    problem: 'Para saber cómo va el mes abrís tres sistemas. Para ver el stock llamás a alguien. Para revisar ventas exportás un Excel. Esa fricción cuesta más tiempo del que parece.',
    solution: 'Panel unificado que consolida los datos que importan. Actualización en tiempo real, alertas cuando algo se sale de rango, acceso desde cualquier dispositivo.',
    examples: ['Dashboard de ventas con metas y proyección del mes', 'Control de stock con alertas de quiebre automáticas', 'Métricas operativas por turno, sucursal o equipo', 'Integración con los sistemas que ya usás'],
  },
  {
    id: 'custom', num: '06', title: 'Productos digitales a medida', tag: 'Custom · Sin límites',
    short: 'El problema no tiene nombre todavía. Mejor — empezamos desde cero.',
    problem: 'El problema no entra en ninguna categoría del mercado. El software disponible resuelve el 80% de algo parecido pero no lo tuyo. Terminás adaptando el negocio al software en vez de al revés.',
    solution: 'Arrancamos desde el problema, sin plantilla ni categoría previa. Si tiene solución tecnológica, la construimos. Si no, te lo decimos antes de cobrar un peso.',
    examples: ['Herramientas internas para equipos con flujos específicos', 'Plataformas de marketplace para industrias nicho', 'Sistemas de trazabilidad para productos físicos', 'Cualquier proceso que hoy se hace a mano y no debería'],
  },
]

function ServiceDetail({ s }) {
  const ref = useScrollReveal({ delay: 0.05 })
  return (
    <div ref={ref} id={s.id} className="grid-2" style={{ padding: '80px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1px' }}>{s.num}</span>
          <span style={{ border: '1px solid var(--text-sec)', color: 'var(--text-sec)', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', padding: '4px 12px', borderRadius: '100px' }}>{s.tag}</span>
        </div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: '16px' }}>{s.title}</h2>
        <p style={{ color: 'var(--green)', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 500, marginBottom: '28px', lineHeight: 1.6 }}>{s.short}</p>
        <Link to="/contacto" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'var(--green)', color: '#0D0D0D',
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.875rem',
          padding: '12px 28px', borderRadius: '6px', transition: 'box-shadow 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 28px rgba(57,255,20,0.45)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
        >Lo necesito →</Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { label: 'El problema', text: s.problem, accent: false },
          { label: 'La solución', text: s.solution, accent: true },
        ].map((block, i) => (
          <div key={i} style={{
            background: 'var(--bg-card)', borderRadius: '10px', padding: '24px',
            border: '1px solid var(--border)',
            borderLeft: block.accent ? '3px solid var(--green)' : '1px solid var(--border)',
          }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.75rem', color: block.accent ? 'var(--green)' : 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>{block.label}</p>
            <p style={{ color: 'var(--text-sec)', fontSize: '0.875rem', lineHeight: 1.7 }}>{block.text}</p>
          </div>
        ))}
        <div style={{ background: 'var(--bg-card)', borderRadius: '10px', padding: '24px', border: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>Ejemplos concretos</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {s.examples.map((ex, i) => (
              <li key={i} style={{ display: 'flex', gap: '10px', color: 'var(--text-sec)', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--green)', flexShrink: 0 }}>→</span>{ex}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Servicios() {
  usePageTitle('Servicios')
  const heroRef = useScrollReveal()
  return (
    <main style={{ paddingTop: '100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="page-pad">
        <div ref={heroRef} style={{ padding: '60px 0 40px', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>Servicios</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-1.5px', maxWidth: '700px', marginBottom: '20px' }}>Seis problemas concretos.<br />Seis maneras de resolverlos.</h1>
          <p style={{ color: 'var(--text-sec)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '520px' }}>Cada servicio nació de un problema real que vimos en algún negocio. Nada está en el catálogo para parecer más completos.</p>
        </div>
        {services.map(s => <ServiceDetail key={s.id} s={s} />)}
      </div>
    </main>
  )
}
