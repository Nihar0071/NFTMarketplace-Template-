import React from 'react'


//Internal Import 
import Style from './Title.module.css'
const Title = ({heading, paragraph}) => {
  return (
    <div className={Style.Title}>
        <div className={Style.Title_box}>
            <h2>{heading}</h2>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default Title