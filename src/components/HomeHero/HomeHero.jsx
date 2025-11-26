import React, { useEffect } from 'react';
import "./Style.scss";
import ReadMore from '../readMore/ReadMore.jsx';
import HomeHeroBg from '../../assets/images/HomeHero.webp';
import Vector1 from '../../assets/images/Vector1.webp';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

export default function HomeHero() {
    // useEffect(() => {
    //   AOS.init({
    //     duration: 2000, // animasiyanın müddəti (ms)
    //     once: false, // element yalnız bir dəfə animasiya olunsun
    //   });
    // }, []);
  
  return (
    <section id="home-hero">
      {/* <div className="container-fluid row p-0 m-0 g-0">
        <div
          className="col-12 col-lg-6 d-flex flex-column justify-content-center"
          // data-aos="fade-right"
        >
          <div className="d-flex flex-column">
            <h1 className="hero-title">
              <span className="purple">HAS</span>
              <span className="yellow">DENT</span>– Etibarın və Keyfiyyətin Adı
            </h1>
            <p className="hero-text">
              1996-cı ildən stomatoloji sahədə təcrübəmiz və geniş məhsul
              çeşidimizlə, klinikalar və mütəxəssislər üçün etibarlı tərəfdaş
              olmağa davam edirik.
            </p>
          </div>
          <div>
            <Link to={"/products"}>
              <ReadMore title={"Məhsullara Bax"} />
            </Link>
          </div>
        </div>
        <div className="home-hero-img col-12 col-lg-6 m-0 g-0">
          <div className="vector ">
            <img src={Vector1} alt="" />
          </div>
          <img
            src={HomeHeroBg}
            alt=""
            className="hero-bg"
            // data-aos="fade-left"
          />
        </div>
      </div> */}
      <div className="container-fluid row   g-0">
        <div className=" col-12 col-lg-6 m-0 g-0">
          <div className="text-side">
            <h1 className="head-title">
              <span className="purple">HAS</span>
              <span className="yellow">DENT</span>- Etibarın və Keyfiyyətin Adı
            </h1>
            <p className="content">
              1996-cı ildən stomatoloji sahədə təcrübəmiz və geniş məhsul
              çeşidimizlə, klinikalar və mütəxəssislər üçün etibarlı tərəfdaş
              olmağa davam edirik.
            </p>
            <div>
              <ReadMore title={"Məhsullara bax"} />
            </div>
          </div>
        </div>
        <div className="img-side col-12 col-lg-6  ">
            <div className="vector">
              <img src={Vector1} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}
