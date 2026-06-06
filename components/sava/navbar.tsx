'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { WHATSAPP_URL } from '@/lib/sava'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#clinica', label: 'Clínica' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-teal-deep/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#inicio" className="font-serif text-xl font-semibold tracking-tight text-cream">
          Sava<span className="text-gold">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-cream/70 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className="rounded-full bg-gold font-medium text-teal-deep hover:bg-gold-soft"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Agenda tu cita
          </a>
        </Button>
      </nav>
    </header>
  )
}
