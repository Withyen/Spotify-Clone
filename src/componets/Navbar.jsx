import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img className='w-8 bg-black p-2 rounded-2x1 cursor-pointer' src={assets.arrow_left} alt="" />
            <img className='w-8 bg-black p-2 rounded-2x1 cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-full hidden md:block cursor-pointer'>Explore Premium</p>
          <p className='bg-black py-1 px-3 rounded-full text-[15px]'>Install App</p>
        </div>
      </div>
    </>
  )
}

export default Navbar
