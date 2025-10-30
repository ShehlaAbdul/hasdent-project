import React, { useEffect, useState } from "react";
import "./Style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
// import { IoIosArrowForward } from "react-icons/io";

import Card1 from "../../assets/images/BestSellerCard.webp";
import "swiper/css";
import "swiper/css/autoplay";
import SectionHead from "../sectionHead/SectionHead";
import ReadMore from "../readMore/ReadMore";
import Slider from "react-slick";

export default function BestSeller() {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
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
    arrows: false,
    infinite: false,
    speed: 500,
    arrows:false,
    slidesToShow: width <= 576 ? 1 : width <= 768 ? 2 : width <= 992 ? 3 : 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
