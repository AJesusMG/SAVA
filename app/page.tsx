import { Navbar } from '@/components/sava/navbar'
import { Hero } from '@/components/sava/hero'
import { Services } from '@/components/sava/services'
import { Gallery } from '@/components/sava/gallery'
import { About } from '@/components/sava/about'
import { ClinicShowcase } from '@/components/sava/clinic-showcase'
import { Testimonials } from '@/components/sava/testimonials'
import { BookCta } from '@/components/sava/book-cta'
import { Faq } from '@/components/sava/faq'
import { Footer } from '@/components/sava/footer'
import { WhatsappFloat } from '@/components/sava/whatsapp-float'
import { CurveDivider } from '@/components/sava/curve-divider'

export default function Page() {
  return (
    <main className="bg-teal">
      <Navbar />
      <Hero />

      {/* Services is also dark teal — flows straight from hero */}
      <Services />

      {/* services (teal) -> gallery (cream) */}
      <CurveDivider fill="var(--cream)" />
      <Gallery />

      {/* gallery (cream) -> about (cream): flows directly, no divider */}
      <About />

      {/* about (cream) -> clinic showcase (cream): flows directly */}
      <ClinicShowcase />

      {/* clinic showcase (cream) -> testimonials (teal-deep) */}
      <CurveDivider fill="var(--teal-deep)" />
      <Testimonials />

      {/* testimonials (teal-deep) -> book cta (teal) */}
      <BookCta />

      {/* book cta (teal) -> faq (cream) */}
      <CurveDivider fill="var(--cream)" />
      <Faq />

      <Footer />
      <WhatsappFloat />
    </main>
  )
}
