import { useEffect, useState } from "react";

const BreathingExcersize = () => {
    const [breathingPhase, setBreathingPhase] = useState<string>('inhale');
      const [breathingCount, setBreathingCount] = useState<number>(0);
      const [isBreathing, setIsBreathing] = useState<boolean>(false);

    useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isBreathing) {
      interval = setInterval(() => {
        setBreathingPhase(prev => {
          if (prev === 'inhale') return 'hold';
          if (prev === 'hold') return 'exhale';
          setBreathingCount(c => c + 1);
          return 'inhale';
        });
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isBreathing]);

  const toggleBreathing = () => {
    setIsBreathing(!isBreathing);
    if (isBreathing) {
      setBreathingCount(0);
      setBreathingPhase('inhale');
    }
  };
  
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Breathing Exercise</h3>
            <p className="text-gray-500 mb-6">Take a moment to calm your mind with guided breathing</p>
            
            <div className="flex flex-col items-center">
              <div className={`w-40 h-40 rounded-full flex items-center justify-center transition-all duration-4000 ease-in-out ${isBreathing ? (breathingPhase === 'inhale' ? 'bg-teal-200 scale-125' : breathingPhase === 'hold' ? 'bg-teal-300 scale-125' : 'bg-teal-100 scale-100') : 'bg-teal-50'}`}>
                <div className="text-center">
                  <span className="text-5xl">🌬️</span>
                  {isBreathing && (
                    <p className="text-teal-700 font-semibold capitalize mt-2">{breathingPhase}</p>
                  )}
                </div>
              </div>
              
              <button
                onClick={toggleBreathing}
                className={`mt-6 px-8 py-3 rounded-xl font-semibold transition-colors ${isBreathing ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-teal-500 text-white hover:bg-teal-600'}`}
              >
                {isBreathing ? 'Stop Exercise' : 'Start Breathing'}
              </button>
              
              {isBreathing && (
                <p className="mt-4 text-gray-600">Breaths completed: {breathingCount}</p>
              )}
            </div>
          </div>
    </div>
  )
}
export default BreathingExcersize;
