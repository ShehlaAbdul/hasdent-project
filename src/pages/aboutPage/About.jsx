import React from 'react';
import "./Style.scss"
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import AboutSection from "../../components/aboutSection/AboutSection.jsx";
import WhyAreWe from '../../components/whyAreWe/WhyAreWe.jsx';
import Vector from "../../assets/images/Vector4.webp";

export default function About() {
  return (
    <div>
      <HeroSection page={"Haqqımızda"} />
      <AboutSection />
      <div className='vector4 position-absolute'>
        <img src={Vector} alt="" />
      </div>
      {/* <AboutSection /> */}
      <WhyAreWe/>
    </div>
  );
}
