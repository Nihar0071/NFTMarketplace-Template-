import React from 'react'
import Image from 'next/image'

//Internal Import
import Style from "./Services.module.css"
import images from "../../img"
const Services = () => {
  return (
    <div className={Style.service}>
         <div className={Style.service_box}>
            <div className={Style.service_box_item}>
                <Image src={images.service1}
                    alt='Filter and Discover '
                    width={100}
                    height={100}
                />
                <p className={Style.service_box_item_step}>
                    <span> Step 1</span>
                </p>
                <h3>Filter and Discover</h3>
                <p>
                    Connect with wallet, Discover, buy NFTs, and Sell your NFTs to Earn Money
                </p>
            </div>
            <div className={Style.service_box_item}>
                <Image src={images.service2}
                    alt='Connect Wallet '
                    width={100}
                    height={100}
                />
                <p className={Style.service_box_item_step}>
                    <span> Step 2</span>
                </p>
                <h3>Connect Wallet</h3>
                <p>
                    Connect with wallet and get started with trading your NFTs
                </p>
            </div>
            <div className={Style.service_box_item}>
                <Image src={images.service3}
                    alt='Start Trading '
                    width={100}
                    height={100}
                />
                <p className={Style.service_box_item_step}>
                    <span> Step 3</span>
                </p>
                <h3>Start Trading</h3>
                <p>
                    Explore the most unique AI generated NFTs which are one of a kind.
                </p>
            </div>
            <div className={Style.service_box_item}>
                <Image src={images.service4}
                    alt='Mining'
                    width={100}
                    height={100}
                />
                <p className={Style.service_box_item_step}>
                    <span> Step 4</span>
                </p>
                <h3>CryptoCurrency Attachment</h3>
                <p>
                   A unique CryptoCurrency of your choice attached to your AI Generated NFT
                </p>
            </div>
         </div>
    </div>
  )
}

export default Services