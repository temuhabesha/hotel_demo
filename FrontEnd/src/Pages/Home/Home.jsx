import React from 'react'
import './Home.css'
import Header from '../../Components/Home/Header/Header'
import HeroSection from '../../Components/Home/HeroSection/HeroSection'
import WhyChooseUsSection from "../../Components/Home/WhyChooseUsSection/WhyChooseUsSection";
import RoomsPreviewSection from "../../Components/Home/RoomsPreviewSection/RoomsPreviewSection";
import GalleryPreviewSection from '../../Components/Home/GalleryPreviewSection/GalleryPreviewSection';
import TestimonialsSection from '../../Components/Home/TestimonialsSection/TestimonialsSection';
import FinalCallToAction from '../../Components/Home/FinalCallToAction/FinalCallToAction';
import ContactSection from '../../Components/Home/ContactSection/ContactSection';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <WhyChooseUsSection/>
      <RoomsPreviewSection/>
      <GalleryPreviewSection/>
      <TestimonialsSection/>
      <FinalCallToAction/>
      <ContactSection/>
    </div>
  )
}

export default Home
