import React from 'react';
import "./Style.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules"; 
// import { IoIosArrowForward } from "react-icons/io";

import Card1 from "../../assets/images/BestSellerCard.webp";
import "swiper/css";
import "swiper/css/autoplay";
import SectionHead from '../sectionHead/SectionHead';
import ReadMore from '../readMore/ReadMore';
import Slider from 'react-slick';



export default function BestSeller() {
    const products = [
      {
        id: 1,
        img: Card1,
        title: "Artinibsa 4% local anaesthesia",
        desc: "Məhsul haqqında məlumat",
      },
      {
        id: 2,
        img: Card1,
        title: "Artinibsa 4% local anaesthesia",
        desc: "Məhsul haqqında məlumat",
      },
      {
        id: 3,
        img: Card1,
        title: "Artinibsa 4% local anaesthesia",
        desc: "Məhsul haqqında məlumat",
      },
      {
        id: 4,
        img: Card1,
        title: "Artinibsa 4% local anaesthesia",
        desc: "Məhsul haqqında məlumat",
      },
      {
        id: 5,
        img: Card1,
        title: "Artinibsa 4% local anaesthesia",
        desc: "Məhsul haqqında məlumat",
      },
  ];
   const settings = {
     dots: true,
     infinite: true,
     speed: 1000,
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2500,
     arrows: true,
     responsive: [
       { breakpoint: 992, settings: { slidesToShow: 3 } },
       { breakpoint: 768, settings: { slidesToShow: 2 } },
       { breakpoint: 576, settings: { slidesToShow: 1 } },
     ],
   };
  return (
    <section id="bestseller">
      <div className="bestseller">
        <div className="">
          <SectionHead title={"Məhsullar"} />
          <div className="d-flex justify-content-between">
            <h1 className="py-4 fs-2 ">Ən çox seçilən məhsullar</h1>
            <Link to="/products" className="d-none d-md-block">
              {" "}
              <ReadMore title={"Hamısına Bax"} />
            </Link>
          </div>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {products.map((product) => (
              <div className="p-2">
                <div key={product.id} className="bestseller-card">
                  <img src={product.img} alt={product.title} />
                  <div className="content-side">
                    <h5>{product.title}</h5>
                    <p>{product.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Link to={"/products"} className="d-block d-md-none pt-5">
          <ReadMore title={"Hamısına bax "} />
        </Link>
      </div>
    </section>
  );
}
