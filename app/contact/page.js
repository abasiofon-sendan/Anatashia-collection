import { MessageCircle, Share2, Clock } from 'lucide-react'

const storeSettings = {
  storeName: "Anatashia",
  whatsappNumber: "2348012345678",
  instagramHandle: "anatashia_ng"
}

export const metadata = {
  title: 'Contact Us | Anatashia',
  description: `Get in touch with ${storeSettings.storeName}. Contact us on WhatsApp or Instagram for inquiries and orders.`,
  openGraph: {
    title: 'Contact Us | Anatashia',
    description: `Get in touch with ${storeSettings.storeName}. Contact us on WhatsApp or Instagram for inquiries and orders.`,
  },
}

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        {/* Page Header */}
        <div className="text-center mb-14">
          <p className="eyebrow">We&apos;d Love to Hear From You</p>
          <h1 className="display mt-4 text-5xl md:text-6xl text-foreground">
            Get in Touch
          </h1>
          <p className="mt-5 text-muted-foreground font-light leading-relaxed">
            Questions about a piece, or need styling advice? The fastest way to
            reach us is on WhatsApp — we&apos;re always happy to help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-5">
          {/* WhatsApp Card */}
          <div className="group bg-card border border-border p-7 md:p-8 transition-colors hover:border-gold">
            <div className="flex items-start gap-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border text-foreground shrink-0">
                <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl text-foreground mb-1.5">
                  WhatsApp
                </h2>
                <p className="text-muted-foreground font-light mb-5 leading-relaxed">
                  Chat directly for quick responses, product inquiries, or to place an order.
                </p>
                <a
                  href={`https://wa.me/${storeSettings.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-gold-soft text-primary-foreground text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
                >
                  Start Chat
                </a>
              </div>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="group bg-card border border-border p-7 md:p-8 transition-colors hover:border-gold">
            <div className="flex items-start gap-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border text-foreground shrink-0">
                <Share2 className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl text-foreground mb-1.5">
                  Instagram
                </h2>
                <p className="text-muted-foreground font-light mb-5 leading-relaxed">
                  Follow for the latest arrivals, styling tips, and behind-the-scenes moments.
                </p>
                <a
                  href={`https://instagram.com/${storeSettings.instagramHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-foreground hover:bg-foreground hover:text-background text-foreground text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
                >
                  @{storeSettings.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Response Time Info */}
          <div className="bg-secondary p-7 md:p-8">
            <div className="flex items-start gap-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border text-foreground shrink-0">
                <Clock className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl text-foreground mb-1.5">
                  Response Time
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We typically respond within a few hours during business hours.
                  For urgent inquiries, WhatsApp is the fastest way to reach us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
