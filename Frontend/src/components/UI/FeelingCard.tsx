import { useState } from "react";

const FeelingCard = () => {
    const [mood, setMood] = useState<string>('');
    const moods = ['😊', '😌', '😐', '😔', '😢'];
    const moodLabels = ['Great', 'Good', 'Okay', 'Low', 'Difficult'];
    const [moodLog, setMoodLog] = useState<{date: string, mood: string}[]>([]);
   
  const handleMoodSelect = (selectedMood: string, index: number) => {
    setMood(selectedMood);
    const today = new Date().toLocaleDateString();
    setMoodLog([...moodLog, { date: today, mood: moodLabels[index] }]);
  };
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">How are you feeling today?</h3>
          <p className="text-gray-500 mb-6">Select the emoji that best represents your current mood</p>
          <div className="flex justify-center gap-4 md:gap-8">
            {moods.map((m, index) => (
              <button
                key={index}
                onClick={() => handleMoodSelect(m, index)}
                className={`text-4xl md:text-5xl p-3 rounded-2xl transition-all duration-300 hover:scale-110 ${mood === m ? 'bg-teal-100 ring-4 ring-teal-400 scale-110' : 'bg-gray-50 hover:bg-gray-100'}`}
              >
                {m}
              </button>
            ))}
          </div>
          {mood && (
            <p className="text-center mt-6 text-lg text-teal-600 font-medium">
              You're feeling {moodLabels[moods.indexOf(mood)]} today. Thank you for sharing. 💚
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

export default FeelingCard
