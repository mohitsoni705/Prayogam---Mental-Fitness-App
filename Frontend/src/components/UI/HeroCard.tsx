const HeroCard = () => {
  return (
    <div>
        <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Mental Health Matters</h2>
            <p className="text-xl text-teal-100 mb-6 max-w-2xl">
              Take a moment to check in with yourself. We're here to support your wellbeing journey through college and beyond.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-teal-50 transition-colors">
                Start Today's Check-In
              </button>
              <button className="bg-teal-600/50 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600/70 transition-colors backdrop-blur">
                Explore Tools
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroCard
