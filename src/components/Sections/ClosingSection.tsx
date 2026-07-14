import { FiArrowUpRight } from 'react-icons/fi'
import { MagneticButton } from '../Buttons/MagneticButton'
import { Reveal } from './Reveal'

export function ClosingSection() {
  return (
    <>
      <section className="closing" id="contact">
        <Reveal><p className="eyebrow">The future looks focused <span /></p></Reveal>
        <Reveal delay={0.08}><h2>Make room for your<br /><em>best</em> work.</h2></Reveal>
        <Reveal delay={0.16}><p>Join the teams building a more considered way of working, one great day at a time.</p></Reveal>
        <Reveal delay={0.24}><MagneticButton href="mailto:hello@fylo.com" variant="yellow">Let's work together</MagneticButton></Reveal>
      </section>
      <footer>
        <a className="brand brand--footer" href="#top"><span className="brand-mark"><i /><i /><i /></span><span>fylo</span></a>
        <p>Better work, closer together.</p>
        <div><a href="#top">Instagram <FiArrowUpRight /></a><a href="#top">LinkedIn <FiArrowUpRight /></a><span>© {new Date().getFullYear()} Fylo</span></div>
      </footer>
    </>
  )
}
