


import { Users, ShieldCheck, Zap, Globe, TrendingUp, Target, Eye, Award, Rocket, Code, Database, Cloud, Lock } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const team = [
  {
    name: "Hassan Nahid",
    role: "Founder & Full-Stack Developer",
    image: "https://github.com/hassan-nahid.png",
    portfolio: "https://hassannahid.tech",
    github: "https://github.com/hassan-nahid",
    linkedin: "https://www.linkedin.com/in/hassan-nahid",
  },
]

const About = () => {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-background">
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About WalletX</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            WalletX is on a mission to make digital transactions fast, secure, and accessible for everyone. We believe in empowering people to take control of their money with confidence and ease.
          </p>
          <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold">Founded in 2025 by Hassan Nahid</span>, WalletX is built with cutting-edge modern technologies to provide a seamless financial experience. Our platform combines security, speed, and simplicity to deliver the best digital wallet solution.
          </p>
          <p className="text-base max-w-2xl mx-auto">
            Visit <a href="https://hassannahid.tech" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/90 font-semibold">hassannahid.tech</a> to learn more about the developer and explore other innovative projects.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To revolutionize digital payments by providing a secure, fast, and user-friendly platform that makes financial transactions accessible to everyone, everywhere. We strive to eliminate barriers in digital finance and create opportunities for individuals and businesses to thrive in the digital economy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become the world's most trusted and innovative digital wallet platform, empowering billions of people with seamless financial solutions. We envision a future where digital transactions are instant, secure, and available to everyone, breaking down geographical and economic barriers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose WalletX?</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">Experience the perfect blend of security, speed, and simplicity in one powerful platform</p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl shadow-sm border hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground text-base">Send, receive, and manage your money instantly with our optimized infrastructure. Transactions complete in seconds, not hours.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl shadow-sm border hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Bank-Level Security</h3>
              <p className="text-muted-foreground text-base">Your transactions are protected with end-to-end encryption, multi-factor authentication, and industry-leading security standards.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl shadow-sm border hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">For Everyone</h3>
              <p className="text-muted-foreground text-base">Whether you're an individual, freelancer, or business owner, WalletX adapts to your needs with flexible features.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl shadow-sm border hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Global Reach</h3>
              <p className="text-muted-foreground text-base">Available in 50+ countries and expanding globally. Connect with anyone, anywhere, anytime with WalletX.</p>
            </div>
          </div>
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8">Our Core Values</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex gap-3 p-6 bg-muted/40 rounded-lg border">
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Transparency & Trust</h4>
                  <p className="text-muted-foreground">We believe in complete transparency in every transaction and maintain the highest standards of trust with our users.</p>
                </div>
              </div>
              <div className="flex gap-3 p-6 bg-muted/40 rounded-lg border">
                <Rocket className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Continuous Innovation</h4>
                  <p className="text-muted-foreground">We constantly evolve and improve our platform with cutting-edge technology for the best user experience.</p>
                </div>
              </div>
              <div className="flex gap-3 p-6 bg-muted/40 rounded-lg border">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Customer First</h4>
                  <p className="text-muted-foreground">Every decision we make is guided by what's best for our users and their financial well-being.</p>
                </div>
              </div>
              <div className="flex gap-3 p-6 bg-muted/40 rounded-lg border">
                <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Privacy & Protection</h4>
                  <p className="text-muted-foreground">Your data privacy is our top priority. We implement the strictest security measures to protect your information.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Built With Modern Technology</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">WalletX leverages cutting-edge technologies to deliver a robust, scalable, and secure platform</p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Code className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">React & TypeScript</h3>
              <p className="text-muted-foreground text-sm">Modern frontend with type-safe development</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Database className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Node.js & MongoDB</h3>
              <p className="text-muted-foreground text-sm">Powerful backend with scalable database</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Cloud className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cloud Infrastructure</h3>
              <p className="text-muted-foreground text-sm">Reliable hosting with 99.9% uptime</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Advanced Security</h3>
              <p className="text-muted-foreground text-sm">End-to-end encryption & authentication</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Meet the Developer</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">Passionate about creating innovative financial solutions</p>
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center bg-background p-6 rounded-xl shadow-sm border w-80 hover:shadow-md transition-shadow">
                <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="font-semibold text-primary text-lg">{member.name}</div>
                <div className="text-muted-foreground text-sm mb-4">{member.role}</div>
                <div className="flex gap-3">
                  <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition" title="Portfolio">
                    <Globe className="w-5 h-5" />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition" title="GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition" title="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Journey & Achievements</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-3xl mx-auto leading-relaxed">From a vision to reality, WalletX has grown thanks to innovation, dedication, and the trust of our users. We are constantly evolving to bring you the best in digital finance and remain committed to excellence.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center p-6 bg-background rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <span className="font-bold text-3xl text-primary mb-1">50K+</span>
              <span className="text-muted-foreground text-sm">Active Users</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-background rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <span className="font-bold text-3xl text-primary mb-1">50+</span>
              <span className="text-muted-foreground text-sm">Countries</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-background rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <span className="font-bold text-3xl text-primary mb-1">99.99%</span>
              <span className="text-muted-foreground text-sm">Uptime</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-background rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <span className="font-bold text-3xl text-primary mb-1">1M+</span>
              <span className="text-muted-foreground text-sm">Transactions</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About