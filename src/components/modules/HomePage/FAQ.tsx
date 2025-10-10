import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How secure is my money in the digital wallet?",
    answer: "Your funds are protected with bank-level security including 256-bit encryption, multi-factor authentication, and fraud monitoring. We're PCI DSS Level 1 compliant and use cold storage for fund protection."
  },
  {
    question: "How long do transfers take to complete?",
    answer: "Most transfers are instant within our network. External bank transfers typically take 1-3 business days depending on your bank. International transfers can take 1-5 business days."
  },
  {
    question: "Are there any fees for using the wallet?",
    answer: "Personal accounts enjoy free basic transactions. Premium features like international transfers, currency conversion, and business tools have competitive fees clearly displayed before confirmation."
  },
  {
    question: "Can I use the wallet internationally?",
    answer: "Yes! Our wallet supports over 50 currencies and works in 150+ countries. You can send money globally, convert currencies, and make payments worldwide with competitive exchange rates."
  },
  {
    question: "What happens if I lose my phone?",
    answer: "Your account remains secure with our multi-layer protection. Simply log in from another device using your credentials and two-factor authentication. You can remotely disable access from your lost device."
  },
  {
    question: "How do I withdraw money to my bank account?",
    answer: "Go to the 'Withdraw' section, select your linked bank account, enter the amount, and confirm. Funds typically arrive within 1-2 business days for domestic transfers."
  },
  {
    question: "Is there a limit on how much I can send or receive?",
    answer: "Limits vary by account type and verification level. Personal accounts start with daily limits that can be increased with identity verification. Business accounts have higher limits by default."
  },
  {
    question: "What customer support options are available?",
    answer: "We offer 24/7 chat support, email support, and phone support for premium users. Our comprehensive help center and video tutorials are available anytime for self-service support."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium bg-blue-500/10 text-blue-600 rounded-full border border-blue-500/20">
            <HelpCircle className="h-4 w-4" />
            Support Center
          </div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto lg:text-lg">
            Find answers to common questions about our digital wallet service
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/20 transition-colors"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support CTA
        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Start Live Chat
              </button>
              <button className="px-6 py-2 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-colors">
                Browse Help Center
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FAQ;