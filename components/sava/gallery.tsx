'use client'

import { Reveal } from './reveal'

type Shot = {
  src: string
  alt: string
  span: string
  tag: string
  tagColor: 'gold' | 'pink' | 'teal'
}

const shots: Shot[] = [
  {
    src: '/images/gallery-1.png',
    alt: 'Vendaje neuromuscular de colores aplicado en la pantorrilla',
    span: 'sm:row-span-2',
    tag: 'Vendaje funcional',
    tagColor: 'gold',
  },
  {
    src: '/images/gallery-2.png',
    alt: 'Masaje de tejido profundo en una sala de tratamiento',
    span: '',
    tag: 'Masaje',
    tagColor: 'pink',
  },
  {
    src: '/images/gallery-3.png',
    alt: 'Ejercicios de rehabilitación guiada con bandas de resistencia',
    span: '',
    tag: 'Rehabilitación',
    tagColor: 'teal',
  },
  {
    src: '/images/gallery-5.png',
    alt: 'Recepción luminosa y moderna de la clínica',
    span: 'sm:col-span-2',
    tag: 'Nuestro espacio',
    tagColor: 'pink',
  },
  {
    src: '/images/gallery-4.png',
    alt: 'Rollos de vendaje de colores ordenados sobre una superficie clara',
    span: '',
    tag: 'Materiales',
    tagColor: 'gold',
  },
]

const tagStyles: Record<Shot['tagColor'], string> = {
  gold: 'bg-gold text-primary-foreground',
  pink: 'bg-pink text-teal-deep',
  teal: 'bg-teal text-cream',
}

export function Gallery() {
  return (
    <section id="galeria" className="bg-cream py-24 text-cream-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Galería
          </span>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Un vistazo a nuestro trabajo
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-cream-foreground/70">
            Tratamientos reales, espacios pensados para tu bienestar y los
            detalles que hacen la diferencia.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((shot, i) => (
            <Reveal
              key={shot.src}
              delay={i * 0.07}
              className={`group relative overflow-hidden rounded-3xl ${shot.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot.src || '/placeholder.svg'}
                alt={shot.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                crossOrigin="anonymous"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-teal-deep/60 via-transparent to-transparent opacity-70"
              />
              <span
                className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${tagStyles[shot.tagColor]}`}
              >
                {shot.tag}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
