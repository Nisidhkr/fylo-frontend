import { motion } from 'framer-motion'
import { FiChevronDown, FiMenu } from 'react-icons/fi'
import { MagneticButton } from '../Buttons/MagneticButton'

const navItems = ['Solutions', 'Why Fylo', 'Resources']

export function Navbar() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <motion.header
      className="nav-shell"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <button className="brand" type="button" onClick={scrollToTop} aria-label="Fylo home">
        <span className="brand-mark"><i /><i /><i /></span>
        <span>fylo</span>
      </button>
      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map((item) => <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={item}>{item}<FiChevronDown /></a>)}
      </nav>
      <div className="nav-actions">
        <button className="language" type="button" aria-label="Change language">EN <FiChevronDown /></button>
        <MagneticButton href="#contact" className="nav-cta" arrow={false}>Let's talk</MagneticButton>
        <button className="menu-button" type="button" aria-label="Open menu"><FiMenu /></button>
      </div>
    </motion.header>
  )
}
