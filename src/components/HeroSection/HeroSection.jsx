import React, { useEffect } from 'react';
import './Style.scss';
import { IoIosArrowForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";


export default function HeroSection({page}) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animasiyanın müddəti (ms)
      once: false, // element yalnız bir dəfə animasiya olunsun
    });
  }, []);
  return (
    <section id="hero-sec" data-aos="fade-up">
      <div className="hero-sec">
        <div className="hero-text h-100 d-flex flex-column gap-1 justify-content-center align-items-center text-center text-white ">
          <h2 className="fs-4 fs-md-2">{page} </h2>
          <div className="d-flex  gap-md-3 ">
            <p>Ana Səhifə </p>
            <span>
              <IoIosArrowForward />
            </span>
            <p>{page}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
