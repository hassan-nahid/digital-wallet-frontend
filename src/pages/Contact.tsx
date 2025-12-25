
import ContactForm from "@/components/modules/ContactPage/ContactForm"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Clock, MessageCircle, HelpCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Contact = () => {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-background">
      <section className="py-24 bg-gradient-to-br from-primary/90 to-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container mx-auto max-w-4xl px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Get In Touch</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">We'd love to hear from you! Reach out with any questions, feedback, or partnership opportunities.</p>
          <p className="text-lg max-w-2xl mx-auto">Our team is available 24/7 to assist you with any inquiries about WalletX services.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 min-w-[220px] shadow-md border border-white/20">
              <Mail className="w-7 h-7 text-white mb-2" />
              <span className="font-semibold">Email</span>
              <a href="mailto:hassan.nahid.dev@gmail.com" className="text-white/80 hover:underline">hassan.nahid.dev@gmail.com</a>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 min-w-[220px] shadow-md border border-white/20">
              <Phone className="w-7 h-7 text-white mb-2" />
              <span className="font-semibold">Phone</span>
              <span className="text-white/80">+8801780365440</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 min-w-[220px] shadow-md border border-white/20">
              <MapPin className="w-7 h-7 text-white mb-2" />
              <span className="font-semibold">Address</span>
              <span className="text-white/80">Dhaka, Bangladesh</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <a href="https://www.facebook.com/HassanNahid10" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition" title="Facebook">
              <Facebook className="w-7 h-7" />
            </a>
            <a href="https://x.com/HassanNahid100" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition" title="X (Twitter)">
              <Twitter className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/hassan-nahid" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition" title="LinkedIn">
              <Linkedin className="w-7 h-7" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Can We Help?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>General Inquiries</CardTitle>
                <CardDescription>Questions about our services, features, or pricing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Get answers to general questions about WalletX and how we can help you.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Technical Support</CardTitle>
                <CardDescription>Need help with your account or transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Our technical team is ready to assist with any issues you encounter.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Business Partnerships</CardTitle>
                <CardDescription>Interested in partnering with WalletX</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Explore partnership opportunities and business collaborations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-muted/40 rounded-2xl shadow-lg border p-12 flex flex-col gap-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-3">Send Us a Message</h2>
              <p className="text-muted-foreground text-lg">Fill out the form below and we'll get back to you as soon as possible</p>
            </div>
            <ContactForm />
            <div className="text-center text-muted-foreground mt-2">
              <p className="font-semibold text-lg mb-2">We typically respond within</p>
              <p className="text-2xl font-bold text-primary">24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Support Hours</h2>
            <p className="text-muted-foreground text-lg">We're here to help you anytime</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Chat Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday - Sunday:</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                  <p className="text-sm text-primary mt-4">Instant response available</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="font-semibold">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                  <p className="text-sm text-primary mt-4">hassan.nahid.dev@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-muted-foreground text-lg mb-8">Check out our frequently asked questions for quick answers</p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { q: "How do I reset my password?", a: "Click 'Forgot Password' on the login page and follow the instructions." },
              { q: "What are the transaction fees?", a: "Transaction fees start at 0.5% with no hidden charges." },
              { q: "Is my money safe with WalletX?", a: "Yes, we use bank-level encryption and security measures." },
              { q: "How long do withdrawals take?", a: "Most withdrawals are processed instantly, some may take 1-5 minutes." },
            ].map((item, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <a href="/faq" className="text-primary hover:underline font-semibold text-lg">View All FAQs →</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact