


import { Users, ShieldCheck, Zap, Globe, TrendingUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const team = [
  {
    name: "Hassan Nahid",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/lego/2.jpg",
  },
  {
    name: "Sarah Rahman",
    role: "Lead Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Aminul Islam",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
]

const About = () => {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-background">
      <section className="py-20 bg-primary/90 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About WalletX</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            WalletX is on a mission to make digital transactions fast, secure, and accessible for everyone. We believe in empowering people to take control of their money with confidence and ease.<br/><br/>
            <span className="font-semibold">Founded in 2025</span>, WalletX has quickly become a trusted platform for thousands of users. Our vision is to create a seamless financial experience for individuals and businesses worldwide.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-center mb-10">Why Choose WalletX?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6 bg-muted/40 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <Zap className="w-10 h-10 text-primary mb-2" />
              <h3 className="font-semibold text-lg mb-1 mt-2">Fast & Easy</h3>
              <p className="text-muted-foreground text-sm">Send, receive, and manage your money instantly with a user-friendly interface.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted/40 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <ShieldCheck className="w-10 h-10 text-primary mb-2" />
              <h3 className="font-semibold text-lg mb-1 mt-2">Secure</h3>
              <p className="text-muted-foreground text-sm">Your transactions are protected with industry-leading security and privacy standards.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted/40 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <Users className="w-10 h-10 text-primary mb-2" />
              <h3 className="font-semibold text-lg mb-1 mt-2">For Everyone</h3>
              <p className="text-muted-foreground text-sm">WalletX is designed for individuals, freelancers, and businesses alike.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted/40 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <Globe className="w-10 h-10 text-primary mb-2" />
              <h3 className="font-semibold text-lg mb-1 mt-2">Global Reach</h3>
              <p className="text-muted-foreground text-sm">Available in 50+ countries, WalletX connects you to the world.</p>
            </div>
          </div>
          <div className="mt-12 text-center max-w-3xl mx-auto text-muted-foreground">
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <ul className="list-disc list-inside text-left inline-block">
              <li>Transparency and trust in every transaction</li>
              <li>Continuous innovation for a better user experience</li>
              <li>Customer-first approach in everything we do</li>
              <li>Commitment to privacy and data protection</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-center mb-10">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center bg-background p-6 rounded-xl shadow-sm border w-64 hover:shadow-md transition-shadow">
                <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="font-semibold text-primary text-lg">{member.name}</div>
                <div className="text-muted-foreground text-sm">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground mb-6">From a small startup to a leading digital wallet, WalletX has grown thanks to our passionate team and loyal users. We are constantly evolving to bring you the best in digital finance.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
            <div className="flex flex-col items-center">
              <TrendingUp className="w-8 h-8 text-primary mb-1" />
              <span className="font-bold text-lg">10K+</span>
              <span className="text-muted-foreground text-sm">Active Users</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-primary mb-1" />
              <span className="font-bold text-lg">50+</span>
              <span className="text-muted-foreground text-sm">Countries Supported</span>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 text-primary mb-1" />
              <span className="font-bold text-lg">99.99%</span>
              <span className="text-muted-foreground text-sm">Uptime</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About