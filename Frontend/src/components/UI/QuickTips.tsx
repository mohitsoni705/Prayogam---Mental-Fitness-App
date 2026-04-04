
const QuickTips = () => {
      const quickTips = [
    'Break large tasks into smaller, manageable steps',
    'Aim for 7-9 hours of sleep - it makes a huge difference',
    'Stay hydrated and don\'t skip meals',
    'Take regular breaks during study sessions',
    'Connect with friends - social time matters',
    'Celebrate small wins and progress',
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Daily Wellness Tips</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                <span className="text-amber-500 text-xl">✨</span>
                <p className="text-gray-700 text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default QuickTips
