import { Link } from 'react-router-dom'

const cols = [
  {
    title: 'Páginas',
    links: [
      { to: '/', label: 'Inicio' },
      { to: '/servicios', label: 'Servicios' },
      { to: '/casos', label: 'Casos' },
      { to: '/nosotros', label: 'Nosotros' },
      { to: '/contacto', label: 'Contacto' },
    ],
  },
  {
    title: 'Servicios',
    links: [
      { to: '/servicios#automatizacion', label: 'Automatización con IA' },
      { to: '/servicios#apps', label: 'Apps de gestión' },
      { to: '/servicios#chatbots', label: 'Chatbots y agentes' },
      { to: '/servicios#leads', label: 'Calificación de leads' },
      { to: '/servicios#dashboards', label: 'Dashboards operativos' },
    ],
  },
  {
    title: 'Verticales activos',
    links: [
      { to: '/casos#inmobiliarias', label: 'Inmobiliarias' },
      { to: '/casos#ganaderia', label: 'Ganadería' },
      { to: '/casos#indumentaria', label: 'Indumentaria' },
      { to: '/casos#concesionarias', label: 'Concesionarias' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '80px 48px 48px',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '64px',
          flexWrap: 'wrap',
        }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.5px',
              display: 'inline-block', marginBottom: '20px',
            }}>
              <span style={{ color: 'var(--green)' }}>S</span>
              <span style={{ color: 'var(--text-sec)' }}>uden Labs</span>
            </Link>
            <p style={{ color: 'var(--text-sec)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '280px', marginBottom: '24px' }}>
              Laboratorio de productos tecnológicos. Del sur del mundo, para cualquier parte.
            </p>
            <a
              href="https://wa.me/5493434907989"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                color: 'var(--green)',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.875rem', fontWeight: 600,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp directo
            </a>
          </div>

          {cols.map((col, i) => (
            <div key={i}>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.72rem', fontWeight: 700,
                color: 'var(--text-muted)',
                letterSpacing: '2px', textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                {col.title}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map((l, j) => (
                  <Link key={j} to={l.to} style={{
                    color: 'var(--text-sec)', fontSize: '0.875rem',
                    transition: 'color 0.15s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-sec)'}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '32px',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '16px',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: "'Space Grotesk', sans-serif" }}>
            © 2026 Suden Labs · Córdoba & Noreste, Argentina
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: "'Space Grotesk', sans-serif" }}>
            Franco · Manu
          </p>
        </div>
      </div>
    </footer>
  )
}
