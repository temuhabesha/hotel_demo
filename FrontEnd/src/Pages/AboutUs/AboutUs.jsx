import React from 'react'
import './AboutUs.css'
import AboutHeroSection from '../../Components/About/AboutHeroSection/AboutHeroSection'
import OurStorySection from '../../Components/About/OurStorySection/OurStorySection'
import WhyChooseUsSection from '../../Components/Home/WhyChooseUsSection/WhyChooseUsSection'
import GalleryPreviewSection from '../../Components/Home/GalleryPreviewSection/GalleryPreviewSection'
import TestimonialsSection from '../../Components/Home/TestimonialsSection/TestimonialsSection'
import FinalCallToAction from '../../Components/Home/FinalCallToAction/FinalCallToAction'

const AboutUs = () => {
  return (
    <div>
      <AboutHeroSection/>
      <OurStorySection/>
      <WhyChooseUsSection/>
      <GalleryPreviewSection/>
      <TestimonialsSection/>
      <FinalCallToAction/>
    </div>
  )
}

export default AboutUs
