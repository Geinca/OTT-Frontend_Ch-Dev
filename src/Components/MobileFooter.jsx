import React from 'react'
import './MobileFooter.css'
import { Link } from 'react-router-dom'

const MobileFooter = () => {
  return (
    <div id='mobileFooter'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movie">Movies</Link>
        </li>
        <li>
          <Link to="/show">Shows</Link>
        </li>
        <li>
          <Link to="/live" style={{color:'red'}}>Live</Link>
        </li>
        <li>
          <Link to="/channel">Channels</Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileFooter
