import Banner from "@/components/modules/HomePage/Banner";
import Statistics from "@/components/modules/HomePage/Statistics";
import Pricing from "@/components/modules/HomePage/Pricing";
import Features from "@/components/modules/HomePage/Features";
import HowItWork from "@/components/modules/HomePage/HowItWork";
import AppShowcase from "@/components/modules/HomePage/AppShowcase";
import SecurityTrust from "@/components/modules/HomePage/SecurityTrust";
import Testimonials from "@/components/modules/HomePage/Testimonials";
import FAQ from "@/components/modules/HomePage/FAQ";
import Newsletter from "@/components/modules/HomePage/Newsletter";
import CallToAction from "@/components/modules/HomePage/CallToAction";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#F3F6F4] text-[#0C1A14]">
      <Banner />
      <Statistics />
      <Pricing />
      <Features />
      <HowItWork />
      <AppShowcase />
      <SecurityTrust />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <CallToAction />
    </main>
  );
};

export default HomePage;