import { ArrowDownToLine, ArrowUpFromLine, Send, Wallet, Shield, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Services = () => {
  const services = [
    {
      icon: <ArrowUpFromLine className="w-12 h-12 text-primary" />,
      title: "Cash Out",
      description: "Withdraw money from your wallet instantly to your bank account or through our agent network.",
      link: "/services/cash-out",
      features: ["Instant withdrawals", "24/7 availability", "Low transaction fees", "Multiple withdrawal methods"]
    },
    {
      icon: <ArrowDownToLine className="w-12 h-12 text-primary" />,
      title: "Cash In",
      description: "Add money to your wallet through various convenient methods including bank transfer and agents.",
      link: "/services/cash-in",
      features: ["Quick deposits", "Secure transactions", "Multiple payment options", "Real-time updates"]
    },
    {
      icon: <Send className="w-12 h-12 text-primary" />,
      title: "Send Money",
      description: "Transfer money to anyone instantly using just their phone number or wallet ID.",
      link: "/services/send-money",
      features: ["Instant transfers", "Low fees", "Secure & encrypted", "Send to anyone"]
    },
    {
      icon: <Wallet className="w-12 h-12 text-primary" />,
      title: "Transaction History",
      description: "Track all your transactions with detailed history and downloadable statements.",
      link: "/services/transactions",
      features: ["Complete history", "Advanced filters", "Export options", "Real-time updates"]
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive digital wallet solutions designed to make your financial transactions simple, secure, and seamless.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4">{service.icon}</div>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full cursor-pointer">
                <Link to={service.link}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-primary/5 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose WalletX?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Safe</h3>
            <p className="text-muted-foreground">
              Bank-level encryption and security protocols to keep your money safe.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Available</h3>
            <p className="text-muted-foreground">
              Access your wallet anytime, anywhere with round-the-clock support.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Processing</h3>
            <p className="text-muted-foreground">
              Lightning-fast transactions that complete in seconds, not days.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-6">
          Join thousands of users who trust WalletX for their digital transactions.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" className="cursor-pointer">
            <Link to="/register">Create Account</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="cursor-pointer">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
