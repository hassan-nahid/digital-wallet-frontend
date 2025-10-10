import Banner from "@/components/modules/HomePage/Banner"
import CallToAction from "@/components/modules/HomePage/CallToAction"
import Features from "@/components/modules/HomePage/Features"
import HowItWork from "@/components/modules/HomePage/HowItWork"
import Testimonials from "@/components/modules/HomePage/Testimonials"
import Statistics from "@/components/modules/HomePage/Statistics"
import SecurityTrust from "@/components/modules/HomePage/SecurityTrust"
import Pricing from "@/components/modules/HomePage/Pricing"
import FAQ from "@/components/modules/HomePage/FAQ"

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Statistics/>
      <Features/>
      <HowItWork/>
      <SecurityTrust/>
      <Pricing/>
      <Testimonials/>
      <FAQ/>
      <CallToAction/>
    </div>
  )
}
export default HomePage