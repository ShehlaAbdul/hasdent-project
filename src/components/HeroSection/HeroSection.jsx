import React, { useEffect } from 'react';
import './Style.scss';
import { IoIosArrowForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";


export default function HeroSection({page}) {

  return (
    <section id="hero-sec">
      <div className="hero-sec">
        <div
          className="hero-text h-100 d-flex flex-column gap-0 gap-md-2 justify-content-center align-items-center text-center text-white"
          data-aos="fade-up"
        >
          <h2 className="">{page} </h2>
          <div className="d-flex gap-1 gap-md-3">
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
