import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
import { useLenis } from '../../hooks/useLenis'
import heroScan from '../../assets/hero-scan.png'
import monitor from '../../assets/service-monitor.png'
import compliance from '../../assets/service-compliance.png'
import shield from '../../assets/service-shield.png'

const ease = [0.22, 1, 0.36, 1] as const

const services = [
  { id: '01', title: 'Monitor risk & reporting', copy: 'Discover and prioritize vulnerabilities with continuously updated visibility across your attack surface.', image: monitor },
  { id: '02', title: 'Effortless compliance & reporting', copy: 'Make governance simpler with smart workflows and evidence that stays ready when you need it.', image: compliance },
  { id: '03', title: 'Continuous penetration testing', copy: 'Stay prepared with expert-led testing that evolves alongside your organization.', image: shield },
]

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.16, once: true })
  return <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : undefined} transition={{ duration: .9, delay, ease }}>{children}</motion.div>
}

function ArrowButton({ children, light = false, href = '#contact' }: { children: React.ReactNode; light?: boolean; href?: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const move = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia('(hover: none)').matches || !ref.current) return
    const box = ref.current.getBoundingClientRect()
    ref.current.style.transform = `translate3d(${(event.clientX - box.left - box.width / 2) * .12}px, ${(event.clientY - box.top - box.height / 2) * .12}px, 0)`
  }
  return <a ref={ref} href={href} className={`fyn-button ${light ? 'fyn-button--light' : ''}`} onMouseMove={move} onMouseLeave={() => { if (ref.current) ref.current.style.transform = '' }}><span className="arrow-disc"><FiArrowRight /></span>{children}</a>
}

function FynsecMark({ mono = false }: { mono?: boolean }) {
  return <span className={`fyn-mark ${mono ? 'fyn-mark--mono' : ''}`} aria-hidden="true"><i /></span>
}

function LayerMark() {
  return <span className="layer-mark" aria-hidden="true"><i /><i /><i /><b>◇</b></span>
}

function Header() {
  const scrollTo = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return <>
    <a href="#top" className="fyn-logo" aria-label="FYNSEC home"><FynsecMark /><span>FYNSEC</span></a>
    <nav className="fyn-nav" aria-label="Primary navigation">
      <a href="#services" onClick={scrollTo('#services')}>Services</a>
      <a href="#partners" onClick={scrollTo('#partners')}>Pricing</a>
      <a href="#about" onClick={scrollTo('#about')}>About</a>
      <a href="#contact" onClick={scrollTo('#contact')}>Contact us</a>
    </nav>
    <div className="fyn-actions">
      <button type="button" className="language-button">English <FiChevronDown /></button>
      <ArrowButton>Let’s Connect</ArrowButton>
    </div>
  </>
}

function Hero() {
  const [crazy, setCrazy] = useState(false)
  return <section className={`fyn-hero ${crazy ? 'is-crazy' : ''}`} id="top">
    <div className="hero-paper" />
    <Header />
    <motion.div className="hero-copy-fyn" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .1, delayChildren: .25 } } }}>
      <motion.h1 variants={{ hidden: { opacity: 0, y: 42 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 1.05, ease }}>
        <span>There is a</span>
        <span className="headline-middle"><LayerMark />Better Way</span>
        <span>to Secure.</span>
      </motion.h1>
      <motion.div variants={{ hidden: { opacity: 0, y: 19 }, show: { opacity: 1, y: 0 } }} transition={{ duration: .8, ease }} className="hero-contact"><ArrowButton href="#contact">Contact Us</ArrowButton></motion.div>
      <motion.p variants={{ hidden: { opacity: 0, y: 19 }, show: { opacity: 1, y: 0 } }} transition={{ duration: .8, ease }}>FynSec is an vulnerability scanner that finds cyber security weaknesses in your digital infrastructure, to avoid costly data breaches.</motion.p>
    </motion.div>
    <motion.div className="scan-visual" initial={{ opacity: 0, x: 45, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 1.25, delay: .36, ease }}>
      <motion.img src={heroScan} alt="Layered cybersecurity scanning lens" animate={crazy ? { rotate: [0, -4, 3, 0], y: [0, -15, 0] } : { y: [0, -10, 0] }} transition={{ duration: crazy ? 1.1 : 5.3, repeat: Infinity, ease: crazy ? 'easeInOut' : ease }} />
    </motion.div>
    <div className="crazy-toggle"><span>Crazy mode:</span><button type="button" aria-pressed={crazy} onClick={() => setCrazy(true)} className={crazy ? 'active' : ''}>On</button><button type="button" aria-pressed={!crazy} onClick={() => setCrazy(false)} className={!crazy ? 'active' : ''}>Off</button></div>
  </section>
}

const partnerNames = ['autho', 'grammarly', 'Trustly', 'Schibsted', 'Sentinel']

function Partners() {
  return <section className="partners-panel" id="partners">
    <Reveal><div className="partners-heading"><h2>Our Partners</h2><div className="partner-intro"><p>We go from day one to day two. We listen to the people who need a safer world, helping them make the right decision when it matters.</p><ArrowButton light href="#contact">Connect Us</ArrowButton></div></div></Reveal>
    <div className="partner-rule" />
    <div className="partner-list">
      {partnerNames.map((name, index) => <Reveal key={name} delay={index * .07} className="partner-cell"><PartnerGlyph index={index} /><b>{name}</b></Reveal>)}
    </div>
  </section>
}

function PartnerGlyph({ index }: { index: number }) {
  if (index === 0) return <span className="partner-shield">✦</span>
  if (index === 1) return <span className="partner-g">G</span>
  if (index === 2) return <span className="partner-t">T</span>
  return <span className="partner-dot">●</span>
}

function Services() {
  return <section className="services-panel" id="services">
    <Reveal><h2>How Can<br />Fynsec Help?</h2></Reveal>
    <div className="service-rule" />
    <Reveal className="services-intro" delay={.1}><p>With strong foundations in application security, our External Attack Surface Management platform solves common challenges AppSec and ProdSec teams face, such as managing digital transformation, securing digital products, and understanding risks during M&amp;As.</p><ArrowButton light href="#contact">Services</ArrowButton></Reveal>
    <div className="service-grid">
      {services.map((service, index) => <Reveal key={service.id} delay={index * .1} className="service-reveal"><article className="security-card"><span className="card-number">/ {service.id}</span><div className="security-card__shape"><img src={service.image} alt="" /></div><div className="security-card__content"><h3>{service.title}</h3><p>{service.copy}</p><a href="#contact" aria-label={`Learn about ${service.title}`}><FiArrowRight /></a></div></article></Reveal>)}
    </div>
  </section>
}

function Footer() {
  return <footer className="fyn-footer" id="contact"><a href="#top" className="fyn-logo"><FynsecMark /><span>FYNSEC</span></a><p>Security at the speed of innovation.</p><a href="mailto:hello@fynsec.com">hello@fynsec.com <FiArrowRight /></a></footer>
}

export function FynsecPage() {
  useLenis()
  useEffect(() => { document.documentElement.style.background = '#f5f1e9'; return () => { document.documentElement.style.background = '' } }, [])
  return <main className="fynsec-page" id="about"><Hero /><Partners /><Services /><Footer /></main>
}
