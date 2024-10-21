import React from 'react'
import NavBar from '../Nav'
import Footer from '../Footer'
import Carausal from '../Movies/MovieCarausal'
import Chennel from './Chennel'
import MobileFooter from '../MobileFooter'

const Live = () => {
  return (
    <div>
        <NavBar/>
        <Chennel/>
        <Carausal/>
        <MobileFooter />
        <Footer/>
    </div>
  )
}

export default Live