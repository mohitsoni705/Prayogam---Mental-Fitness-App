import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
      const [streak, setStreak] = useState<number>(7);
  return (
    <div>
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
                <Link to={`/${section}`}>
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize font-medium transition-colors ${activeSection === section ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}`}
                  >
                  {section}
                </button>
                </Link>
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
    </div>
  )
}

export default NavBar
