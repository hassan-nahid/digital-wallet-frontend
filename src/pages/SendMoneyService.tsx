import { Send, Zap, Shield, Users, CheckCircle, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const SendMoneyService = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Instant Transfers",
      description: "Send money in seconds to anyone with a wallet account."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Secure & Encrypted",
      description: "All transactions are protected with end-to-end encryption."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Send to Anyone",
      description: "Transfer using phone number, email, or wallet ID."
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Enter Details",
      description: "Provide recipient's phone number or wallet ID."
    },
    {
      step: "2",
      title: "Set Amount",
      description: "Enter the amount you want to send."
    },
    {
      step: "3",
      title: "Verify Info",
      description: "Review recipient details and transaction amount."
    },
    {
      step: "4",
      title: "Send Money",
      description: "Confirm and money is transferred instantly."
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="flex-1">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Send className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Send Money</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Transfer money instantly to friends, family, or businesses using just their phone number or wallet ID.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="cursor-pointer">
              <Link to="/register">Start Sending</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="cursor-pointer">
              <Link to="/services">All Services</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Transfer Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Transfer Speed</span>
                <span className="font-bold">Instant</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Transaction Fee</span>
                <span className="font-bold">0.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Daily Limit</span>
                <span className="font-bold">$25,000</span>
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
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Service</h2>
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
        <h2 className="text-3xl font-bold text-center mb-12">How to Send Money</h2>
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

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Lightning Fast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Money arrives in seconds</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No waiting periods</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Real-time notifications</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Secure & Safe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>PIN & OTP verification</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Fraud protection</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Low Fees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Only 0.5% transaction fee</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No hidden charges</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Free to wallet users</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Send to Anyone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Send via phone number</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Send via wallet ID</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Send via email</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Perfect For</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">👨‍👩‍👧‍👦</div>
            <h3 className="font-semibold mb-1">Family</h3>
            <p className="text-sm text-muted-foreground">Send money to loved ones</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">👥</div>
            <h3 className="font-semibold mb-1">Friends</h3>
            <p className="text-sm text-muted-foreground">Split bills and expenses</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">💼</div>
            <h3 className="font-semibold mb-1">Business</h3>
            <p className="text-sm text-muted-foreground">Pay vendors and suppliers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🎁</div>
            <h3 className="font-semibold mb-1">Gifts</h3>
            <p className="text-sm text-muted-foreground">Send monetary gifts</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Start Sending Money Today</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join millions of users who trust WalletX for fast, secure, and convenient money transfers.
        </p>
        <Button asChild size="lg" className="cursor-pointer">
          <Link to="/register">Create Free Account</Link>
        </Button>
      </div>
    </div>
  );
};

export default SendMoneyService;
