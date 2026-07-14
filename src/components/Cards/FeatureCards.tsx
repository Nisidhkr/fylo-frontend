import { FiArrowUpRight, FiLayers, FiMessageCircle, FiStar } from 'react-icons/fi'
import { Reveal } from '../Sections/Reveal'

const cards = [
  { number: '01', title: 'A clear view of what matters.', copy: 'Bring projects, people and decisions into focus—without adding another noisy tool.', icon: FiLayers, kind: 'plan' },
  { number: '02', title: 'Conversations that move work forward.', copy: 'Put every insight in context, so your team spends less time catching up.', icon: FiMessageCircle, kind: 'talk' },
  { number: '03', title: 'Momentum you can feel.', copy: 'A calmer, more intuitive way for exceptional teams to turn ideas into progress.', icon: FiStar, kind: 'move' },
]

export function FeatureCards() {
  return (
    <section className="features" id="solutions">
      <div className="section-heading">
        <Reveal><p className="eyebrow eyebrow--dark">Built for forward motion <span /></p></Reveal>
        <Reveal delay={0.08}><h2>Work should feel<br />good <em>again.</em></h2></Reveal>
        <Reveal delay={0.16}><p>Everything you need to keep the work flowing, thoughtfully brought together in one place.</p></Reveal>
      </div>
      <div className="feature-grid">
        {cards.map(({ number, title, copy, icon: Icon, kind }, index) => (
          <Reveal className="feature-card-wrap" delay={0.1 * index} key={number}>
            <article className={`feature-card feature-card--${kind}`}>
              <div className="feature-top"><span>{number}</span><Icon /></div>
              <div className="feature-visual" aria-hidden="true"><FeatureGraphic kind={kind} /></div>
              <div className="feature-content"><h3>{title}</h3><p>{copy}</p><a href="#contact" aria-label={`Learn more about ${title}`}><FiArrowUpRight /></a></div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function FeatureGraphic({ kind }: { kind: string }) {
  if (kind === 'plan') return <div className="graphic-plan"><i /><i /><i /><i /></div>
  if (kind === 'talk') return <div className="graphic-talk"><span /><span /><i /></div>
  return <div className="graphic-move"><i /><i /><i /><b>✦</b></div>
}
