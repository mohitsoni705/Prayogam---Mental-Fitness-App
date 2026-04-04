import React from 'react'

const CrisisBanner = () => {
  return (
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
  )
}

export default CrisisBanner
