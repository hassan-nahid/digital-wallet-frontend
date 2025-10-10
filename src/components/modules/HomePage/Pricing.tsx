import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const userPlans = [
  {
    name: "Personal User",
    price: "Free",
    description: "For individuals managing personal finances",
    features: [
      "Add Money: Up to ৳50,000 per transaction",
      "Send Money: Free under ৳1,000",
      "Send Money: ৳10 fee (৳1,000-৳20,000)",
      "Send Money: ৳15 fee (above ৳20,000)",
      "Cash Out: ৳10 per ৳1,000 through agents",
      "Cash Out: Max ৳50,000 per transaction",
      "Transaction history & analytics",
      "Mobile app access",
      "Standard support"
    ],
    cta: "Start Now",
    popular: true,
    badge: "Most Popular",
    limits: "Max ৳50,000 per transaction"
  },
  {
    name: "Agent",
    price: "Commission Based",
    description: "Earn money by providing cash in/out services",
    features: [
      "Cash In: Help users add money (Free)",
      "Cash Out: Earn ৳4 per ৳1,000 commission",
      "Cash In from Admin: Up to ৳100,000",
      "Agent dashboard & tools",
      "Real-time transaction tracking",
      "Commission analytics",
      "Priority agent support",
      "Agent training & certification"
    ],
    cta: "Become Agent",
    popular: false,
    badge: "Earn Money",
    limits: "Min ৳100, Max ৳100,000"
  },
  {
    name: "Admin",
    price: "Enterprise",
    description: "Complete system management and oversight",
    features: [
      "All transaction types management",
      "Cash In to agents: Up to ৳100,000",
      "Admin Withdraw: Up to ৳100,000 (No fees)",
      "Earn ৳6 profit per ৳1,000 from cash outs",
      "Collect all send money fees",
      "Advanced analytics & reporting",
      "User & agent management",
      "System configuration",
      "Dedicated support"
    ],
    cta: "Contact Sales",
    popular: false,
    badge: "Enterprise",
    limits: "No transaction limits"
  },
];

const feeStructure = [
  {
    service: "Send Money",
    tiers: [
      { range: "Under ৳1,000", fee: "Free", recipient: "-" },
      { range: "৳1,000 - ৳20,000", fee: "৳10", recipient: "Admin" },
      { range: "Above ৳20,000", fee: "৳15", recipient: "Admin" }
    ]
  },
  {
    service: "Cash Out",
    tiers: [
      { range: "Per ৳1,000", fee: "৳10 (User pays)", recipient: "User pays" },
      { range: "Commission", fee: "৳4 per ৳1,000", recipient: "Agent gets" },
      { range: "Profit", fee: "৳6 per ৳1,000", recipient: "Admin gets" }
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
            <Zap className="h-4 w-4" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">
            Transaction Fees & User Types
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto lg:text-lg">
            Choose your user type and understand our transparent fee structure for all transaction services.
          </p>
        </div>

        {/* User Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {userPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? "border-primary shadow-xl scale-105 bg-background"
                  : "border-border bg-background/50"
              } hover:shadow-lg transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-2 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                    <Star className="h-3 w-3" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {plan.description}
                </p>
                <p className="text-xs text-primary font-medium">
                  {plan.limits}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-auto">
                <Link to="/register" className="block">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Fee Structure Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Detailed Fee Structure
            </h3>
            <p className="text-muted-foreground">
              Transparent pricing for all transaction services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {feeStructure.map((service, index) => (
              <div key={index} className="bg-background rounded-xl border border-border p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {service.service}
                </h4>
                <div className="space-y-3">
                  {service.tiers.map((tier, tierIndex) => (
                    <div key={tierIndex} className="flex justify-between items-center py-2 px-3 rounded-lg bg-muted/30">
                      <span className="text-sm font-medium text-foreground">
                        {tier.range}
                      </span>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-foreground">
                          {tier.fee}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {tier.recipient}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Transaction Limits */}
          <div className="mt-8 bg-muted/30 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Transaction Limits
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg bg-background/50">
                <div className="text-sm font-medium text-foreground">Add Money</div>
                <div className="text-lg font-bold text-primary">৳50,000</div>
                <div className="text-xs text-muted-foreground">Max per transaction</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50">
                <div className="text-sm font-medium text-foreground">Cash Out</div>
                <div className="text-lg font-bold text-primary">৳50,000</div>
                <div className="text-xs text-muted-foreground">Max per transaction</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50">
                <div className="text-sm font-medium text-foreground">Cash In</div>
                <div className="text-lg font-bold text-primary">৳100,000</div>
                <div className="text-xs text-muted-foreground">Max per transaction</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50">
                <div className="text-sm font-medium text-foreground">Admin Withdraw</div>
                <div className="text-lg font-bold text-primary">৳100,000</div>
                <div className="text-xs text-muted-foreground">Max per transaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-background rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Ready to Start Your Digital Wallet Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of users, agents, and businesses already using our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="px-8">
                  Start as User
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-8">
                  Become Agent
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Security & Trust */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Bank-level security</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>24/7 transaction monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Instant customer support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;