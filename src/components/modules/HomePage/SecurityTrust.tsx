import { Shield, Lock, Eye, Smartphone, CheckCircle } from "lucide-react";

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description: "All your data is encrypted using military-grade 256-bit AES encryption",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    title: "Biometric Authentication", 
    description: "Secure access with fingerprint, Face ID, or voice recognition",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "Fraud Detection",
    description: "AI-powered real-time monitoring protects against suspicious activities",
    icon: <Eye className="w-6 h-6" />,
  },
  {
    title: "Multi-Factor Authentication",
    description: "Additional security layers with SMS, email, and app-based verification",
    icon: <Shield className="w-6 h-6" />,
  },
];

const certifications = [
  {
    name: "PCI DSS Level 1",
    description: "Highest level of payment security compliance",
    badge: "🏅"
  },
  {
    name: "ISO 27001",
    description: "International security management standard",
    badge: "🔒"
  },
  {
    name: "SOC 2 Type II",
    description: "Audited security and availability controls",
    badge: "✅"
  },
  {
    name: "GDPR Compliant",
    description: "Full data protection regulation compliance",
    badge: "🛡️"
  },
];

const SecurityTrust = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium bg-green-500/10 text-green-600 rounded-full border border-green-500/20">
            <Shield className="h-4 w-4" />
            Bank-Level Security
          </div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">
            Your Money, Your Privacy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto lg:text-lg">
            We use industry-leading security measures to protect your funds and personal information
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group flex gap-4 p-6 rounded-xl border border-border hover:border-primary/20 hover:bg-muted/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2">Industry Certifications</h3>
            <p className="text-muted-foreground">
              Audited and certified by leading security organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-background/50 border border-border/50"
              >
                <div className="text-3xl mb-2">{cert.badge}</div>
                <div className="font-semibold text-sm text-foreground mb-1">
                  {cert.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {cert.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Promise */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>100% Secure Transactions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>24/7 Fraud Monitoring</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Zero Liability Protection</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Instant Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTrust;