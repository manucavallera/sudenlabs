import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

// Mensaje pre-cargado para el CTA de WhatsApp — Fraan recibe contexto del nicho
const WA_PRUEBA = 'https://wa.me/5493434907989?text=' + encodeURIComponent(
  'Hola Suden Labs! Vi la página de gestión. Quiero una demo del sistema con mis datos.'
)

// Dolores que comparten concesionaria y corralón — mismo motor, mismo problema
const dolores = [
  {
    title: 'No sabés quién te debe',
    text: 'La cuenta corriente vive en un cuaderno o en un Excel que solo entendés vos. A fin de mes adivinás cuánto te deben y cuánto entró. Plata tuya que no sabés dónde está.',
  },
  {
    title: 'El stock nunca cuadra',
    text: 'Vendés algo y nadie lo descuenta. Pensás que tenés y no tenés. Comprás de más de lo que sobra y te quedás corto de lo que sale. Capital parado o ventas perdidas.',
  },
  {
    title: 'Las cuotas se pierden',
    text: 'Vendiste en cuotas, financiaste vos. Pero quién pagó qué y a quién hay que correrle este mes lo tenés en la cabeza. Cobranzas que se atrasan porque nadie las controla.',
  },
]

// Lo que hace el sistema — el 90% sirve para los dos nichos
const features = [
  {
    num: '01', title: 'Cuenta corriente al día',
    text: 'Cada cliente con su saldo, su historial de compras y sus pagos. Cargás una venta a cuenta y queda registrada. Cobrás y se descuenta. Siempre sabés cuánto te debe cada uno.',
  },
  {
    num: '02', title: 'Stock en tiempo real',
    text: 'Cada venta descuenta del inventario sola. Sabés qué tenés sin ir a contar. Alertas cuando algo está por agotarse. Comprás con datos, no con intuición.',
  },
  {
    num: '03', title: 'Cuotas y cobranzas',
    text: 'Ventas financiadas con su plan de cuotas. El sistema te dice a quién hay que cobrarle esta semana y quién está atrasado. La cobranza deja de depender de tu memoria.',
  },
  {
    num: '04', title: 'Sacá quién te debe en 2 minutos',
    text: 'Un panel con todo: deudores ordenados, stock crítico, ventas del mes, plata que entra. Abrís el sistema y en 2 minutos sabés cómo viene el negocio. Sin abrir tres planillas.',
  },
]

// Mismo motor, dos cierres distintos según el nicho
const nichos = [
  {
    label: 'Concesionaria',
    desc: 'Stock de unidades (motos, lanchas, autos) + cuotas de clientes que financiás vos. Sabés qué unidad está disponible, quién debe cuotas y cuánto te queda por cobrar.',
  },
  {
    label: 'Corralón / Agroveterinaria',
    desc: 'Stock de materiales e insumos + cuenta corriente de clientes que compran fiado. Sabés qué te queda en depósito, quién te debe y cuánto está por vencer.',
  },
]

function Dolor({ d }) {
  const ref = useScrollReveal({ delay: 0.05 })
  return (
    <div ref={ref} style={{
      background: 'var(--bg-card)', border: '1px solid var(--border)',
      borderRadius: '12px', padding: '28px',
    }}>
      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.1rem', marginBottom: '12px' }}>{d.title}</h3>
      <p style={{ color: 'var(--text-sec)', fontSize: '0.9rem', lineHeight: 1.7 }}>{d.text}</p>
    </div>
  )
}

function Feature({ f }) {
  const ref = useScrollReveal({ delay: 0.05 })
  return (
    <div ref={ref} style={{
      background: 'var(--bg-card)', border: '1px solid var(--border)',
      borderLeft: '3px solid var(--green)', borderRadius: '10px', padding: '28px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1px' }}>{f.num}</span>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.15rem' }}>{f.title}</h3>
      </div>
      <p style={{ color: 'var(--text-sec)', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.text}</p>
    </div>
  )
}

export default function Gestion() {
  usePageTitle('Sistema de gestión para concesionarias y corralones')
  const heroRef = useScrollReveal()
  const ctaBtn = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    background: 'var(--green)', color: '#0D0D0D',
    fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.95rem',
    padding: '15px 32px', borderRadius: '6px', transition: 'box-shadow 0.2s',
  }

  return (
    <main style={{ paddingTop: '100px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} className="page-pad">

        {/* Hero */}
        <div ref={heroRef} style={{ padding: '60px 0 64px', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>Sistema de gestión</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', fontWeight: 700, letterSpacing: '-1.5px', maxWidth: '780px', marginBottom: '24px', lineHeight: 1.05 }}>
            Sabé quién te debe, qué te queda y cuánto entra este mes.
          </h1>
          <p style={{ color: 'var(--text-sec)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '600px', marginBottom: '36px' }}>
            El sistema de gestión para concesionarias y corralones. Cuenta corriente, stock y cuotas en un solo lugar. Dejá el cuaderno y el Excel que solo entendés vos.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href={WA_PRUEBA} target="_blank" rel="noopener noreferrer" style={ctaBtn}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 32px rgba(57,255,20,0.45)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >Pedí tu demo →</a>
            <a href="#demo" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              border: '1px solid var(--border-hover)', color: 'var(--text)',
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.95rem',
              padding: '15px 32px', borderRadius: '6px',
            }}>Ver cómo funciona</a>
          </div>
        </div>

        {/* Dolores */}
        <section style={{ padding: '72px 0', borderBottom: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.5px', maxWidth: '560px', marginBottom: '40px' }}>
            ¿Te suena alguno de estos?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {dolores.map((d, i) => <Dolor key={i} d={d} />)}
          </div>
        </section>

        {/* Features */}
        <section id="demo" style={{ padding: '72px 0', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>Lo que hace</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.5px', maxWidth: '620px', marginBottom: '40px' }}>
            Todo el negocio en una pantalla.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {features.map((f, i) => <Feature key={i} f={f} />)}
          </div>
        </section>

        {/* Nichos — mismo motor, dos cierres */}
        <section style={{ padding: '72px 0', borderBottom: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.5px', maxWidth: '560px', marginBottom: '16px' }}>
            Mismo sistema, tu rubro.
          </h2>
          <p style={{ color: 'var(--text-sec)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '520px', marginBottom: '40px' }}>
            Lo adaptamos a lo que vendés. El motor es el mismo: stock, cuenta corriente y cobranzas.
          </p>
          <div className="grid-2">
            {nichos.map((n, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px' }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px' }}>{n.label}</p>
                <p style={{ color: 'var(--text-sec)', fontSize: '0.95rem', lineHeight: 1.7 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prueba / precio */}
        <section style={{ padding: '72px 0', borderBottom: '1px solid var(--border)' }}>
          <div style={{
            background: 'var(--bg-card)', border: '1px solid rgba(57,255,20,0.3)',
            borderRadius: '16px', padding: 'clamp(32px, 5vw, 56px)', textAlign: 'center',
          }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: '16px' }}>
              Vélo con tus datos antes de decidir.
            </h2>
            <p style={{ color: 'var(--text-sec)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 16px' }}>
              Cargamos tus datos reales en una demo para que lo veas con tu negocio, no con un ejemplo. Sin compromiso. Suscripción mensual, sin contrato de permanencia — lo dejás cuando quieras.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '36px' }}>
              Soporte directo con quien lo construyó. No un call center.
            </p>
            <a href={WA_PRUEBA} target="_blank" rel="noopener noreferrer" style={ctaBtn}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 32px rgba(57,255,20,0.45)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >Quiero mi demo →</a>
          </div>
        </section>

        {/* Cierre */}
        <section style={{ padding: '72px 0 120px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-sec)', fontSize: '0.95rem', marginBottom: '12px' }}>
            ¿Querés ver más de lo que hacemos?
          </p>
          <Link to="/proyectos" style={{ color: 'var(--green)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.95rem' }}>
            Ver proyectos reales →
          </Link>
        </section>

      </div>
    </main>
  )
}
