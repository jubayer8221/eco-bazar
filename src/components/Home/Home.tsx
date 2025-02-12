import React from 'react'
import Banner from './Banner'
import BBanner from './BBanner'
import Hotdeals from './Hotdeals'
import SalesBanner from './SalesBanner'

const Home = () => {
  return (
    <div className='w-full'>
      <Banner />
      <BBanner />
      <Hotdeals />
      <SalesBanner />
    </div>
  )
}

export default Home
