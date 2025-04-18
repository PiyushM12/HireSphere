import React from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './Footer';
import ParallaxSection from './ParallexSection';


function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <ParallaxSection /> Inserted Parallax Section */}
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  );
}

export default Home;
