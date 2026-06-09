import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

const virtudes = [
  { title: 'Producto antes que marca', desc: 'Tres apps en producción antes de tener nombre. Cada conversación de venta tiene respaldo concreto, no promesas.' },
  { title: 'El problema primero', desc: 'No ofrecemos soluciones buscando un problema donde encajar. Escuchamos el problema y después decidimos si tiene solución tecnológica.' },
  { title: 'Sin humo', desc: 'Si algo no lo podemos hacer, lo decimos antes de arrancar. Si el proyecto no tiene sentido, también. El tiempo del cliente vale.' },
  { title: 'Tolerancia al proceso', desc: 'Entre el primer mensaje y el producto en producción hay semanas difíciles, cambios de dirección y bugs a las 11 de la noche. Eso no nos rompe.' },
  { title: 'Federales de verdad', desc: 'No somos una agencia de Buenos Aires que "entiende el interior". Vivimos acá. Nuestros clientes son de acá. Eso se nota.' },
  { title: 'Sin egos', desc: 'Lo que Franco aprende del cliente lo usa Manu en el código. Lo que Manu descubre en la build lo lleva Franco a la siguiente conversación.' },
]

const team = [
  { name: 'Franco', role: 'Product Analyst · Sales Lead', bio: 'Primera conversación con el cliente. No vende soluciones — escucha problemas. Su interés en finanzas y mercados le da perspectiva concreta sobre el costo real de los procesos manuales: sabe cuánto pierde un negocio por no tener el sistema correcto.', ubicacion: 'Córdoba, Argentina', highlight: 'Primero entiende el problema. Después habla de la solución.' },
  { name: 'Manu', role: 'Desarrollador Full-stack · Arquitecto técnico', bio: 'Construye el producto. Tiene tres aplicaciones en producción para clientes reales — ganadería, indumentaria, concesionaria — antes de que Suden Labs tuviera nombre. No hay demo que mostrar porque todo lo que hizo corre en producción hoy.', ubicacion: 'Entre Ríos, Argentina', highlight: 'No construye demos. Construye productos.' },
]

const manifesto = [
  'No somos una agencia. Somos un laboratorio.',
  'Laboratorio significa construir antes de prometer.',
  'El valor está en el producto funcionando, no en la propuesta bien presentada.',
  'Cada proyecto bien hecho es el argumento para el siguiente. Nunca al revés.',
  'Dos personas del interior del país construyendo tecnología que antes solo llegaba a las empresas grandes.',
]

export default function Nosotros() {
  usePageTitle('Nosotros')
  const heroRef = useScrollReveal()
  const teamRef = useScrollReveal({ delay: 0.05 })
  const virtudesRef = useScrollReveal({ delay: 0.05 })
  const manifestoRef = useScrollReveal({ delay: 0.05 })

  return (
    <main style={{ paddingTop: '100px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} className="page-pad">

        <div ref={heroRef} style={{ padding: '60px 0 80px', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>Nosotros</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-1.5px', maxWidth: '700px', marginBottom: '24px' }}>
            Dos personas, del interior.<br /><span style={{ color: 'var(--text-sec)', fontWeight: 400 }}>Sin agencia, sin humo.</span>
          </h1>
          <p style={{ color: 'var(--text-sec)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '560px' }}>
            Franco de Córdoba, Manu de Entre Ríos. Construimos tecnología para negocios reales que vemos de cerca. No somos una agencia ni una consultora — somos un laboratorio donde el producto va primero.
          </p>
        </div>

        {/* Team */}
        <div style={{ padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '48px' }}>El equipo</p>
          <div ref={teamRef} className="grid-2">
            {team.map((p, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '40px', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--green)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--bg-alt)', border: '2px solid var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: 'var(--green)', marginBottom: '20px' }}>{p.name[0]}</div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.3rem', marginBottom: '6px' }}>{p.name}</h3>
                <p style={{ color: 'var(--green)', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', fontWeight: 600, marginBottom: '20px' }}>{p.role}</p>
                <p style={{ color: 'var(--text-sec)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '20px' }}>{p.bio}</p>
                <div style={{ padding: '16px 20px', background: 'var(--bg-alt)', borderRadius: '8px', borderLeft: '3px solid var(--green)', marginBottom: '16px' }}>
                  <p style={{ color: 'var(--text)', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.875rem', fontWeight: 500, fontStyle: 'italic' }}>"{p.highlight}"</p>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>📍 {p.ubicacion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Virtudes */}
        <div style={{ padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '48px' }}>Cómo operamos</p>
          <div ref={virtudesRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2px', background: 'var(--border)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
            {virtudes.map((v, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', padding: '28px', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-card-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-card)'}
              >
                <div style={{ width: '6px', height: '6px', background: 'var(--green)', borderRadius: '50%', marginBottom: '14px' }} />
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '1rem', marginBottom: '10px' }}>{v.title}</h4>
                <p style={{ color: 'var(--text-sec)', fontSize: '0.875rem', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Manifiesto */}
        <div style={{ padding: '80px 0 120px' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '48px' }}>Manifiesto</p>
          <div ref={manifestoRef}>
            {manifesto.map((line, i) => (
              <p key={i} style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: i === 0 ? 700 : 400,
                color: i === 0 ? 'var(--text)' : 'var(--text-sec)',
                padding: '24px 0', borderBottom: i < manifesto.length - 1 ? '1px solid var(--border)' : 'none',
                letterSpacing: '-0.3px', lineHeight: 1.3, transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = i === 0 ? 'var(--text)' : 'var(--text-sec)'}
              >{line}</p>
            ))}
          </div>
          <div style={{ marginTop: '56px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contacto" style={{ background: 'var(--green)', color: '#0D0D0D', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '8px' }}>Trabajar con nosotros →</Link>
            <Link to="/proyectos" style={{ border: '1px solid var(--border)', color: 'var(--text-sec)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '8px' }}>Ver los proyectos →</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
