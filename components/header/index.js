import React from 'react'
import Hamburger from 'components/hamburger'
import Link from 'next/link'

// Context

const Header = () => {
  return (
    <header className='fixed w-full z-50 border-b-2 border-black bg-gray-50/70 backdrop-blur-sm'>
      <div className='h-16'>
        <div className='flex items-center justify-between w-full h-full px-6'>
          <div className='flex items-center justify-start'>
            <Hamburger />
            <Link href='/' className='no-underline font-medium text-lg' passHref>
              Development tools
            </Link>
          </div>
          <span className='text-xs px-3 py-[5px] rounded-md bg-black text-white'>Version 2.0</span>
        </div>
      </div>
    </header>
  )
}

export default Header
