import React from 'react'
import AboutAlbumsection from './Components/AboutAlbumSection/AboutAlbumsection'
import HeroSection from './Components/HeroSection/HeroSection'
import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
      <HeroSection/>
      <AboutAlbumsection/>
    </div>
  )
}

export default Home