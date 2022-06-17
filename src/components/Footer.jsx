import React from 'react'
import link from './linkedin.png'
import insta from './insta.png'
function Footer() {
  return (
    <div>
        <div><img src={link} alt="link" />Yaretas24</div>
        <div><img src={insta} alt="insta" />Yaretas24</div>
    </div>
  )
}

export {Footer}