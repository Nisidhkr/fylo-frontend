import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { useMagnetic } from '../../hooks/useMagnetic'

type MagneticButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'light' | 'dark' | 'yellow'
  className?: string
  arrow?: boolean
}

export function MagneticButton({
  children,
  href,
  variant = 'light',
  className = '',
  arrow = true,
}: MagneticButtonProps) {
  const { ref, move, reset } = useMagnetic()
  const classes = `magnetic-button magnetic-button--${variant} ${className}`
  const contents = <><span>{children}</span>{arrow && <FiArrowUpRight aria-hidden="true" />}</>

  if (href) {
    return (
      <motion.a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} className={classes} onMouseMove={move} onMouseLeave={reset} whileTap={{ scale: 0.97 }}>
        {contents}
      </motion.a>
    )
  }

  return (
    <motion.button ref={ref as React.RefObject<HTMLButtonElement>} type="button" className={classes} onMouseMove={move} onMouseLeave={reset} whileTap={{ scale: 0.97 }}>
      {contents}
    </motion.button>
  )
}
