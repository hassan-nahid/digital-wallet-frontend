import Banner from "@/components/modules/HomePage/Banner"
import CallToAction from "@/components/modules/HomePage/CallToAction"
import Features from "@/components/modules/HomePage/Features"
import HowItWork from "@/components/modules/HomePage/HowItWork"
import Testimonials from "@/components/modules/HomePage/Testimonials"

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Features/>
      <HowItWork/>
      <Testimonials/>
      <CallToAction/>
    </div>
  )
}
export default HomePage