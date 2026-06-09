import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/nosotros', label: 'Nosotros' },
]

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location.pathname])

  const isDark = theme === 'dark'
  const bgColor = scrolled || mobileOpen
    ? isDark ? 'rgba(13,13,13,0.94)' : 'rgba(245,245,245,0.94)'
    : 'transparent'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 48px', height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: bgColor,
        backdropFilter: scrolled || mobileOpen ? 'blur(16px)' : 'none',
        borderBottom: scrolled || mobileOpen ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.jpg" alt="Suden Labs" style={{ height: '36px', width: 'auto', display: 'block' }} />
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="desktop-nav">
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                color: location.pathname === l.to ? 'var(--text)' : 'var(--text-sec)',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.875rem', fontWeight: 500,
                borderBottom: location.pathname === l.to ? '1px solid var(--green)' : '1px solid transparent',
                paddingBottom: '2px',
                transition: 'color 0.15s, border-color 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => { if (location.pathname !== l.to) e.currentTarget.style.color = 'var(--text-sec)' }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Theme toggle */}
          <button onClick={toggle} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            color: 'var(--text-sec)',
            width: '36px', height: '36px',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'border-color 0.2s, color 0.2s',
            flexShrink: 0,
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-sec)' }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <Link to="/contacto" style={{
            background: 'var(--green)', color: '#0D0D0D',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: '0.875rem',
            padding: '10px 24px', borderRadius: '6px',
            transition: 'opacity 0.15s, box-shadow 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(57,255,20,0.45)'; e.currentTarget.style.opacity = '0.9' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.opacity = '1' }}
          >
            Hablemos
          </Link>

          {/* Mobile menu toggle */}
          <button onClick={() => setMobileOpen(o => !o)} style={{
            background: 'none', color: 'var(--text)',
            display: 'none', alignItems: 'center', justifyContent: 'center',
            padding: '4px',
          }} className="mobile-menu-btn">
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0, zIndex: 99,
          background: isDark ? 'rgba(13,13,13,0.97)' : 'rgba(245,245,245,0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border)',
          padding: '24px 48px 32px',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              color: location.pathname === l.to ? 'var(--green)' : 'var(--text)',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.25rem', fontWeight: 600,
            }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contacto" style={{
            color: 'var(--green)',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.25rem', fontWeight: 700, marginTop: '8px',
          }}>
            Hablemos →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
