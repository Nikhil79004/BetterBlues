"use client"
import React from 'react'

const Navbar = () => {
  const navItems = ['Home', 'About', 'Latest Causes', 'Social Events', 'Blog', 'Contact'];

  return (
    <nav className='flex items-center justify-between p-6'>
      <div>
        <img src="/betterblues-logo.png" alt="BetterBlues Logo" className="h-20 w-auto" />
      </div>

      <div className='flex gap-8 items-center text-blue-900'>
        {navItems.map((item, index) => (
          <h3 key={index} className='text-lg font-medium cursor-pointer hover:text-fuchsia-700 transition'>
            {item}
          </h3>
        ))}

        <button className='bg-green-500 hover:bg-green-600 transition rounded-lg font-semibold text-lg px-7 py-2 text-white'>
          Donate
        </button>
      </div>
    </nav>
  )
}

export default Navbar;


