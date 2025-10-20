import React from 'react';
import "./Style.scss";
import Brends from '../../components/homeBrends/Brends';
import HeroSection from '../../components/HeroSection/HeroSection';

export default function Partners() {
  return (
    <>
      <HeroSection />
      <div className='partners'>
        <Brends />
      </div>
    </>
  );
}
