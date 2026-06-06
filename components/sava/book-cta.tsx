'use client'

import { Button } from '@/components/ui/button'
import { WHATSAPP_URL } from '@/lib/sava'
import { Reveal } from './reveal'
import { WhatsappIcon } from './whatsapp-icon'

export function BookCta() {
  return (
    <section id="agendar" className="relative overflow-hidden bg-teal py-24 text-cream md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl md:text-6xl">
            ¿Listo para sentirte mejor?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-cream/70">
            Agenda tu primera sesión y empieza tu recuperación hoy mismo. Respondemos en minutos.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-9 rounded-full bg-[#25D366] px-8 py-6 text-base font-medium text-white hover:bg-[#1ebe5b]"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon className="mr-1 h-5 w-5" />
              Agendar por WhatsApp
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
