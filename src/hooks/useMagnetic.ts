import { useRef } from 'react'

export function useMagnetic(strength = 0.22) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)

  const move = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const target = ref.current
    if (!target || window.matchMedia('(hover: none)').matches) return
    const bounds = target.getBoundingClientRect()
    const x = (event.clientX - bounds.left - bounds.width / 2) * strength
    const y = (event.clientY - bounds.top - bounds.height / 2) * strength
    target.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  const reset = () => {
    if (ref.current) ref.current.style.transform = 'translate3d(0, 0, 0)'
  }

  return { ref, move, reset }
}
