import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import Image from 'next/image'

//Internal Import 
import Style from './Subscribe.module.css'
import Images from "../../img"
const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2> Never Miss a Drop </h2>
          <p>  Subscribe to our super-exclusive droplist and be the first one to know about the upcoming booms</p>
          <div className={Style.subscribe_box_left_box}>
            <span> 01 </span>
            <small>Get more Discount on New NFT Generations</small>
          </div>
          <div className={Style.subscribe_box_left_box}>
            <span> 02 </span>
            <small>Get Premium access to generative models</small>
          </div>
          <div className={Style.subscribe_box_left_input}>
            <input type='email' placeholder='Type your Email'/>
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon}/>
          </div>
        </div>
        <div className={Style.subscribe_box_right}>
          <Image src={Images.update} 
            alt='Update Image'
            width={600}
            height={800}
          />
        </div>
      </div>
    </div>
  )
}

export default Subscribe