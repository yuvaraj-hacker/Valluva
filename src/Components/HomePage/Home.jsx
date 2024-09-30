import React from 'react';
import HeroSection from '../../Shared/Components/Home/HeroSection';
import Products from '../../Shared/Components/Home/MainContent';
import About from '../../Shared/Components/Home/About';
import MainContent from '../../Shared/Components/Home/MainContent';
function Home() {
  return (
    <>
      <HeroSection />
      <About/>
      <MainContent />
    </>
  )
}
export default Home
