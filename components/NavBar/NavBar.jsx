import React, {useEffect,useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import Icon 

import {MdNotifications} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import {CgMenuLeft, CgMenuRight} from "react-icons/cg";


//Internal Import 

import Style from "./NavBar.module.css";
import {Discover, HelpCenter, Notification, Profile, Sidebar} from "./index";
import { Button } from '../componentsindex';
import images from "../../img";
import  ST  from 'next/dist/shared/lib/utils';

const NavBar = () => { 
  const [isDiscoveropen, setDiscover] = useState(false);
  const [isHelpCenteropen, setHelpCenter] = useState(false);
  const [isNotificationsopen, setNotifications] = useState(false);
  const [isProfileopen, setProfile] = useState(false);
  const [isopensidemenu, setopensidemenu] = useState(false);
  
  const openMenu = (e)=>{
    const btnText = e.target.innerText;
    if(btnText=="Discover"){
      setDiscover(true);
      setHelpCenter(false);
      setNotifications(false);
      setProfile(false);
    }else if(btnText=="HelpCenter"){
      setDiscover(false);
      setHelpCenter(true);
      setNotifications(false);
      setProfile(false);
    }
    else{
      setDiscover(false);
      setHelpCenter(false);
      setNotifications(true);
      setProfile(false);
    }

  }
  const openNotifications =()=>{
    if(!isNotificationsopen){
      setNotifications(true);
      setDiscover(false);
      setHelpCenter(false);
      setProfile(false);
    } else{
      setNotifications(false);
    }
  };
  const openProfile = ()=>{
    if(!isProfileopen){
      setProfile(true);
      setDiscover(false);
      setHelpCenter(false);
      setNotifications(false);
    }else {
      setProfile(false);
    }
  };
  const openSidebar=()=> {
    if(!isopensidemenu){
      setopensidemenu(true);
    }else{
      setopensidemenu(false);
    }
  }
  
  return (
    <div className={Style.navBar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} alt='NFT MarketPlace' width={100} height={100}/>
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type='text' placeholder='Search NFT'/>
              <BsSearch onClick={()=>{}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        {/* End of Left Section */}
        <div className={Style.navbar_container_right}>
          {/* DISCOVER  Menu */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover </p>
            {isDiscoveropen && (
            <div className={Style.navbar_container_right_discover_Box}>
            <Discover/>
            </div>
            )}
          </div>

          {/* HelpCenter */}
          <div className={Style.navbar_container_right_helpcenter}>
            <p onClick={(e)=> openMenu(e)}> HelpCenter</p>
            {isHelpCenteropen && (
              <div className={Style.navbar_container_right_helpcenter_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* Notification Bar */}
          <div className={Style.navbar_container_right_notifications}>
            <MdNotifications className={Style.notify} onClick={()=> openNotifications()}/>
            {isNotificationsopen && <Notification/>}
          </div>
          {/* Create Button Sections  */}
          <div className={Style.navbar_right_button}>
            <Button btnText="Create" handleClick={()=>{}}/>

          </div>
          {/* USER Profile */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image src={images.user1}
              alt = "Profile"
              width={40}
              height={40}
              onClick={()=> openProfile()}
              className={Style.navbar_container_right_profile}
              />
              {isProfileopen && <Profile/>}
            </div>
          </div>
          {/* Menu Button */}
          <div className={Style.navbar_container_right_menubtn}>
            <CgMenuRight className={Style.menuIcon}
            onClick={()=> openSidebar()}
            />
          </div>
        </div>
      </div> 
      {/* SIDEBAR Component */}
      {
        isopensidemenu &&(
          <div className={Style.Sidebar}>
            <Sidebar setopensidemenu = {setopensidemenu}/>
          </div>
        )
      }
    </div>
  )
};

export default NavBar;