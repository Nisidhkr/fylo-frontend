import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { MagneticButton } from '../Buttons/MagneticButton'
import { ProductScene } from './ProductScene'

const rise = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <div className="hero" id="why-fylo">
      <div className="hero-copy">
        <motion.p className="eyebrow" initial="hidden" animate="show" variants={rise} transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
          A better way to work together <span />
        </motion.p>
        <motion.h1 initial="hidden" animate="show" variants={rise} transition={{ duration: 1, delay: 0.43, ease: [0.22, 1, 0.36, 1] }}>
          Your best work,<br />
          <em>closer</em> together.
        </motion.h1>
        <motion.p className="hero-description" initial="hidden" animate="show" variants={rise} transition={{ duration: 0.9, delay: 0.57, ease: [0.22, 1, 0.36, 1] }}>
          Fylo brings people, work, and ideas into one beautifully simple space—so teams can move with clarity and momentum.
        </motion.p>
        <motion.div className="hero-buttons" initial="hidden" animate="show" variants={rise} transition={{ duration: 0.8, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}>
          <MagneticButton href="#contact" variant="yellow">Start a conversation</MagneticButton>
          <a className="text-link" href="#solutions">Explore Fylo <FiArrowDown /></a>
        </motion.div>
      </div>
      <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.92, x: 45 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1.25, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
        <ProductScene />
      </motion.div>
      <p className="hero-note">Scroll to discover <FiArrowDown /></p>
    </div>
  )
}
