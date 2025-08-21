
const testimonials = [
  {
    name: "Sarah Rahman",
    role: "Freelancer",
    text: "WalletX made sending and receiving payments so easy! The interface is clean and the transfers are instant.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Aminul Islam",
    role: "Business Owner",
    text: "I love the security features and the 24/7 support. Highly recommended for anyone who needs a reliable wallet.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nadia Akter",
    role: "Student",
    text: "Adding money and withdrawing is super simple. WalletX is my go-to for all digital transactions!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center mb-4 lg:text-4xl">What Our Users Say</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto lg:text-lg">
          Real feedback from real WalletX users.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-background p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-primary object-cover"
              />
              <blockquote className="italic text-muted-foreground mb-4">“{t.text}”</blockquote>
              <div>
                <span className="font-semibold text-primary">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials