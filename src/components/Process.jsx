import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  { num: '01', title: 'Entendemos el problema', desc: 'Franco habla con el cliente. Escucha antes de proponer nada. El brief describe el problema que duele, no la solución que imaginamos.' },
  { num: '02', title: 'Cerramos el alcance', desc: 'Manu analiza lo técnico. Tiempos reales, alcance definido. Sin promesas vagas, sin cambios de precio a mitad de camino.' },
  { num: '03', title: 'Construimos y mostramos', desc: 'El cliente ve código corriendo antes de comprometerse a pagar. No wireframes, no mockups. Sistema real con datos reales.' },
]

function StepRow({ s, last, delay }) {
  const ref = useScrollReveal({ delay, threshold: 0.2 })
  return (
    <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '32px', position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          width: '48px', height: '48px', border: '1px solid var(--border)', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', fontWeight: 700,
          color: 'var(--green)', flexShrink: 0,
        }}>{s.num}</div>
        {!last && <div style={{ width: '1px', flex: 1, minHeight: '60px', background: 'linear-gradient(to bottom, var(--border), transparent)', margin: '8px 0' }} />}
      </div>
      <div style={{ paddingBottom: last ? '0' : '56px', paddingTop: '10px' }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 600, marginBottom: '12px', letterSpacing: '-0.3px' }}>{s.title}</h3>
        <p style={{ color: 'var(--text-sec)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '520px' }}>{s.desc}</p>
      </div>
    </div>
  )
}

export default function Process() {
  const headRef = useScrollReveal()
  const warningRef = useScrollReveal({ delay: 0.1 })

  return (
    <section id="proceso" style={{ padding: '120px 48px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, var(--green-dim) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <div ref={headRef}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)',
            fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px',
            textTransform: 'uppercase', marginBottom: '16px',
          }}>Cómo trabajamos</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, letterSpacing: '-1px', marginBottom: '80px', maxWidth: '500px' }}>
            Antes de construir cualquier cosa, entendemos el problema.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {steps.map((s, i) => <StepRow key={i} s={s} last={i === steps.length - 1} delay={i * 0.15} />)}
        </div>

        <div ref={warningRef} style={{
          marginTop: '72px', padding: '32px 40px', background: 'var(--bg-card)',
          borderRadius: '12px', borderLeft: '3px solid var(--green)',
          display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap',
          border: '1px solid var(--border)',
        }}>
          <span style={{ color: 'var(--green)', fontSize: '1.3rem', flexShrink: 0 }}>✕</span>
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, marginBottom: '4px' }}>Lo que no hacemos</p>
            <p style={{ color: 'var(--text-sec)', fontSize: '0.875rem' }}>
              No arrancamos sin alcance definido · No prometemos fechas que no podemos sostener · No cobramos por cambios que debimos prever
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
