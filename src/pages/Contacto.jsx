import { usePageTitle } from '../hooks/usePageTitle'
import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const verticals = ['Inmobiliarias', 'Ganadería', 'Indumentaria', 'Concesionarias', 'Gastronomía', 'Salud', 'Turismo', 'Otro']

const methods = [
  {
    label: 'WhatsApp',
    desc: 'Respuesta en el día. La forma más directa.',
    href: 'https://wa.me/5493434907989',
    cta: 'Escribir ahora',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    primary: true,
  },
  {
    label: 'Email',
    desc: 'Para propuestas o detalles más extensos.',
    href: 'mailto:hola@sudenlabs.com',
    cta: 'Enviar email',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    primary: false,
  },
]

export default function Contacto() {
  usePageTitle('Contacto')
  const [form, setForm] = useState({ nombre: '', empresa: '', vertical: '', mensaje: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const heroRef = useScrollReveal()
  const formRef = useScrollReveal({ delay: 0.1 })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await fetch('https://formspree.io/f/xdavzqja', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    }).catch(() => {})
    const text = encodeURIComponent(
      `Hola Suden Labs!\n\nNombre: ${form.nombre}\nEmpresa: ${form.empresa}\nVertical: ${form.vertical}\n\nMensaje: ${form.mensaje}`
    )
    window.open(`https://wa.me/5493434907989?text=${text}`, '_blank')
    setLoading(false)
    setSent(true)
  }

  const inputStyle = {
    width: '100%', padding: '14px 18px',
    background: 'var(--bg-card)', border: '1px solid var(--border)',
    borderRadius: '8px', color: 'var(--text)',
    fontFamily: "'Inter', sans-serif", fontSize: '0.9rem',
    outline: 'none', transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block', marginBottom: '8px',
    fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500,
    fontSize: '0.82rem', color: 'var(--text-sec)',
  }

  return (
    <main style={{ paddingTop: '100px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <div ref={heroRef} style={{ padding: '60px 0 80px' }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", color: 'var(--green)',
            fontSize: '0.78rem', fontWeight: 600, letterSpacing: '3px',
            textTransform: 'uppercase', marginBottom: '20px',
          }}>Contacto</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-1.5px', maxWidth: '660px', marginBottom: '20px', lineHeight: 1.05 }}>
            Contanos el problema.<br />
            <span style={{ color: 'var(--text-sec)', fontWeight: 400 }}>
              Si lo podemos resolver, te decimos cómo y cuánto. Si no, también.
            </span>
          </h1>
          <p style={{ color: 'var(--text-sec)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '480px' }}>
            Sin formularios corporativos. Describís el problema como lo vivís en el día a día — nosotros evaluamos si tiene solución tecnológica.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '64px', paddingBottom: '120px', alignItems: 'start' }}>

          {/* Left — contact methods */}
          <div>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.78rem', fontWeight: 600,
              color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px',
            }}>Canales de contacto</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              {methods.map((m, i) => (
                <a key={i} href={m.href} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'flex-start', gap: '20px',
                  background: 'var(--bg-card)', border: '1px solid',
                  borderColor: m.primary ? 'rgba(57,255,20,0.3)' : 'var(--border)',
                  borderRadius: '12px', padding: '24px',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--green)'
                    if (m.primary) e.currentTarget.style.boxShadow = '0 0 20px rgba(57,255,20,0.15)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = m.primary ? 'rgba(57,255,20,0.3)' : 'var(--border)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ color: m.primary ? 'var(--green)' : 'var(--text-sec)', flexShrink: 0, marginTop: '2px' }}>
                    {m.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, marginBottom: '4px' }}>{m.label}</p>
                    <p style={{ color: 'var(--text-sec)', fontSize: '0.85rem', marginBottom: '12px' }}>{m.desc}</p>
                    <span style={{ color: 'var(--green)', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', fontWeight: 600 }}>
                      {m.cta} →
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px' }}>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.78rem', fontWeight: 600,
                color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px',
              }}>Suden Labs</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['📍 Córdoba, Argentina', '📍 Entre Ríos, Argentina', '🌎 Operación 100% remota', '⏱ Respuesta en el día hábil'].map((item, i) => (
                  <p key={i} style={{ color: 'var(--text-sec)', fontSize: '0.875rem' }}>{item}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div ref={formRef}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '48px' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: '64px', height: '64px', background: 'rgba(57,255,20,0.1)', border: '2px solid var(--green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '1.5rem' }}>✓</div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.3rem', marginBottom: '12px' }}>Mensaje enviado</h3>
                  <p style={{ color: 'var(--text-sec)', fontSize: '0.9rem' }}>Te abrimos el chat de WhatsApp. Si no se abrió, escribinos directamente.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px' }}>Describí el problema</p>
                    <p style={{ color: 'var(--text-sec)', fontSize: '0.85rem' }}>Sin tecnicismos. Contalo como lo vivís.</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={labelStyle}>Nombre *</label>
                      <input name="nombre" required value={form.nombre} onChange={handleChange}
                        placeholder="Tu nombre" style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--green)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Empresa / negocio</label>
                      <input name="empresa" value={form.empresa} onChange={handleChange}
                        placeholder="Opcional" style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--green)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>¿En qué industria operás?</label>
                    <select name="vertical" value={form.vertical} onChange={handleChange} style={{ ...inputStyle }}>
                      <option value="">Seleccioná una opción</option>
                      {verticals.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>¿Cuál es el problema o qué necesitás? *</label>
                    <textarea name="mensaje" required value={form.mensaje} onChange={handleChange}
                      placeholder="Ej: 'Manejo el stock en Excel pero cuando hay más de 3 personas editando a la vez se rompe todo. Necesito algo más ordenado para mi equipo de 5 personas.'"
                      rows={5} style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                      onFocus={e => e.target.style.borderColor = 'var(--green)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  <button type="submit" disabled={loading} style={{
                    background: 'var(--green)', color: '#0D0D0D',
                    fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1rem',
                    padding: '16px', borderRadius: '8px', border: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    transition: 'box-shadow 0.2s, opacity 0.15s',
                    opacity: loading ? 0.7 : 1,
                  }}
                    onMouseEnter={e => { if (!loading) e.currentTarget.style.boxShadow = '0 0 32px rgba(57,255,20,0.45)' }}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                  >
                    {loading ? 'Enviando...' : 'Enviar →'}
                  </button>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', textAlign: 'center' }}>
                    Mandamos el mensaje por email y abrimos WhatsApp con todo pre-cargado. Respondemos en el día.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
