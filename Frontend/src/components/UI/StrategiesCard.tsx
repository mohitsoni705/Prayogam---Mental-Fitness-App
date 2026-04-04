
const StrategiesCard = () => {
  const copingStrategies = [
    { icon: '🧘', title: '5-4-3-2-1 Grounding', description: 'Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste.' },
    { icon: '💭', title: 'Thought Reframing', description: 'Challenge negative thoughts by looking for evidence that contradicts them.' },
    { icon: '🚶', title: 'Take a Break', description: 'Step away for 10 minutes. A short walk can reset your mind.' },
    { icon: '✍️', title: 'Journal It Out', description: 'Write down your thoughts freely. Getting them out can reduce their weight.' },
    { icon: '🗣️', title: 'Talk to Someone', description: 'Share with a friend, family member, or counselor. You don\'t have to cope alone.' },
    { icon: '🎵', title: 'Music Therapy', description: 'Listen to calming music or your favorite upbeat songs to shift your mood.' },
  ];

  return (
    <div>
          <section className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Coping Strategies</h3>
        <p className="text-gray-500 mb-8">Evidence-based techniques to help you navigate challenging moments</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {copingStrategies.map((strategy, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow group">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{strategy.icon}</span>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">{strategy.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{strategy.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>    
    </div>
  )
}
export default StrategiesCard;