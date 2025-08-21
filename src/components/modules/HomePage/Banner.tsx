import { ExternalLink } from "lucide-react";


import { Button } from "@/components/ui/button";
import Logo from "@/assets/Logo/Logo";

const Banner = () => {
  return (
  <section className="relative  overflow-hidden py-32 min-h-[calc(100vh-64px)]">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
              <Logo/>
            </div>
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
               Your Money, Your Control.{" "}
                <span className="text-primary">WalletX</span>
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                Fast, secure, and reliable digital wallet for everyday transactions.
              </p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Button size="lg" className="shadow-lg text-lg px-8 py-5 font-semibold animate-pulse">
                Get Started
              </Button>
              <Button variant="outline" className="group text-lg px-8 py-5">
                Learn more{" "}
                <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
