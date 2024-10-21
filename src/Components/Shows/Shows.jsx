import React from 'react'
import NavBar from '../Nav'
import Footer from '../Footer'
import ShowList from './ShowList'
import MobileFooter from '../MobileFooter'

const Shows = () => {
  return (
    <div>
        <NavBar/>
        <ShowList/>
        <MobileFooter />
        <Footer/>
    </div>
  )
}

export default Shows