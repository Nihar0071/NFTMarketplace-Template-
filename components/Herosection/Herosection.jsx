import React from 'react'
import Image from 'next/image'

//Internal Import
import Style from "./Herosection.module.css"
import { Button } from '../componentsindex'
import images from "../../img"

const Herosection = () => {
  return (
    <div className={Style.heroSection}>
        <div className={Style.heroSection_box}>
            <div className={Style.heroSection_box_left}>
                <h1>Discover, Collect and Sell AI Gen NFT's 👾</h1>
                <p> Discover the most outstanding and genre based NFT's that are 1/1 on the planet and sell yours 
                    with greater ease of transaction.
                </p>
                <Button btnName="Start your Search for Incredible"/>
            </div>
            <div className={Style.heroSection_box_right}>
                <Image src={images.hero} alt='heroSection image' width={600} height={600}></Image>
            </div>
        </div>
    </div>
  )
}

export default Herosection