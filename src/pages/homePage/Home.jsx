import React from 'react';
import HomeHero from '../../components/HomeHero/HomeHero.jsx';
import Services from '../../components/servicesSec/Services.jsx';
import ContactUs from '../../components/contactUsSec/ContactUs.jsx';
import Brends from '../../components/homeBrends/Brends.jsx';
import BestSeller from '../../components/homeBestSeller/BestSeller.jsx';

export default function Home() {
  return (
    <div className="">
      <HomeHero />

      <BestSeller />
      <Brends />
      <ContactUs />
      {/* <Services /> */}
    </div>
  );
}
