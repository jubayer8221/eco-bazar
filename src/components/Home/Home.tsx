import React from 'react'
import Banner from './Banner'
import BBanner from './BBanner'
import Hotdeals from './Hotdeals'

const Home = () => {
  return (
    <div className='w-full'>
      <Banner />
      <BBanner />
      <Hotdeals />
    </div>
  )
}

export default Home
