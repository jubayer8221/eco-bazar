import React from 'react'
import TopNabar from './TopNabar'
import MiddleNavbar from './MiddleNavbar'
import Bottom from './Bottom'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full'>
      {/* mobaile */}
      <div className='hidden pl-3 pr-3 sm:pl-[100px] sm:pr-[100px] md:pl-[140px] md:pr-[140px]'>
        <Link href="/">
          <div className=' flex items-center gap-1'>
            <Image src="/icons/logo.png" alt='' width={20} height={20} />
            <samp className='font-poppins font-medium text-[20px] leading-[20px] tracking-[-0.03em] text-[#002603]'>Ecobazar</samp>
          </div>
        </Link>
      </div>

      <div className=''>
        {/* top navbar  */}
        <TopNabar />
        {/* middel */}
        <MiddleNavbar />
        {/* bottom  */}
        <Bottom />
      </div>
    </div>
  )
}

export default Navbar
