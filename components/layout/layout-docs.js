import Header from 'components/header'
import Link from 'next/link'
import React from 'react'

const LayoutDocs = ({ children, title, description }) => {
  return (
    <>
      <Header />
      <div className='flex max-w-[90rem] pt-20 ml-0 sm:ml-[15rem] md:ml-80'>
        <div className='flex-1 min-w-0'>
          <div className='px-4 md:px-10 max-w-3xl'>
            <div className='min-h-[76vh] mt-10 docs-content'>
              <h1 className='text-4xl md:text-5xl font-bold font-roboto'>{title}</h1>
              <p className='text-base md:text-xl mt-4'>{description}</p>
              <div className='mt-10'>
                <Link href='/components/alert' passHref>Alert</Link>
                <br />
                <Link href='/components/button' passHref>Button</Link>
                {children}
              </div>
            </div>
            <footer>Footer</footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default LayoutDocs
