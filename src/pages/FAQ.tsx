
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is WalletX?",
    answer: "WalletX is a secure digital wallet for fast, easy, and global transactions. Manage, send, and receive money with confidence.",
  },
  {
    question: "Is WalletX free to use?",
    answer: "Yes! Creating an account and using WalletX for basic transactions is completely free. Some advanced features may have minimal fees.",
  },
  {
    question: "How secure is WalletX?",
    answer: "We use bank-level encryption and security practices to keep your data and funds safe at all times.",
  },
  {
    question: "Can I use WalletX internationally?",
    answer: "Absolutely! WalletX supports users in 50+ countries and is expanding globally.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our 24/7 support team via the Contact page or by emailing support@walletx.com.",
  },
  {
    question: "How do I add money to my WalletX account?",
    answer: "You can add money using your bank account, debit/credit card, or supported mobile wallets from the Add Money section in your dashboard.",
  },
  {
    question: "Can I withdraw funds to my bank?",
    answer: "Yes, you can easily withdraw your WalletX balance to any supported bank account or mobile wallet.",
  },
  {
    question: "What should I do if I forget my password?",
    answer: "Click on the 'Forgot Password' link on the login page and follow the instructions to reset your password securely.",
  },
  {
    question: "Are my transactions private?",
    answer: "Yes, all your transactions are private and protected. We never share your data with third parties without your consent.",
  },
  {
    question: "How do I update my profile information?",
    answer: "Go to your account settings and update your personal information. Changes will be saved instantly.",
  },
]

const FAQ = () => {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-background">
      <section className="py-20 bg-primary/90 text-white text-center">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg mb-6">Find answers to the most common questions about WalletX.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto  px-4">
          <Accordion type="single" collapsible className="w-full rounded-xl bg-muted/40 border shadow-lg divide-y divide-muted px-5">
            {faqs.map((faq, idx) => (
              <AccordionItem value={"faq-" + idx} key={idx}>
                <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  )
}

export default FAQ