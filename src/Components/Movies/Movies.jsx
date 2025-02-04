import React from 'react'
import NavBar from '../Nav'
import Footer from '../Footer'
import MovieCarousel from './MovieCarausal'
import Event from '../Home/FileEvent'
import Movie from '../Home/RenderMovie'
import MobileFooter from '../MobileFooter'

const Movies = () => {
  return (
    <div>
        <NavBar/>
        <MovieCarousel/>
        <Movie/>
        <Event/>
        <MobileFooter />
        <Footer/>
    </div>
  )
}

export default Movies