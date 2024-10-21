import React from 'react'
import NavBar from '../Nav'
import Channels from './ChannelCard'
import ChannelList from './ChannelList'
import MobileFooter from '../MobileFooter'
import Footer from '../Footer'

const Channel = () => {
  return (
    <div>
        <NavBar/>
        <ChannelList/>
        <Channels/>
        <MobileFooter />
        <Footer/>
    </div>
  )
}

export default Channel