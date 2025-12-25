import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with WalletX
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8">
            Subscribe to our newsletter and get the latest updates on features, 
            promotions, and financial tips delivered straight to your inbox.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 px-4"
              />
              <Button type="submit" size="lg" className="h-12 px-8 cursor-pointer">
                Subscribe
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-green-600 animate-in fade-in duration-300">
              <CheckCircle2 className="w-6 h-6" />
              <p className="text-lg font-medium">Thank you for subscribing!</p>
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>

          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t">
            <div>
              <p className="text-3xl font-bold text-primary">50K+</p>
              <p className="text-sm text-muted-foreground mt-1">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100M+</p>
              <p className="text-sm text-muted-foreground mt-1">Transactions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">99.9%</p>
              <p className="text-sm text-muted-foreground mt-1">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
