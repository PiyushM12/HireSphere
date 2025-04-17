import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'

function Home() {
  return (
    <div>
      <Navbar/>
      {/* Adjust padding-top based on navbar height */}
        <HeroSection />
      
      <CategoryCarousel/>
      <LatestJobs/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
