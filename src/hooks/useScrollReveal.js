import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold ?? 0.15, ...options }
    )

    el.style.opacity = '0'
    el.style.transform = `translateY(${options.y ?? 32}px)`
    el.style.transition = `opacity ${options.duration ?? 0.6}s ${options.delay ?? 0}s ease, transform ${options.duration ?? 0.6}s ${options.delay ?? 0}s ease`

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
