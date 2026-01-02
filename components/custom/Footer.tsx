import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-200 dark:bg-black p-4  bottom-0">
      <p className="text-center text-gray-700 dark:text-gray-300">
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </p>
    </div>
  )
}

export default Footer