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
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Get In Touch
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have questions about a product or need styling advice? I&apos;d love to hear from you! 
              The fastest way to reach me is through WhatsApp.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    WhatsApp
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Chat with me directly for quick responses, product inquiries, or to place an order.
                  </p>
                  <a
                    href={`https://wa.me/${storeSettings.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#128C7E] text-white font-medium transition-colors"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                  <Share2 className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    Instagram
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Follow us for the latest arrivals, styling tips, and behind-the-scenes content.
                  </p>
                  <a
                    href={`https://instagram.com/${storeSettings.instagramHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg border border-border hover:bg-muted text-foreground font-medium transition-colors"
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    @{storeSettings.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Info */}
            <div className="bg-secondary rounded-lg p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    Response Time
                  </h2>
                  <p className="text-muted-foreground">
                    I typically respond to messages within a few hours during business hours. For urgent inquiries, WhatsApp is the fastest way to reach me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
