import { ArrowDownToLine, CreditCard, Building2, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const CashInService = () => {
  const features = [
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      title: "Multiple Payment Methods",
      description: "Add money using credit/debit cards, bank transfers, or mobile banking."
    },
    {
      icon: <Building2 className="w-6 h-6 text-primary" />,
      title: "Bank Integration",
      description: "Direct integration with major banks for seamless deposits."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Agent Deposits",
      description: "Visit any of our 10,000+ agent locations for cash deposits."
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Choose Method",
      description: "Select your preferred deposit method (Card/Bank/Agent)."
    },
    {
      step: "2",
      title: "Enter Amount",
      description: "Specify the amount you want to add to your wallet."
    },
    {
      step: "3",
      title: "Confirm Payment",
      description: "Complete the payment through your chosen method."
    },
    {
      step: "4",
      title: "Instant Credit",
      description: "Money is instantly added to your wallet balance."
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="flex-1">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <ArrowDownToLine className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cash In Service</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Add money to your digital wallet quickly and securely through multiple convenient payment options.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="cursor-pointer">
              <Link to="/register">Start Using</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="cursor-pointer">
              <Link to="/services">All Services</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Deposit Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Processing Time</span>
                <span className="font-bold">Instant</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Transaction Fee</span>
                <span className="font-bold">Free</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Daily Limit</span>
                <span className="font-bold">$50,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Supported Banks</span>
                <span className="font-bold">50+</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-primary/5 rounded-lg p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-6 -right-8 w-6 h-6 text-primary" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Deposit Methods */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Deposit Methods</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Credit/Debit Card</CardTitle>
              <CardDescription>Instant deposits using your cards</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Instant processing</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Visa, Mastercard, Amex</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>100% secure payments</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No transaction fees</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bank Transfer</CardTitle>
              <CardDescription>Direct transfer from your bank</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Processing: 1-5 minutes</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>50+ partner banks</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Online & mobile banking</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Free of charge</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Agent Network</CardTitle>
              <CardDescription>Cash deposit at agent locations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Instant wallet credit</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>10,000+ locations</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Available nationwide</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Small service fee</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 md:p-12 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Safe & Secure</h2>
          <p className="text-muted-foreground mb-6">
            Your money and personal information are protected with bank-level encryption and security protocols.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">256-bit</div>
              <div className="text-sm text-muted-foreground">SSL Encryption</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">PCI Compliant</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Fraud Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Add Money?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join thousands of users who trust WalletX for secure and instant deposits.
        </p>
        <Button asChild size="lg" className="cursor-pointer">
          <Link to="/register">Get Started Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default CashInService;
