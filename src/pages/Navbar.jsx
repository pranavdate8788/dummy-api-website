import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='w-full border-b fixed top-0 bg-white z-10'>
      <div className='max-w-7xl h-12 flex justify-between items-center px-4 mx-auto'>
        <div>
          <Link to={'/'} className='tracking-wider font-bold text-xl'>Dummy API</Link>
        </div>
        <div className='flex gap-4'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        </div>
      </div>
    </div>
  )
}
