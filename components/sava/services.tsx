'use client'

import {
  Activity,
  HandHeart,
  Dumbbell,
  Bike,
  Zap,
  Bandage,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from './reveal'

type Accent = 'gold' | 'pink'

type Service = {
  icon: LucideIcon
  name: string
  desc: string
  accent: Accent
}

const services: Service[] = [
  {
    icon: Activity,
    name: 'Fisioterapia',
    desc: 'Evaluación y tratamiento de lesiones para recuperar tu movilidad.',
    accent: 'gold',
  },
  {
    icon: HandHeart,
    name: 'Masaje terapéutico',
    desc: 'Alivio profundo de tensión muscular y contracturas.',
    accent: 'pink',
  },
  {
    icon: Dumbbell,
    name: 'Rehabilitación',
    desc: 'Programas guiados para volver a tu actividad sin dolor.',
    accent: 'gold',
  },
  {
    icon: Bike,
    name: 'Masaje deportivo',
    desc: 'Optimiza tu rendimiento y previene lesiones del deporte.',
    accent: 'pink',
  },
  {
    icon: Zap,
    name: 'Electroterapia',
    desc: 'Tecnología que acelera la recuperación de tejidos.',
    accent: 'gold',
  },
  {
    icon: Bandage,
    name: 'Vendaje funcional',
    desc: 'Soporte articular para proteger y estabilizar la zona.',
    accent: 'pink',
  },
]

const accentStyles: Record<
  Accent,
  { card: string; tile: string }
> = {
  gold: {
    card: 'hover:border-gold/50 hover:shadow-gold/40',
    tile: 'bg-gold/15 text-gold group-hover:bg-gold group-hover:text-teal-deep',
  },
  pink: {
    card: 'hover:border-pink/50 hover:shadow-pink/40',
    tile: 'bg-pink/15 text-pink-soft group-hover:bg-pink group-hover:text-teal-deep',
  },
}

export function Services() {
  return (
    <section id="servicios" className="bg-teal py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Servicios
          </span>
          <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Lo que hacemos
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.06}>
              <article
                className={`group h-full rounded-3xl border border-cream/10 bg-cream/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-cream/[0.06] hover:shadow-[0_0_40px_-12px] ${accentStyles[service.accent].card}`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${accentStyles[service.accent].tile}`}
                >
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-medium">{service.name}</h3>
                <p className="mt-2 leading-relaxed text-cream/60">{service.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
