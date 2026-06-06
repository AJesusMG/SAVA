'use client'

import { Reveal } from './reveal'

type Testimonial = {
  quote: string
  name: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Llegué con una lesión de rodilla que arrastraba meses. En seis semanas volví a correr. El acompañamiento fue impecable.',
    name: 'Mariana López',
    role: 'Corredora',
    avatar: 'https://picsum.photos/id/1027/120/120',
  },
  {
    quote:
      'El mejor masaje terapéutico que he recibido en Querétaro. Salí como nuevo y sin la contractura que tenía hace semanas.',
    name: 'Carlos Méndez',
    role: 'Oficinista',
    avatar: 'https://picsum.photos/id/1005/120/120',
  },
  {
    quote:
      'Profesionales de verdad. Me explicaron cada paso de mi rehabilitación y me sentí acompañada en todo momento.',
    name: 'Daniela Ruiz',
    role: 'Maestra de yoga',
    avatar: 'https://picsum.photos/id/1062/120/120',
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="relative overflow-hidden bg-teal-deep py-24 text-cream md:py-32">
      {/* decorative quote mark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-2 select-none font-serif text-[16rem] leading-none text-gold/10 md:left-10 md:text-[22rem]"
      >
        &ldquo;
      </span>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Testimonios
          </span>
          <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Historias de quienes volvieron a moverse
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className={i === 1 ? 'md:mt-12' : ''}>
              <figure className="flex h-full flex-col rounded-3xl border border-cream/10 bg-cream/[0.04] p-7">
                <blockquote className="flex-1 text-lg leading-relaxed text-cream/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar || '/placeholder.svg'}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover"
                    crossOrigin="anonymous"
                  />
                  <div>
                    <p className="font-medium text-cream">{t.name}</p>
                    <p className="text-sm text-cream/50">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
