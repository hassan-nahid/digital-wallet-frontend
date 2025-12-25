
import { Zap, ShieldCheck, Users, Wallet, Send, Globe, PhoneCall, ArrowRight, CheckCircle, TrendingUp, Clock, CreditCard, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
    {
        icon: <Zap className="w-10 h-10 text-primary mb-3" />, 
        title: "Instant Transfers", 
        desc: "Send and receive money instantly, anytime, anywhere. No delays, no waiting periods. Your transactions are processed in real-time with our optimized infrastructure."
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary mb-3" />, 
        title: "Bank-Level Security", 
        desc: "Your funds and data are protected with end-to-end encryption, multi-factor authentication, and industry-leading security protocols that exceed banking standards."
    },
    {
        icon: <Wallet className="w-10 h-10 text-primary mb-3" />, 
        title: "Multi-Currency Support", 
        desc: "Manage and convert multiple currencies with ease. Support for 50+ currencies with real-time exchange rates and transparent conversion fees."
    },
    {
        icon: <Send className="w-10 h-10 text-primary mb-3" />, 
        title: "Easy Withdrawals", 
        desc: "Withdraw to your bank account, mobile wallet, or through our extensive agent network. Multiple withdrawal methods for your convenience."
    },
    {
        icon: <Globe className="w-10 h-10 text-primary mb-3" />, 
        title: "Global Access", 
        desc: "Use WalletX in 50+ countries and growing. Our platform is designed for international users with localized support and compliance."
    },
    {
        icon: <PhoneCall className="w-10 h-10 text-primary mb-3" />, 
        title: "24/7 Support", 
        desc: "Get help anytime from our dedicated support team. Live chat, email, and phone support available around the clock."
    },
    {
        icon: <Users className="w-10 h-10 text-primary mb-3" />, 
        title: "For Everyone", 
        desc: "Perfect for individuals, freelancers, and businesses. Flexible features that scale with your needs."
    },
    {
        icon: <Clock className="w-10 h-10 text-primary mb-3" />, 
        title: "Transaction History", 
        desc: "Complete transaction history with advanced filtering, search capabilities, and downloadable statements for easy record-keeping."
    },
    {
        icon: <CreditCard className="w-10 h-10 text-primary mb-3" />, 
        title: "Multiple Payment Methods", 
        desc: "Add money using credit cards, debit cards, bank transfers, or mobile banking. We support all major payment providers."
    },
    {
        icon: <Smartphone className="w-10 h-10 text-primary mb-3" />, 
        title: "Mobile Ready", 
        desc: "Access your wallet on any device. Fully responsive design optimized for mobile, tablet, and desktop experiences."
    },
]

const Features = () => {
    return (
        <main className="min-h-[calc(100vh-64px)] bg-background">
            <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white text-center">
                <div className="container mx-auto max-w-4xl px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Powerful Features</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                        Everything you need for fast, secure, and global digital transactions. Experience the future of digital payments.
                    </p>
                    <p className="text-lg max-w-2xl mx-auto">
                        Discover how WalletX combines cutting-edge technology with user-friendly design to deliver the ultimate digital wallet experience.
                    </p>
                </div>
            </section>

            {/* Main Features Grid */}
            <section className="py-20">
                <div className="container mx-auto max-w-7xl px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Core Features</h2>
                    <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
                        Built with you in mind, our features are designed to make your financial life simpler and more secure
                    </p>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((f, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-muted/40 to-muted/20 rounded-xl shadow-sm border hover:shadow-lg hover:border-primary/30 transition-all">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    {f.icon}
                                </div>
                                <h3 className="font-semibold text-xl mb-3">{f.title}</h3>
                                <p className="text-muted-foreground text-base leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto max-w-6xl px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
                    <p className="text-center text-muted-foreground text-lg mb-12">Get started in minutes with our simple process</p>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "1", title: "Sign Up", desc: "Create your free account in under 2 minutes" },
                            { step: "2", title: "Verify", desc: "Quick verification for security and compliance" },
                            { step: "3", title: "Add Money", desc: "Fund your wallet using your preferred method" },
                            { step: "4", title: "Start Using", desc: "Send, receive, and manage your money instantly" },
                        ].map((item, idx) => (
                            <div key={idx} className="relative text-center">
                                <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                                {idx < 3 && (
                                    <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-primary" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="container mx-auto max-w-6xl px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Why Users Love WalletX</h2>
                    <p className="text-center text-muted-foreground text-lg mb-12">Real benefits that make a difference</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { icon: <TrendingUp className="w-6 h-6" />, title: "Low Fees", desc: "Competitive transaction fees that save you money. No hidden charges or surprise costs." },
                            { icon: <Clock className="w-6 h-6" />, title: "Instant Processing", desc: "Real-time transaction processing means your money moves when you do." },
                            { icon: <ShieldCheck className="w-6 h-6" />, title: "100% Secure", desc: "Bank-grade security with end-to-end encryption and fraud protection." },
                            { icon: <Users className="w-6 h-6" />, title: "User-Friendly", desc: "Intuitive interface designed for everyone, from beginners to experts." },
                        ].map((item, idx) => (
                            <Card key={idx} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                            {item.icon}
                                        </div>
                                        <CardTitle className="text-xl">{item.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto max-w-6xl px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Perfect For Everyone</h2>
                    <p className="text-center text-muted-foreground text-lg mb-12">Whatever your needs, WalletX has you covered</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { emoji: "👤", title: "Individuals", items: ["Personal money management", "Pay bills online", "Split expenses with friends", "Track spending"] },
                            { emoji: "💼", title: "Freelancers", items: ["Receive client payments", "Invoice management", "Multi-currency support", "Instant withdrawals"] },
                            { emoji: "🏢", title: "Businesses", items: ["Process payments", "Pay vendors & suppliers", "Payroll management", "Financial reporting"] },
                        ].map((useCase, idx) => (
                            <Card key={idx}>
                                <CardHeader>
                                    <div className="text-5xl mb-3 text-center">{useCase.emoji}</div>
                                    <CardTitle className="text-center text-2xl">{useCase.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {useCase.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Join thousands of users who trust WalletX for their digital transactions. Create your free account today and experience the difference.</p>
                    <Link to="/register"><Button size="lg" className="px-10 py-6 text-lg cursor-pointer font-semibold shadow-lg hover:shadow-xl">Create Your Free Account</Button></Link>
                </div>
            </section>
        </main>
    )
}

export default Features