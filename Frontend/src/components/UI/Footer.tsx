import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer
