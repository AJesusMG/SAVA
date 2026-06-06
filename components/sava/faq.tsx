'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from './reveal'

const faqs = [
  {
    q: '¿Necesito referencia médica?',
    a: 'No es obligatoria. Puedes agendar directamente; en tu primera sesión realizamos una evaluación completa y, si es necesario, te canalizamos con un especialista.',
  },
  {
    q: '¿Cuánto dura una sesión?',
    a: 'Una sesión estándar dura entre 45 y 60 minutos, dependiendo del tratamiento y de tu plan de recuperación personalizado.',
  },
  {
    q: '¿Aceptan seguros médicos?',
    a: 'Trabajamos con las principales aseguradoras y emitimos factura para tu reembolso. Escríbenos por WhatsApp para confirmar la cobertura de tu póliza.',
  },
  {
    q: '¿Tienen estacionamiento?',
    a: 'Sí, contamos con estacionamiento gratuito para pacientes en nuestras instalaciones de Querétaro.',
  },
  {
    q: '¿Cómo agendo mi cita?',
    a: 'La forma más rápida es por WhatsApp con el botón de "Agenda tu cita". Te confirmamos disponibilidad en minutos.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-cream py-24 text-cream-foreground md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              Preguntas frecuentes
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Todo lo que necesitas saber
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-12 w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-teal/15"
              >
                <AccordionTrigger className="py-5 text-left font-serif text-lg font-medium text-cream-foreground hover:text-teal hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-cream-foreground/70">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
