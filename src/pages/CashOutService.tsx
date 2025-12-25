import { ArrowUpFromLine, Shield, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const CashOutService = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Instant Withdrawal",
      description: "Get your money within minutes, not days."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Secure Process",
      description: "Bank-grade security for all transactions."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Multiple Options",
      description: "Withdraw via bank, ATM, or agent network."
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Choose Amount",
      description: "Select the amount you want to withdraw from your wallet."
    },
    {
      step: "2",
      title: "Select Method",
      description: "Choose your preferred withdrawal method (Bank/Agent/ATM)."
    },
    {
      step: "3",
      title: "Verify Details",
      description: "Confirm your account details and transaction information."
    },
    {
      step: "4",
      title: "Receive Money",
      description: "Get your money instantly in your selected account."
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="flex-1">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <ArrowUpFromLine className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cash Out Service</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Withdraw money from your digital wallet instantly and securely through multiple convenient methods.
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
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Processing Time</span>
                <span className="font-bold">Instant</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Transaction Fee</span>
                <span className="font-bold">1.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Daily Limit</span>
                <span className="font-bold">$10,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Availability</span>
                <span className="font-bold">24/7</span>
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

      {/* Withdrawal Methods */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Withdrawal Methods</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Bank Transfer</CardTitle>
              <CardDescription>Direct transfer to your bank account</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Processing: 1-2 minutes</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Available 24/7</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No additional charges</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Agent Network</CardTitle>
              <CardDescription>Cash withdrawal from nearby agents</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Instant cash pickup</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>10,000+ agent locations</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Small service fee applies</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ATM Withdrawal</CardTitle>
              <CardDescription>Use our partner ATM network</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>5,000+ ATM locations</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Available 24/7</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Standard ATM fees apply</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Withdraw?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Create your account today and experience seamless cash withdrawals with WalletX.
        </p>
        <Button asChild size="lg" className="cursor-pointer">
          <Link to="/register">Get Started Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default CashOutService;
