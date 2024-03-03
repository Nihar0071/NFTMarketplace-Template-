import React from 'react'
import Image from 'next/image';
import { TiSocialFacebook , TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube,TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp} from "react-icons/ti";
import {RiSendPlaneFill} from 'react-icons/ri';
import {Discover, HelpCenter} from '../NavBar/index';
//Internal Import 
import images from '../../img'
import Style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt='Footer_logo' height={100} width={100}/>
          <p> The Worlds first AI enabled digital marketplace for crypto, collectibles and non-fungible tokens(NFTs).
            Buy, Sell, and Bid on exclusive digital items. </p>
            <div className={Style.footer_social}>
                <a href='#'>
                  <TiSocialFacebook/>
                </a>
                <a href='#'>
                  <TiSocialInstagram/>
                </a>
                <a href='#'>
                  <TiSocialLinkedin/>
                </a>
                <a href='#'>
                  <TiSocialTwitter/>
                </a>
                <a href='#'>
                  <TiSocialYoutube/>
                </a>
            </div>
            <div className={Style.footer_box_discover}>
              <h3>Discover</h3>
              <Discover/>
            </div>
            <div className={Style.footer_box_help}>
              <h3>HelpCenter</h3>
              <HelpCenter/>
            </div>
            <div className={Style.subscribe}>
              <h3>Subscribe</h3>
              
              <div className={Style.subscribe_box}>
                <input type='email' placeholder='Enter Your Email'/>
                <RiSendPlaneFill className={Style.subscribe_box_send}/>
              </div>
              <div className={Style.subscribe_box_info}>
                <p>
                  Discover, Collect, and sell extraordinary NFTs, that contain a pinch of AI to make it more unique and manageable than others.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer