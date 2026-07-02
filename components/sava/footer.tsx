import { Instagram, Facebook, MapPin } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/sava'
import { WhatsappIcon } from './whatsapp-icon'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#agendar', label: 'Contacto' },
]

export function Footer() {
  return (
    <footer className="bg-teal-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-2xl font-semibold">
              Sava<span className="text-gold">.</span> Recovery
            </p>
            <p className="mt-3 leading-relaxed text-cream/60">
              Fisioterapia, masajes terapéuticos y rehabilitación. Tu cuerpo merece recuperarse
              bien.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-cream/60">
              <MapPin className="h-4 w-4 text-gold" />
              San Luis Potosí, México, Av. Carranza #1680 -4
            </p>
          </div>

          <nav aria-label="Enlaces del pie de página">
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream/70 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Sava Recovery"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Sava Recovery"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Sava Recovery"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <WhatsappIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-sm text-cream/50">
          © 2025 Sava Recovery. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
