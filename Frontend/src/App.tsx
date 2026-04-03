import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [mood, setMood] = useState<string>('');
  const [moodLog, setMoodLog] = useState<{date: string, mood: string}[]>([]);
  const [breathingPhase, setBreathingPhase] = useState<string>('inhale');
  const [breathingCount, setBreathingCount] = useState<number>(0);
  const [isBreathing, setIsBreathing] = useState<boolean>(false);
  const [journalEntry, setJournalEntry] = useState<string>('');
  const [savedEntries, setSavedEntries] = useState<{date: string, entry: string}[]>([]);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [streak, setStreak] = useState<number>(7);

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

  const moods = ['😊', '😌', '😐', '😔', '😢'];
  const moodLabels = ['Mohit', 'Good', 'Okay', 'Low', 'Difficult'];

  const copingStrategies = [
    { icon: '🧘', title: '5-4-3-2-1 Grounding', description: 'Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste.' },
    { icon: '💭', title: 'Thought Reframing', description: 'Challenge negative thoughts by looking for evidence that contradicts them.' },
    { icon: '🚶', title: 'Take a Break', description: 'Step away for 10 minutes. A short walk can reset your mind.' },
    { icon: '✍️', title: 'Journal It Out', description: 'Write down your thoughts freely. Getting them out can reduce their weight.' },
    { icon: '🗣️', title: 'Talk to Someone', description: 'Share with a friend, family member, or counselor. You don\'t have to cope alone.' },
    { icon: '🎵', title: 'Music Therapy', description: 'Listen to calming music or your favorite upbeat songs to shift your mood.' },
  ];

  const resources = [
    { name: 'Campus Counseling', contact: 'Ext: 1234', available: '24/7' },
    { name: 'Peer Support Group', contact: 'peersupport@university.edu', available: 'Mon-Fri, 9am-5pm' },
    { name: 'Crisis Hotline', contact: '988', available: '24/7' },
    { name: 'Online Therapy', contact: 'studentcare.com/university', available: '24/7' },
  ];

  const quickTips = [
    'Break large tasks into smaller, manageable steps',
    'Aim for 7-9 hours of sleep - it makes a huge difference',
    'Stay hydrated and don\'t skip meals',
    'Take regular breaks during study sessions',
    'Connect with friends - social time matters',
    'Celebrate small wins and progress',
  ];

  const handleMoodSelect = (selectedMood: string, index: number) => {
    setMood(selectedMood);
    const today = new Date().toLocaleDateString();
    setMoodLog([...moodLog, { date: today, mood: moodLabels[index] }]);
  };

  const saveJournalEntry = () => {
    if (journalEntry.trim()) {
      const today = new Date().toLocaleDateString();
      setSavedEntries([...savedEntries, { date: today, entry: journalEntry }]);
      setJournalEntry('');
      setStreak(prev => prev + 1);
    }
  };

  const toggleBreathing = () => {
    setIsBreathing(!isBreathing);
    if (isBreathing) {
      setBreathingCount(0);
      setBreathingPhase('inhale');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🌿</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">MindCampus</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['home', 'tools', 'resources', 'community'].map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize font-medium transition-colors ${activeSection === section ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-orange-50 px-3 py-1.5 rounded-full">
                <span className="text-lg">🔥</span>
                <span className="font-semibold text-orange-600">{streak} day streak</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Mood Tracker */}
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

      {/* Main Content Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Breathing Exercise */}
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

          {/* Journal */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Thought Journal</h3>
            <p className="text-gray-500 mb-4">Write down your thoughts and feelings</p>
            
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="What's on your mind today? You can write about your thoughts, feelings, experiences, or anything that's bothering you..."
              className="w-full h-40 p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
            />
            
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-400">{journalEntry.length} characters</span>
              <button
                onClick={saveJournalEntry}
                disabled={!journalEntry.trim()}
                className="bg-teal-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-teal-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Save Entry
              </button>
            </div>

            {savedEntries.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-700 mb-3">Recent Entries</h4>
                <div className="space-y-3 max-h-32 overflow-y-auto">
                  {savedEntries.slice(-3).reverse().map((entry, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-400 mb-1">{entry.date}</p>
                      <p className="text-gray-600 text-sm line-clamp-2">{entry.entry}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Coping Strategies */}
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

      {/* Quick Tips */}
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

      {/* Resources */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Support Resources</h3>
        <p className="text-gray-500 mb-8">You're not alone. These resources are available to help you.</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-5 border-l-4 border-teal-500">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-gray-800">{resource.name}</h4>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">{resource.available}</span>
              </div>
              <p className="text-gray-600 mb-3">{resource.contact}</p>
              <button className="text-teal-600 font-semibold text-sm hover:text-teal-700 flex items-center gap-1">
                Contact Now <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Crisis Banner */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🆘</span>
            <div>
              <h4 className="font-bold text-red-800">In Crisis?</h4>
              <p className="text-red-700 text-sm">If you're in immediate danger, please call emergency services or a crisis hotline.</p>
            </div>
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-700 transition-colors whitespace-nowrap">
            Get Immediate Help
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🌿</span>
                </div>
                <h3 className="text-lg font-bold">MindCampus</h3>
              </div>
              <p className="text-gray-400 text-sm">Supporting student mental health one day at a time. Your wellbeing is our priority.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Mood Tracker</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Breathing Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Counseling Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Crisis Hotlines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Peer Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Emergency Contacts</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-xs">National Crisis Hotline</p>
                  <p className="text-teal-400 font-bold">988</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Campus Security</p>
                  <p className="text-teal-400 font-bold">Ext. 911</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 MindCampus. All rights reserved. This is not a substitute for professional mental health care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;