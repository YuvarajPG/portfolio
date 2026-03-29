import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-700/20 p-4  bottom-0">
      <p className="text-center text-white">
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </p>
    </div>
  )
}

export default Footer