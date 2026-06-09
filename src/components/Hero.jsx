import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useIsMobile } from '../hooks/useIsMobile'

function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const isNumeric = /^\d+$/.test(String(target))
    if (!isNumeric) { setValue(target); return }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const end = parseInt(target, 10)
        const startTime = performance.now()
        const tick = (now) => {
          const p = Math.min((now - startTime) / duration, 1)
          setValue(Math.floor(p * end))
          if (p < 1) requestAnimationFrame(tick)
          else setValue(end)
        }
        requestAnimationFrame(tick)
        observer.unobserve(el)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])
  return { ref, value }
}

function MagneticButton({ to, href, children, primary }) {
  const btnRef = useRef(null)
  const isMobile = useIsMobile()

  const onMouseMove = (e) => {
    if (isMobile) return
    const btn = btnRef.current
    const rect = btn.getBoundingClientRect()
    const dx = (e.clientX - rect.left - rect.width / 2) * 0.22
    const dy = (e.clientY - rect.top - rect.height / 2) * 0.22
    btn.style.transform = `translate(${dx}px, ${dy}px)`
    btn.style.transition = 'transform 0.1s ease'
  }
  const onMouseLeave = () => {
    if (isMobile) return
    btnRef.current.style.transform = 'translate(0,0)'
    btnRef.current.style.transition = 'transform 0.4s ease, box-shadow 0.2s'
    if (primary) btnRef.current.style.boxShadow = 'none'
  }

  const baseStyle = {
    background: primary ? 'var(--green)' : 'transparent',
    color: primary ? '#0D0D0D' : 'var(--text-sec)',
    border: primary ? 'none' : '1px solid var(--border)',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: primary ? 700 : 500,
    fontSize: '0.95rem',
    padding: isMobile ? '14px 28px' : '16px 36px',
    borderRadius: '8px',
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    willChange: 'transform',
    transition: 'transform 0.1s ease, box-shadow 0.2s',
    flex: isMobile ? '1' : 'none',
    justifyContent: isMobile ? 'center' : 'flex-start',
  }

  if (to) return <Link ref={btnRef} to={to} style={baseStyle} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} onMouseEnter={() => { if (primary && !isMobile) btnRef.current.style.boxShadow = '0 0 40px rgba(57,255,20,0.5)' }}>{children}</Link>
  return <a ref={btnRef} href={href} target="_blank" rel="noopener noreferrer" style={baseStyle} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} onMouseEnter={() => { if (primary && !isMobile) btnRef.current.style.boxShadow = '0 0 40px rgba(57,255,20,0.5)' }}>{children}</a>
}

function StatItem({ value, label }) {
  const { ref, value: count } = useCountUp(value)
  return (
    <div ref={ref} style={{ flex: 1, minWidth: '130px', paddingBottom: '8px' }}>
      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', fontWeight: 700, color: 'var(--green)', lineHeight: 1, marginBottom: '6px' }}>
        {value === '∞' ? '∞' : count}
      </p>
      <p style={{ color: 'var(--text-sec)', fontSize: '0.8rem' }}>{label}</p>
    </div>
  )
}

const stats = [
  { value: '3', label: 'apps corriendo en producción hoy' },
  { value: '4', label: 'industrias distintas, mismo resultado' },
  { value: '∞', label: 'negocios sin software específico' },
]

export default function Hero() {
  const isMobile = useIsMobile()
  const headRef = useScrollReveal({ delay: 0.1 })
  const subRef = useScrollReveal({ delay: 0.25 })
  const ctaRef = useScrollReveal({ delay: 0.4 })
  const statsRef = useScrollReveal({ delay: 0.55 })

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center',
      padding: isMobile ? '120px 20px 60px' : '140px 48px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, var(--dot) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.7, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, var(--green-dim) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '7px', height: '7px', background: 'var(--green)', borderRadius: '50%', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite', flexShrink: 0 }} />
          {isMobile ? 'Laboratorio de Productos Tecnológicos' : 'Laboratorio de Productos Tecnológicos · Córdoba, Argentina'}
        </p>

        <h1 ref={headRef} style={{ fontSize: isMobile ? '2.4rem' : 'clamp(2.8rem, 6.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '28px', maxWidth: '820px' }}>
          No somos una agencia.{' '}
          <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--stroke)' }}>Somos el laboratorio</span>{' '}
          que resuelve el problema.
        </h1>

        <p ref={subRef} style={{ fontSize: '1rem', color: 'var(--text-sec)', maxWidth: '520px', lineHeight: 1.75, marginBottom: '40px' }}>
          Dos personas. Tres productos en producción antes de tener nombre. Si existe la necesidad y la tecnología puede resolverla, lo construimos.
        </p>

        <div ref={ctaRef} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '60px' }}>
          <MagneticButton href="https://wa.me/5493434907989" primary>Contanos tu problema <span>→</span></MagneticButton>
          <MagneticButton to="/servicios">Ver qué construimos</MagneticButton>
        </div>

        <div ref={statsRef} style={{ display: 'flex', gap: '0', borderTop: '1px solid var(--border)', paddingTop: '36px', flexWrap: 'wrap' }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              display: 'flex', flex: 1, minWidth: isMobile ? '100%' : '130px',
              paddingRight: (!isMobile && i < stats.length - 1) ? '32px' : '0',
              borderRight: (!isMobile && i < stats.length - 1) ? '1px solid var(--border)' : 'none',
              marginRight: (!isMobile && i < stats.length - 1) ? '32px' : '0',
              borderBottom: (isMobile && i < stats.length - 1) ? '1px solid var(--border)' : 'none',
              paddingBottom: isMobile ? '20px' : '0',
              marginBottom: isMobile ? '20px' : '0',
            }}>
              <StatItem value={s.value} label={s.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
