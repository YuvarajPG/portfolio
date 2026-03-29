import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 p-6 relative z-40 w-full mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <p className="text-gray-400 text-sm mt-2 text-center">
          &copy; {new Date().getFullYear()} Yuvaraj. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer