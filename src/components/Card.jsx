import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import {Info} from './Info'
function Card() {
  return (
    <div>
        <Header></Header>
        <Info></Info>
        <Footer></Footer>
    </div>
  )
}

export {Card}