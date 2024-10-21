import React from 'react'
import NavBar from '../Nav'
import ShowCase from './Showcase'
import FestivalShowcase from './FestivalShowcase'
import Events from './FileEvent'
import RenderChar from './RenderCharCard'
import RederMovie from './RenderMovie'
import MobileFooter from '../MobileFooter'
import Footer from '../Footer'

const Home = () => {
  // let screenWidth = window.innerWidth;
  // screenWidth = 600;
  // console.log(screenWidth);
  
  return (
    <div>
      <NavBar />
      <ShowCase />
      <FestivalShowcase />
      <Events />
      <RenderChar />
      <RederMovie />
      <MobileFooter />
      <Footer />
    </div>
  )
}

export default Home