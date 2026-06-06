'use client'

import { Reveal } from './reveal'

const stats = [
  { value: '+200', label: 'pacientes atendidos' },
  { value: '5 años', label: 'de experiencia' },
  { value: '98%', label: 'de satisfacción' },
]

export function About() {
  return (
    <section id="nosotros" className="bg-cream py-24 text-cream-foreground md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        {/* Left: stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="rounded-3xl border border-teal/10 bg-white/60 p-7 lg:flex lg:items-baseline lg:gap-5">
                <p className="font-serif text-5xl font-semibold text-teal lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-lg text-cream-foreground/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Right: copy */}
        <Reveal delay={0.1}>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Por qué Sava
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Recuperación que sí funciona
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream-foreground/70">
            En Sava Recovery combinamos fisioterapia basada en evidencia con un trato cercano y
            humano. No tratamos síntomas aislados: diseñamos un plan personalizado para que vuelvas
            a moverte con libertad y sin dolor.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-cream-foreground/70">
            Cada sesión es un paso medido hacia tu objetivo, acompañado por especialistas que
            entienden tu cuerpo y tu ritmo de vida.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
