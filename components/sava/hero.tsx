'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WHATSAPP_URL } from '@/lib/sava'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-teal pt-28 pb-16 text-cream"
    >
      {/* soft decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-pink/15 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        {/* Left: copy */}
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm text-gold-soft"
          >
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            Querétaro, México
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Tu cuerpo merece
            <br />
            <span className="text-gold">recuperarse bien.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-cream/70"
          >
            Fisioterapia · Masajes terapéuticos · Rehabilitación
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gold px-8 text-base font-medium text-teal-deep hover:bg-gold-soft"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agenda tu cita
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-cream/30 bg-transparent px-8 text-base text-cream hover:bg-cream/10 hover:text-cream"
            >
              <a href="#servicios">Ver servicios</a>
            </Button>
          </motion.div>
        </div>

        {/* Right: organic masked photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            className="relative aspect-[4/5] w-full overflow-hidden bg-teal-deep shadow-2xl"
            style={{ borderRadius: '48% 52% 58% 42% / 42% 45% 55% 58%' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-therapy.png"
              alt="Fisioterapeuta aplicando vendaje neuromuscular en Sava Recovery"
              className="h-full w-full object-cover"
              crossOrigin="anonymous"
            />
          </div>

          {/* floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute -left-2 bottom-8 rounded-2xl border border-pink/40 bg-teal-deep/90 px-5 py-4 backdrop-blur-sm sm:-left-6"
          >
            <p className="font-serif text-3xl font-semibold text-pink-soft">+200</p>
            <p className="text-sm text-cream/70">pacientes recuperados</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
