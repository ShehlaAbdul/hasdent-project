import React, { useEffect, useState } from "react";
import "./Style.scss";
import Brends from "../../components/homeBrends/Brends";
import HeroSection from "../../components/HeroSection/HeroSection";
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
import axios from "axios";

export default function Partners() {
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
  const [loading, setLoading] = useState(true)
  const [partners, setPartners] = useState([])
   useEffect(() => {
     axios
       .get("https://manager.hasdent.az/api/partners") // <-- API URL
       .then((res) => {
         setPartners(res.data.data);
       })
       .catch((err) => {
         console.log("Error:", err);
       })
       .finally(() => {
         setLoading(false);
       });
   }, []);
  
  if (loading) {
    return <p className="text-center mt-5">Yüklənir...</p>;
  }
  
  return (
    <>
      <HeroSection page={"Partnyorlar"} />
      <section id="partners">
        <div className="brands-container ">
          <div className="brands-list-desktop d-none d-md-block">
            <Swiper
              slidesPerView={6}
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
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 6,
                  spaceBetween: 40,
                },
              }}
            >
              {[...partners, ...partners].map((brand, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`https://manager.hasdent.az${brand.logo}`}
                    alt={`brand-${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="brands-list-mobile d-block d-md-none">
            {partners.map((brand) => (
              <div className="brand-item" key={brand.id}>
                <img src={brand.img} alt={`brand-${brand.id}`} className="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
