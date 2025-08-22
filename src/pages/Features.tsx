
import { Zap, ShieldCheck, Users, Wallet, Send, Globe, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"

const features = [
    {
        icon: <Zap className="w-8 h-8 text-primary mb-2" />, title: "Instant Transfers", desc: "Send and receive money instantly, anytime, anywhere."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary mb-2" />, title: "Bank-Level Security", desc: "Your funds and data are protected with industry-leading security."
    },
    {
        icon: <Wallet className="w-8 h-8 text-primary mb-2" />, title: "Multi-Currency Wallet", desc: "Manage and convert multiple currencies with ease."
    },
    {
        icon: <Send className="w-8 h-8 text-primary mb-2" />, title: "Easy Withdrawals", desc: "Withdraw to your bank or mobile wallet in a few taps."
    },
    {
        icon: <Globe className="w-8 h-8 text-primary mb-2" />, title: "Global Access", desc: "Use WalletX in 50+ countries and growing."
    },
    {
        icon: <PhoneCall className="w-8 h-8 text-primary mb-2" />, title: "24/7 Support", desc: "Get help anytime from our dedicated support team."
    },
    {
        icon: <Users className="w-8 h-8 text-primary mb-2" />, title: "For Everyone", desc: "Perfect for individuals, freelancers, and businesses."
    },
]

const Features = () => {
    return (
        <main className="min-h-[calc(100vh-64px)] bg-background">
            <section className="py-20 bg-primary/90 text-white text-center">
                <div className="container mx-auto max-w-3xl px-4">
                    <h1 className="text-4xl font-bold mb-4">Explore WalletX Features</h1>
                    <p className="text-lg mb-6">Everything you need for fast, secure, and global digital transactions.</p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((f, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-8 bg-muted/40 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                {f.icon}
                                <h3 className="font-semibold text-lg mb-1 mt-2">{f.title}</h3>
                                <p className="text-muted-foreground text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-muted/50">
                <div className="container mx-auto max-w-3xl px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
                    <p className="text-muted-foreground mb-6">Join thousands of users who trust WalletX for their digital transactions.</p>
                    <Link to="/register"><Button size="lg" className="px-8 cursor-pointer py-5 font-semibold shadow-lg">Create Your Free Account</Button></Link>
                </div>
            </section>
        </main>
    )
}

export default Features