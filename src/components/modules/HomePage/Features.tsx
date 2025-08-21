
import { CheckCircle } from "lucide-react"

const features = [
  {
    title: "Instant Transfers",
    description: "Send and receive money instantly with zero fees.",
    icon: <CheckCircle className="text-primary w-8 h-8" />,
  },
  {
    title: "Secure Payments",
    description: "Your transactions are protected with bank-level security.",
    icon: <CheckCircle className="text-primary w-8 h-8" />,
  },
  {
    title: "Multi-Currency Support",
    description: "Easily manage and convert between multiple currencies.",
    icon: <CheckCircle className="text-primary w-8 h-8" />,
  },
  {
    title: "24/7 Support",
    description: "Get help anytime with our dedicated support team.",
    icon: <CheckCircle className="text-primary w-8 h-8" />,
  },
]

const Features = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-bold text-center mb-4 lg:text-4xl">Features</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto lg:text-lg">
          Discover what makes <span className="text-primary font-semibold">WalletX</span> the best choice for your digital wallet needs.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-background p-6 shadow-sm flex flex-col items-center text-center border hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features