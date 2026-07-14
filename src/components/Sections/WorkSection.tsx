import { FiArrowUpRight, FiCheck } from 'react-icons/fi'
import { MagneticButton } from '../Buttons/MagneticButton'
import { Reveal } from './Reveal'

const benefits = ['A home for every important detail', 'Less busywork, more deep work', 'A pace your whole team can keep']

export function WorkSection() {
  return (
    <section className="work-section">
      <Reveal className="work-panel">
        <div className="work-copy">
          <p className="eyebrow eyebrow--dark">Made to be used <span /></p>
          <h2>Simple at a glance.<br /><em>Powerful</em> in practice.</h2>
          <p>Fylo gives your team a single, considered home for the small things and the big picture.</p>
          <ul>{benefits.map((benefit) => <li key={benefit}><FiCheck />{benefit}</li>)}</ul>
          <MagneticButton href="#contact" variant="dark">See how it works</MagneticButton>
        </div>
        <div className="work-visual" data-parallax>
          <div className="dashboard">
            <div className="dashboard-nav"><span className="dash-mark"><i /><i /><i /></span><b>workspace</b><i /></div>
            <div className="dashboard-main">
              <div className="dash-heading"><span>Overview</span><b>July 24</b></div>
              <div className="dash-stats"><i><b>24</b><span>active tasks</span></i><i><b>84%</b><span>on track</span></i></div>
              <div className="dash-list"><span><b /><i /><em /></span><span><b /><i /><em /></span><span><b /><i /><em /></span></div>
            </div>
            <div className="dash-side"><b>Team</b><span /><span /><span /><i>+</i></div>
          </div>
          <div className="dash-note"><span>✦</span><b>Nice work!</b><small>Project on track</small></div>
        </div>
      </Reveal>
      <Reveal className="quote-block" delay={0.12}>
        <p>“Fylo has a rare ability to make a busy team feel <em>unhurried.</em> It’s the first place we look every morning.”</p>
        <div><span className="quote-avatar">A</span><span><b>Alina Rowe</b><small>Creative Director, Orbit</small></span><FiArrowUpRight /></div>
      </Reveal>
    </section>
  )
}
