import React from "react";
import "./Style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Brend1 from "../../assets/brands/brend1.webp";
import Brend2 from "../../assets/brands/brend2.webp";
import Brend3 from "../../assets/brands/brend3.webp";
import Brend4 from "../../assets/brands/brend4.webp";
import Brend5 from "../../assets/brands/brend5.webp";
import Brend6 from "../../assets/brands/brend6.webp";

export default function Brends() {
  const brands = [
    {
      id: 1,
      img: Brend1,
    },
    {
      id: 2,
      img: Brend2,
    },
    {
      id: 3,
      img: Brend3,
    },
    {
      id: 4,
      img: Brend4,
    },
    {
      id: 5,
      img: Brend5,
    },
    {
      id: 6,
      img: Brend6,
    },
  ];
  return (
    <section id="brands">
      <div className="brands-container ">
        <div className="brands-list-desktop d-none d-md-block">
          <Swiper
            slidesPerView={5}
            spaceBetween={40}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            modules={[Autoplay]}
            className="brands-slider"
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <img src={brand.img} alt={`brand-${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="brands-list-mobile d-block d-md-none">
          {brands.map((brand) => (
            <div className="brand-item" key={brand.id}>
              <img src={brand.img} alt={`brand-${brand.id}`} className="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
