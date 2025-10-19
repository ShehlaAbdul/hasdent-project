import React from 'react';
import './Style.scss';
import { IoIosArrowForward } from "react-icons/io";


export default function HeroSection() {
  return (
    <section id="hero-sec">
      <div className="hero-sec  ">
        <div className="hero-text h-100 d-flex flex-column gap-1 justify-content-center align-items-center text-center text-white ">
          <h2 className='fs-4 fs-md-2'>Haqqımızda </h2>
          <div className="d-flex  gap-md-3 ">
            <p>Ana Səhifə </p>
            <span>
              <IoIosArrowForward /> 
            </span>
            <p>Haqqımızda</p>
          </div>
        </div>
      </div>
    </section>
  );
}
