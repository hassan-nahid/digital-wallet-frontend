import { Users, CreditCard, Globe, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Active Users",
    value: "2M+",
    description: "Trusted by millions worldwide",
    icon: <Users className="w-8 h-8 text-primary" />,
    growth: "+25% this month"
  },
  {
    title: "Transactions",
    value: "$50B+",
    description: "Processed securely",
    icon: <CreditCard className="w-8 h-8 text-primary" />,
    growth: "99.9% uptime"
  },
  {
    title: "Countries",
    value: "150+",
    description: "Global coverage",
    icon: <Globe className="w-8 h-8 text-primary" />,
    growth: "24/7 support"
  },
  {
    title: "Growth Rate",
    value: "300%",
    description: "Year over year",
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    growth: "Industry leading"
  },
];

const Statistics = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">
            Trusted by Millions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto lg:text-lg">
            Join the fastest-growing digital wallet platform and experience the future of payments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2 lg:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-2">
                {stat.title}
              </div>
              <div className="text-xs text-muted-foreground mb-3">
                {stat.description}
              </div>
              <div className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full inline-block">
                {stat.growth}
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-sm text-muted-foreground font-medium">
              🏆 Best Digital Wallet 2024
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              🔒 ISO 27001 Certified
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              🛡️ PCI DSS Compliant
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              ⭐ 4.9/5 App Store Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;