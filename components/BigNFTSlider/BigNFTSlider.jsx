import React, {useEffect,useState,useCallback} from 'react'
import Image from 'next/image'
import {AiFillFire, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { MdVerified, MdTimer } from 'react-icons/md'
import { TbArrowBigLeftLine, TbArrowBigRightLine } from 'react-icons/tb'


//Internal Import
import Style from "./BigNFTSlider.module.css"
import images from "../../img"
import { Button  } from '../componentsindex'
const BigNFTSlider = () => {

    const [idNumber, setidNumber] = useState(0)
    const SliderData =[
        {
            title: "Hello NFT",
            id: 0,
            name: "Nihar Patel",
            collection: "Football",
            price: "000066466660 ETH",
            like :"243",
            image: images.user1,
            nftImage: images.nft_image_1,
            time:{
                days: 16,
                hours: 11,
                minutes: 8,
                seconds: 4,
            }
        },
        {
            title: "Second NFT",
            id: 1,
            name: "Sweetie",
            collection: "Love",
            price: "000066462660 ETH",
            like :"2412",
            image: images.user2,
            nftImage: images.nft_image_2,
            time:{
                days: 14,
                hours: 11,
                minutes: 4,
                seconds: 2,
            }
        },
        {
            title: "third NFT",
            id: 2,
            name: "Romi Patel",
            collection: "Tennis",
            price: "00006649860 ETH",
            like :"122",
            image: images.user3,
            nftImage: images.nft_image_3,
            time:{
                days: 16,
                hours: 11,
                minutes: 12,
                seconds: 22,
            }
        },
        {
            title: "4th NFT",
            id: 3,
            name: "Dabbu Patel",
            collection: "Games",
            price: "00006643260 ETH",
            like :"122",
            image: images.user4,
            nftImage: images.nft_image_4,
            time:{
                days: 16,
                hours: 11,
                minutes: 12,
                seconds: 22,
            }
        },

    ]

  return (
    <div className={Style.bigNFTSlider}>
        <div className={Style.bigNFTSlider_box}>
            <div className={Style.bigNFTSlider_box_left}>
                <h2>{SliderData[idNumber].title} </h2>
                <div className={Style.bigNFTSlider_box_left_creator}>
                    <div className={Style.bigNFTSlider_box_left_creator_profile}>
                        <Image className={Style.bigNFTSlider_box_left_creator_profile_img}
                            src={SliderData[idNumber].image} 
                            alt='Profile Image' 
                            width={50} 
                            height={50}
                        /> 
                        <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                            <p> Creator </p>
                            <h4>{SliderData[idNumber].name} <span><MdVerified/></span></h4>
                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_creator_collection}>
                        <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon}/>
                        <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                            <p>Collection</p>
                            <h4>{SliderData[idNumber].collection}</h4>
                        </div>
                    </div>
                </div>
                <div className={Style.bigNFTSlider_box_left_bidding}>
                    <div className={Style.bigNFTSlider_box_left_bidding_box}>
                        <small>Current bid</small>
                        <p>{SliderData[idNumber].price} <span>$2222,222</span></p>
                    </div>
                    <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                        <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon}/>
                        <span>Auction ending in</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigNFTSlider