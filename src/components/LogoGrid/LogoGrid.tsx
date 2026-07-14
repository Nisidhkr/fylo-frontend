import { Reveal } from '../Sections/Reveal'

const logos = [
  { name: 'orbit', glyph: 'O' },
  { name: 'NOMAD', glyph: 'N' },
  { name: 'mori', glyph: 'm' },
  { name: 'arc', glyph: 'a' },
  { name: 'TALENT', glyph: 'T' },
]

export function LogoGrid() {
  return (
    <section className="logo-section" id="resources">
      <Reveal className="logo-label"><span />Trusted by teams doing their best work<span /></Reveal>
      <div className="logo-row">
        {logos.map((logo, index) => (
          <Reveal key={logo.name} delay={0.08 * index} className="logo-cell">
            <span className={`logo-glyph logo-glyph--${index}`}>{logo.glyph}</span>{logo.name}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
