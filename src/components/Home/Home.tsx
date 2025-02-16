import React from 'react'
import Banner from './Banner'
import BBanner from './BBanner'
import Hotdeals from './Hotdeals'
import FeaturedProducts from './FeaturedProducts'
import FeadBack from './FeadBack'

const Home = () => {
  return (
    <div className='w-full'>
      <Banner />
      <BBanner />
      <Hotdeals />
      <FeaturedProducts />
      <FeadBack />
    </div>
  )
}

export default Home
