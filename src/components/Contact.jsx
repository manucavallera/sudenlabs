export default function Contact() {
  return (
    <section id="contacto" style={{
      padding: '140px 48px 80px',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid #1A1A1A',
    }}>
      {/* green glow bottom-center */}
      <div style={{
        position: 'absolute',
        bottom: '-20%', left: '50%',
        transform: 'translateX(-50%)',
        width: '700px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(57,255,20,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
      }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: 'var(--green)',
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          Contacto
        </p>

        <h2 style={{
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 700,
          letterSpacing: '-1.5px',
          lineHeight: 1.05,
          marginBottom: '28px',
          color: '#F5F5F5',
        }}>
          Contanos el problema.<br />
          <span style={{ color: '#888888', fontWeight: 400 }}>
            Nosotros vemos si lo podemos resolver.
          </span>
        </h2>

        <p style={{
          color: '#555',
          fontSize: '0.95rem',
          lineHeight: 1.75,
          marginBottom: '52px',
          maxWidth: '460px',
          margin: '0 auto 52px',
        }}>
          Sin formularios largos. Sin promesas vacías.<br />
          Si tiene sentido, lo decimos. Si no, también.
        </p>

        <a
          href="https://wa.me/5493434907989"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'var(--green)',
            color: '#0D0D0D',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1.05rem',
            padding: '20px 52px',
            borderRadius: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'box-shadow 0.2s, opacity 0.15s',
            letterSpacing: '-0.3px',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 0 48px rgba(57,255,20,0.5)'
            e.currentTarget.style.opacity = '0.92'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.opacity = '1'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Escribinos por WhatsApp
        </a>

        <div style={{
          marginTop: '100px',
          paddingTop: '32px',
          borderTop: '1px solid #1A1A1A',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1rem',
          }}>
            <span style={{ color: 'var(--green)' }}>S</span>
            <span style={{ color: '#333' }}>uden Labs</span>
          </span>
          <p style={{ color: '#333', fontSize: '0.78rem', fontFamily: "'Space Grotesk', sans-serif" }}>
            Córdoba & Noreste, Argentina · 2026
          </p>
          <p style={{ color: '#333', fontSize: '0.78rem', fontFamily: "'Space Grotesk', sans-serif" }}>
            Del sur del mundo. Para cualquier parte.
          </p>
        </div>
      </div>
    </section>
  )
}
