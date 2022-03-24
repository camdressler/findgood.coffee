import React from 'react';

export default function Header() {
    return (
        <nav className="bg-transparent py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex">
            <div>
              <a href="#" className="flex items-left py-2 pl-8 gap-2">
                <h1 className="h-14 mr-2 text-2xl">Find <span className="font-semibold">Good</span> <span style={{color: '#6F4E37' }}>Coffee</span></h1>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8 ml-auto">
              <a href="/login">
                <button
                  id="goToLogin"
                  style={{
                    background: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.23)',
                    boxSizing: 'border-box',
                    borderRadius: '9.9px',
                    color: '#6F4E37'
                  }}
                  className="px-4 py-2 items-center shadow-lg"
                >
                  Under Construction
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
}