import CrisisBanner from "@/components/CrisisBanner"
import FeelingCard from "@/components/UI/FeelingCard"
import Footer from "@/components/UI/Footer"
import HeroCard from "@/components/UI/HeroCard"
import NavBar from "@/components/UI/NavBar"
import QuickTips from "@/components/UI/QuickTips"
import StrategiesCard from "@/components/UI/StrategiesCard"
import ThoughtCard from "@/components/UI/ThoughtCard"
import BreathingExcersize from "@/Excersise/BreathingExcersize"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <HeroCard/>
      <FeelingCard/>
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <BreathingExcersize/>
          <ThoughtCard/>
        </div>
      </section>
      <StrategiesCard/>      
      <QuickTips/>
      <CrisisBanner/>
     <Footer/>
    </div>
  )
}

export default Home
