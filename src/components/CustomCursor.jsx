import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const tick = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      raf.current = requestAnimationFrame(tick)
    }

    const onEnter = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) setHovering(true)
    }
    const onLeave = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) setHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      {/* dot — snaps instantly */}
      <div ref={dotRef} style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '6px', height: '6px',
        background: 'var(--green)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        marginLeft: '-3px', marginTop: '-3px',
        transition: 'opacity 0.2s',
        willChange: 'transform',
      }} />
      {/* ring — lags behind */}
      <div ref={ringRef} style={{
        position: 'fixed',
        top: 0, left: 0,
        width: hovering ? '48px' : '32px',
        height: hovering ? '48px' : '32px',
        border: `1.5px solid ${hovering ? 'var(--green)' : 'rgba(57,255,20,0.4)'}`,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9998,
        marginLeft: hovering ? '-24px' : '-16px',
        marginTop: hovering ? '-24px' : '-16px',
        transition: 'width 0.2s, height 0.2s, margin 0.2s, border-color 0.2s',
        willChange: 'transform',
        mixBlendMode: 'screen',
      }} />
    </>
  )
}
