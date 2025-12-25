
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Wallet, CreditCard, HelpCircle, FileText, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"

const faqCategories = [
  {
    category: "Getting Started",
    icon: <HelpCircle className="w-5 h-5" />,
    questions: [
      {
        question: "What is WalletX?",
        answer: "WalletX is a secure, modern digital wallet platform that enables you to send, receive, and manage money quickly and safely. With support for multiple currencies, instant transfers, and bank-level security, WalletX makes digital transactions simple and accessible for everyone.",
      },
      {
        question: "How do I create an account?",
        answer: "Creating an account is simple! Click the 'Register' button, provide your email, phone number, and create a password. You'll need to verify your email and phone number, then complete a quick identity verification for security purposes. The entire process takes less than 5 minutes.",
      },
      {
        question: "Is WalletX free to use?",
        answer: "Yes! Creating an account and using WalletX for basic transactions is completely free. We charge small transaction fees (starting at 0.5%) for certain services like withdrawals and international transfers. There are no monthly fees, hidden charges, or subscription costs.",
      },
      {
        question: "What devices can I use WalletX on?",
        answer: "WalletX works on all modern devices including smartphones, tablets, and desktop computers. Our platform is fully responsive and optimized for both iOS and Android devices, as well as all major web browsers.",
      },
    ]
  },
  {
    category: "Account & Security",
    icon: <Shield className="w-5 h-5" />,
    questions: [
      {
        question: "How secure is WalletX?",
        answer: "Security is our top priority. We use bank-level 256-bit SSL encryption, multi-factor authentication, and advanced fraud detection systems. Your data is protected with end-to-end encryption, and we never store sensitive information like passwords in plain text. We comply with international security standards and regulations.",
      },
      {
        question: "What should I do if I forget my password?",
        answer: "Click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you a secure link to reset your password. Follow the instructions in the email to create a new password. For security reasons, the reset link expires after 1 hour.",
      },
      {
        question: "Can I change my email or phone number?",
        answer: "Yes, you can update your email or phone number from your account settings. For security purposes, you'll need to verify the new email/phone number and may need to re-verify your identity.",
      },
      {
        question: "How do I enable two-factor authentication?",
        answer: "Go to Security Settings in your account dashboard, click 'Enable 2FA', and follow the setup instructions. You can use SMS codes or authenticator apps like Google Authenticator or Authy for additional security.",
      },
      {
        question: "Are my transactions private?",
        answer: "Yes, all your transactions are private and protected. We use advanced encryption and never share your personal or financial data with third parties without your explicit consent. Your transaction history is only visible to you.",
      },
    ]
  },
  {
    category: "Transactions & Payments",
    icon: <Wallet className="w-5 h-5" />,
    questions: [
      {
        question: "How do I send money?",
        answer: "To send money, log in to your account, click 'Send Money', enter the recipient's email or wallet ID, specify the amount, and confirm. The money will be transferred instantly. You can also add a note or reference for your records.",
      },
      {
        question: "What are the transaction limits?",
        answer: "Daily transaction limits vary by account type and verification level. Basic accounts can send up to $5,000 per day, while verified business accounts have limits up to $50,000 per day. You can view your specific limits in your account settings.",
      },
      {
        question: "How long do transactions take?",
        answer: "WalletX to WalletX transfers are instant. Bank withdrawals typically take 1-5 minutes, though some banks may take up to 24 hours. International transfers usually complete within 1-3 business days depending on the destination country.",
      },
      {
        question: "Can I cancel a transaction?",
        answer: "Once a transaction is completed, it cannot be canceled. However, if you sent money to the wrong person, you can request them to send it back. For pending transactions, you may be able to cancel within a short time window before processing completes.",
      },
      {
        question: "What currencies does WalletX support?",
        answer: "WalletX supports 50+ major currencies including USD, EUR, GBP, BDT, INR, and many more. You can hold multiple currencies in your wallet and convert between them at competitive exchange rates.",
      },
    ]
  },
  {
    category: "Adding & Withdrawing Money",
    icon: <CreditCard className="w-5 h-5" />,
    questions: [
      {
        question: "How do I add money to my WalletX account?",
        answer: "You can add money using credit/debit cards, bank transfers, mobile banking, or through our agent network. Go to 'Add Money' in your dashboard, select your preferred method, enter the amount, and follow the instructions. Most deposits are instant.",
      },
      {
        question: "Can I withdraw funds to my bank?",
        answer: "Yes! You can easily withdraw your WalletX balance to any supported bank account. Click 'Withdraw', select your bank account, enter the amount, and confirm. Most withdrawals process instantly, some may take 1-5 minutes.",
      },
      {
        question: "What are the withdrawal fees?",
        answer: "Withdrawal fees vary by method. Bank transfers have a 1.5% fee, agent withdrawals have a 2% fee, and ATM withdrawals may have additional fees from the ATM provider. The exact fee is always shown before you confirm the withdrawal.",
      },
      {
        question: "Is there a minimum deposit amount?",
        answer: "The minimum deposit amount is $10 (or equivalent in other currencies). There is no maximum deposit limit, though large deposits may require additional verification for security purposes.",
      },
    ]
  },
  {
    category: "Support & Help",
    icon: <Phone className="w-5 h-5" />,
    questions: [
      {
        question: "How do I contact support?",
        answer: "You can reach our 24/7 support team through live chat (available in your dashboard), email at hassan.nahid.dev@gmail.com, or by calling +8801780365440. We also have a comprehensive help center with articles and guides.",
      },
      {
        question: "Can I use WalletX internationally?",
        answer: "Absolutely! WalletX is available in 50+ countries and supports international transfers. You can send and receive money globally with competitive exchange rates and transparent fees.",
      },
      {
        question: "How do I update my profile information?",
        answer: "Go to your account settings, click 'Edit Profile', and update your information. Changes to sensitive information like email or phone number may require verification for security.",
      },
      {
        question: "What should I do if I notice suspicious activity?",
        answer: "Immediately contact our support team and change your password. We have 24/7 fraud monitoring, but if you notice anything unusual, report it right away. We'll investigate and take appropriate action to protect your account.",
      },
    ]
  },
]

const FAQ = () => {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-background">
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">Find answers to the most common questions about WalletX.</p>
          <p className="text-lg max-w-2xl mx-auto">Can't find what you're looking for? Our support team is available 24/7 to help you.</p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {faqCategories.map((cat, idx) => (
              <a
                key={idx}
                href={`#category-${idx}`}
                className="flex flex-col items-center p-4 bg-background rounded-lg border hover:border-primary hover:shadow-md transition-all text-center"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-2 text-primary">
                  {cat.icon}
                </div>
                <span className="text-sm font-semibold">{cat.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      {faqCategories.map((category, catIdx) => (
        <section key={catIdx} id={`category-${catIdx}`} className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                {category.icon}
              </div>
              <h2 className="text-3xl font-bold">{category.category}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full rounded-xl bg-muted/40 border shadow-lg divide-y divide-muted px-6">
              {category.questions.map((faq, idx) => (
                <AccordionItem value={`faq-${catIdx}-${idx}`} key={idx}>
                  <AccordionTrigger className="text-lg font-semibold py-5">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      ))}

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Don't worry, our support team is here to help you 24/7.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <Card>
              <CardHeader>
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription>+8801780365440</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription>hassan.nahid.dev@gmail.com</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <Link to="/contact">
            <Button size="lg" className="px-10 py-6 text-lg cursor-pointer font-semibold">Contact Support Team</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default FAQ