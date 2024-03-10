import React from 'react'

import Style from '../styles/index.module.css'
import { Herosection, Services, BigNFTSlider } from '@/components/componentsindex'
const Home = () => {
  return (
    <div className='Style.Homepage'>
      <Herosection/>
      <Services/>
      <BigNFTSlider/>
    </div>
  )
}

export default Home 