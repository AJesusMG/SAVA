import { WHATSAPP_URL } from '@/lib/sava'
import { WhatsappIcon } from './whatsapp-icon'

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="animate-pulse-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  )
}
