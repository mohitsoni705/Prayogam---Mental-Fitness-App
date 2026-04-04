import React from 'react'

const Resources = () => {
    const resources = [
    { name: 'Campus Counseling', contact: 'Ext: 1234', available: '24/7' },
    { name: 'Peer Support Group', contact: 'peersupport@university.edu', available: 'Mon-Fri, 9am-5pm' },
    { name: 'Crisis Hotline', contact: '988', available: '24/7' },
    { name: 'Online Therapy', contact: 'studentcare.com/university', available: '24/7' },
  ];
  return (
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
  )
}

export default Resources
