import React from 'react'

import Style from '../styles/index.module.css'
import { Herosection, Services } from '@/components/componentsindex'
const Home = () => {
  return (
    <div className='Style.Homepage'>
      <Herosection/>
      <Services/>
    </div>
  )
}

export default Home 