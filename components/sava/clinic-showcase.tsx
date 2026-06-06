'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { Reveal } from './reveal'

type Panel = {
  src: string
  title: string
  caption: string
}

const panels: Panel[] = [
  {
    src: '/images/clinic-1.png',
    title: 'Recepción',
    caption: 'Un recibimiento cálido desde que entras.',
  },
  {
    src: '/images/clinic-2.png',
    title: 'Sala de tratamiento',
    caption: 'Espacios privados, tranquilos y equipados.',
  },
  {
    src: '/images/clinic-3.png',
    title: 'Zona de rehabilitación',
    caption: 'Equipamiento para tu recuperación activa.',
  },
  {
    src: '/images/clinic-4.png',
    title: 'Sala de espera',
    caption: 'Comodidad mientras te preparas para tu sesión.',
  },
]

export function ClinicShowcase() {
  const [active, setActive] = useState(0)

  return (
    <section id="clinica" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              <MapPin className="h-4 w-4" />
              Conoce el espacio
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold text-cream-foreground sm:text-5xl text-balance">
              Un lugar pensado para tu bienestar
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cream-foreground/70 text-pretty">
              Pasa el cursor o toca cada espacio para recorrer la clínica.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Expanding panels — desktop */}
          <div className="mt-14 hidden gap-3 md:flex md:h-[30rem]">
            {panels.map((panel, i) => {
              const isActive = active === i
              return (
                <button
                  key={panel.title}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-label={`Ver ${panel.title}`}
                  aria-pressed={isActive}
                  className={`group relative overflow-hidden rounded-3xl outline-none transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                    isActive ? 'flex-[5]' : 'flex-[1]'
                  }`}
                >
                  <img
                    src={panel.src || '/placeholder.svg'}
                    alt={`${panel.title} de Sava Recovery`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    crossOrigin="anonymous"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-teal-deep/90 via-teal-deep/20 to-transparent transition-opacity duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-70'
                    }`}
                  />
                  {/* collapsed vertical label */}
                  <span
                    className={`absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-lg font-medium text-cream transition-opacity duration-300 [writing-mode:vertical-rl] rotate-180 ${
                      isActive ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    {panel.title}
                  </span>
                  {/* expanded caption */}
                  <div
                    className={`absolute inset-x-0 bottom-0 p-7 text-left transition-all duration-500 ${
                      isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <span className="inline-block h-1 w-10 rounded-full bg-gold" />
                    <h3 className="mt-3 font-serif text-2xl font-semibold text-cream">
                      {panel.title}
                    </h3>
                    <p className="mt-1 text-cream/80">{panel.caption}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Stacked grid — mobile */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
            {panels.map((panel) => (
              <figure
                key={panel.title}
                className="relative overflow-hidden rounded-3xl"
              >
                <img
                  src={panel.src || '/placeholder.svg'}
                  alt={`${panel.title} de Sava Recovery`}
                  className="h-64 w-full object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/90 via-teal-deep/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <span className="inline-block h-1 w-8 rounded-full bg-gold" />
                  <h3 className="mt-2 font-serif text-xl font-semibold text-cream">
                    {panel.title}
                  </h3>
                  <p className="mt-1 text-sm text-cream/80">{panel.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
