
import ContactForm from "@/components/modules/ContactPage/ContactForm"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"

const Contact = () => {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-background">
      <section className="py-20 bg-gradient-to-br from-primary/90 to-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container mx-auto max-w-3xl px-4 relative z-10">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-lg mb-6">We'd love to hear from you! Reach out with any questions, feedback, or partnership opportunities.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 min-w-[220px] shadow-md border border-white/20">
              <Mail className="w-7 h-7 text-white mb-2" />
              <span className="font-semibold">Email</span>
              <a href="mailto:support@walletx.com" className="text-white/80 hover:underline">support@walletx.com</a>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 min-w-[220px] shadow-md border border-white/20">
              <Phone className="w-7 h-7 text-white mb-2" />
              <span className="font-semibold">Phone</span>
              <span className="text-white/80">+880 1234-567890</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 min-w-[220px] shadow-md border border-white/20">
              <MapPin className="w-7 h-7 text-white mb-2" />
              <span className="font-semibold">Address</span>
              <span className="text-white/80">Dhaka, Bangladesh</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition" title="Facebook">
              <Facebook className="w-7 h-7" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition" title="Twitter">
              <Twitter className="w-7 h-7" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition" title="LinkedIn">
              <Linkedin className="w-7 h-7" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="bg-muted/40 rounded-2xl shadow-lg border p-10 flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-center mb-2">Send Us a Message</h2>
            <ContactForm />
            <div className="text-center text-muted-foreground text-sm mt-2">
              Our team will get back to you within 24 hours.
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact