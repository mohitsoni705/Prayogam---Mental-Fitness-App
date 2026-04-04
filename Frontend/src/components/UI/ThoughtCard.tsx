const ThoughtCard = () => {
  return (
    <div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Thought Journal</h3>
            <p className="text-gray-500 mb-4">Write down your thoughts and feelings</p>
            
            <textarea
              placeholder="What's on your mind today? You can write about your thoughts, feelings, experiences, or anything that's bothering you..."
              className="w-full h-40 p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
            />
            
            <div className="flex justify-between items-center mt-4">
                <span></span>
              <button
                className="bg-teal-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-teal-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Save Entry
              </button>
            </div>
          </div>      
    </div>
  )
}

export default ThoughtCard
