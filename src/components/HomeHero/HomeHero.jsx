import React from 'react';
import "./Style.scss";
import ReadMore from '../readMore/ReadMore.jsx';
import HomeHeroBg from '../../assets/images/HomeHeroBg.webp';
import Vector1 from '../../assets/images/Vector1.webp';

export default function HomeHero() {
  return (
    <section id="home-hero">
      <div className="container-fluid row p-0 m-0  vh-100 g-0 ">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center  gap-2 mb-5">
          <h1 className="hero-title">
            <span className="purple">HAS</span>
            <span className="yellow">DENT</span>
          – Etibarın və Keyfiyyətin Adı
          </h1> 
          <p className='hero-text'>
            1996-cı ildən stomatoloji sahədə təcrübəmiz və geniş məhsul
            çeşidimizlə, klinikalar və mütəxəssislər üçün etibarlı tərəfdaş
            olmağa davam edirik.
          </p>
          <ReadMore title={"read more"} />
        </div>
        <div className="col-12 col-md-6 home-hero-img m-0 p-0 ">
        <div className="vector d-none  d-xl-block ">
          <img src={Vector1} alt="" />
        </div>
          <img src={HomeHeroBg} alt="" className='hero-bg' />
        </div>
      </div>
    </section>
  );
}
