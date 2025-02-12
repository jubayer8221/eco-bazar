import React from 'react'
import TopNabar from './TopNabar'
import MiddleNavbar from './MiddleNavbar'
import Bottom from './Bottom'

const Navbar = () => {
  return (
    <div className='w-full'>
        {/* mobaile */}

        {/* top navbar  */}
      <TopNabar />
      {/* middel */}
      <MiddleNavbar />
      {/* bottom  */}
      <Bottom />
    </div>
  )
}

export default Navbar
