import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

const pasos = [
  {
    num: '01',
    title: 'Bajamos a tierra tu idea (sin cobrarte un peso)',
    desc: 'Arrancamos con una llamada de 30 minutos. No queremos saber tu "industria" ni tu "vertical". Queremos saber qué problema concreto te está haciendo perder tiempo o plata hoy. Si vemos que lo que necesitás no tiene sentido resolverlo con código, te lo decimos en esa misma llamada y te sugerimos una alternativa. No vendemos humo.',
  },
  {
    num: '02',
    title: 'Primero, la columna vertebral. Después, los adornos.',
    desc: 'No arrancamos haciendo pantallas bonitas. Arrancamos mapeando la lógica más compleja de tu sistema: cómo se conectan tus datos, qué reglas de negocio hay que respetar sí o sí, y qué pasa si algo falla. En la primera semana de laburo definimos el alcance final con un presupuesto y un cronograma reales, desglosados en entregas de 2 semanas. Pero además, nos comprometemos a que en esa primera etapa ya tengas en pantalla el módulo más riesgoso de tu proyecto funcionando (aunque sea feo). Si ese módulo central sale bien, el resto del proyecto es pura escalera. Si sale mal, lo sabemos antes de gastar el 80% del presupuesto. Así vos decidís si seguimos o si pivotamos, sin haberte dejado un agujero en el bolsillo.',
  },
  {
    num: '03',
    title: 'Iteramos cada 2 semanas (y vos ves todo)',
    desc: 'Trabajamos con sprints de 14 días. Al final de cada sprint subimos los avances a un servidor que vos podés ver. No esperamos al final del proyecto para mostrarte algo. Si algo no te gusta, lo cambiamos en la siguiente ronda. Así no hay sorpresas, y el producto final es exactamente lo que imaginaste (y no lo que imaginó un analista funcional).',
  },
  {
    num: '04',
    title: 'Te entregamos las llaves (y el código)',
    desc: 'El último sprint no es "pasarte un usuario y una contraseña". Te damos una reunión de traspaso donde te explicamos cómo funciona todo por dentro. Y lo más importante: el repositorio de código es tuyo desde el día 1. Si mañana querés irte con otro equipo, te llevás todo. No tenemos clientes secuestrados.',
  },
]

export default function Metodo() {
  usePageTitle('Método')
  const heroRef = useScrollReveal()
  const pasosRef = useScrollReveal({ delay: 0.05 })
  const ventajaRef = useScrollReveal({ delay: 0.05 })
  const ctaRef = useScrollReveal({ delay: 0.05 })

  return (
    <main style={{ paddingTop: '100px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} className="page-pad">

        {/* Hero */}
        <div ref={heroRef} style={{ padding: '60px 0 80px', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>Método</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-1.5px', maxWidth: '760px', marginBottom: '24px' }}>
            Somos un laboratorio.<br /><span style={{ color: 'var(--text-sec)', fontWeight: 400 }}>No una agencia. La diferencia es el método.</span>
          </h1>
          <p style={{ color: 'var(--text-sec)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '620px' }}>
            No tenemos capas de gerentes, ni equipos de ventas, ni departamentos de "customer success". Somos Manu y Franco. Los mismos que te responden el mail, escriben el código y se aseguran de que todo funcione a las 3 de la mañana si hace falta.
          </p>
        </div>

        {/* Los 4 pasos */}
        <div style={{ padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '48px' }}>Los 4 pasos</p>
          <div ref={pasosRef} style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'var(--border)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
            {pasos.map((p, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', padding: '36px', display: 'flex', gap: '28px', alignItems: 'flex-start', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-card-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-card)'}
              >
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.6rem', color: 'var(--green)', lineHeight: 1, flexShrink: 0, minWidth: '48px' }}>{p.num}</span>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.2rem', marginBottom: '12px', letterSpacing: '-0.3px' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-sec)', fontSize: '0.925rem', lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* La ventaja de ser 2 */}
        <div style={{ padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '48px' }}>La ventaja de ser 2</p>
          <div ref={ventajaRef} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '40px', borderLeft: '3px solid var(--green)' }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', marginBottom: '24px', letterSpacing: '-0.5px', maxWidth: '640px' }}>
              ¿Por qué esto es mejor que trabajar con una agencia de 20 personas?
            </h3>
            <p style={{ color: 'var(--text-sec)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '680px', marginBottom: '20px' }}>
              Porque cuando mandás un mensaje, en 20 minutos tenés una respuesta (no en 48 horas). Porque las decisiones técnicas no pasan por un comité. Porque cuando hablás con nosotros, estás hablando con el que va a escribir cada línea de código.
            </p>
            <p style={{ color: 'var(--text-sec)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '680px' }}>
              ¿Somos más lentos que una agencia con 5 developers? Sí. Pero nos tomamos el tiempo de hacer las cosas bien, sin atajos, y sin tercerizar tu proyecto en un trainee.
            </p>
          </div>
        </div>

        {/* CTA final */}
        <div ref={ctaRef} style={{ padding: '80px 0 120px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', fontWeight: 700, letterSpacing: '-1px', maxWidth: '680px', marginBottom: '20px' }}>
            ¿Todavía con dudas?
          </h2>
          <p style={{ color: 'var(--text-sec)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '600px', marginBottom: '40px' }}>
            No te pedimos que confíes en nuestra palabra. Agendá 15 minutos, mostranos tu problema, y te damos una devolución técnica sin compromiso. Si te sirve, arrancamos. Si no, te quedás con un diagnóstico gratis.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contacto" style={{ background: 'var(--green)', color: '#0D0D0D', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '8px' }}>Agendar 15 min →</Link>
            <Link to="/proyectos" style={{ border: '1px solid var(--border)', color: 'var(--text-sec)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: '0.95rem', padding: '14px 32px', borderRadius: '8px' }}>Ver los proyectos →</Link>
          </div>
        </div>

      </div>
    </main>
  )
}
