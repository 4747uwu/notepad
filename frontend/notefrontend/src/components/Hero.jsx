import React from 'react'
import { useRef } from 'react';


const Hero = () => {
const containerRef = useRef(null);

  return (
    <div>
      <main className="pt-0 pb-16 lg:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* New Badge */}
              <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 mb-8">
                <span className="text-sm font-medium text-orange-500 mr-2">NEW</span>
                <span className="text-sm text-gray-500">Introducing NOte</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-8">
                Finally, manage all your personal and professional relationships and Socialize Better
              </h1>
              <p className="text-xl text-gray-500 mb-12">
                Move beyond the CRM—automatically organize, intelligently search and keep your entire network in sync.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="inline-flex justify-center items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  GET NOTE FREE →
                </a>
                <button className="inline-flex items-center justify-center px-6 py-3 text-gray-600 hover:text-gray-900">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  WATCH VIDEO
                </button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative hidden lg:block">
              <img
                src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Clay App Interface"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Optional: Add a gradient overlay or decorative elements */}
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/50 to-blue-50/50 rounded-2xl"></div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
