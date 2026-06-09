import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: `${progress}%`,
      height: '2px',
      background: 'var(--green)',
      zIndex: 200,
      boxShadow: '0 0 8px rgba(57,255,20,0.6)',
      transition: 'width 0.05s linear',
    }} />
  )
}
