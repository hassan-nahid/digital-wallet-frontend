
import { UserPlus, Wallet, Send } from "lucide-react"

const steps = [
  {
    title: "Register",
    description: "Create your WalletX account in seconds.",
    icon: <UserPlus className="w-10 h-10 text-primary mb-2" />,
  },
  {
    title: "Add Money",
    description: "Easily add money to your wallet from any bank or card.",
    icon: <Wallet className="w-10 h-10 text-primary mb-2" />,
  },
  {
    title: "Send/Withdraw",
    description: "Send money to anyone or withdraw to your bank instantly.",
    icon: <Send className="w-10 h-10 text-primary mb-2" />,
  },
]

const HowItWork = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center mb-4 lg:text-4xl flex items-center justify-center gap-2">
          <span role="img" aria-label="card"></span> How It Works
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto lg:text-lg">
          3 simple steps: <span className="font-semibold text-primary">Register</span> → <span className="font-semibold text-primary">Add Money</span> → <span className="font-semibold text-primary">Send/Withdraw</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-muted/40 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
            >
              <div>{step.icon}</div>
              <h3 className="font-semibold text-lg mb-1 mt-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWork