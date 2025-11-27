import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import SectionHead from "../sectionHead/SectionHead";
import "./Style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Servicescard1 from "../../assets/icons/servicesCardLogo1.svg";
// import Servicescard2 from "../../assets/icons/servicesCardLogo2.svg";
// import Servicescard3 from "../../assets/icons/servicesCardLogo3.svg";
// import Servicescard4 from "../../assets/icons/servicesCardLogo4.svg";
// import Servicescard5 from "../../assets/icons/servicesCardLogo5.svg";
import Servicescard1 from "../../assets/icons/servicesCardLogo1.svg";
import Servicescard2 from "../../assets/icons/servicesCardLogo2.svg";
import Servicescard3 from "../../assets/icons/servicesCardLogo3.svg";
import Servicescard4 from "../../assets/icons/servicesCardLogo4.svg";
import Servicescard5 from "../../assets/icons/servicesCardLogo5.svg";
import Vector from "../../assets/images/Vector1.webp"

import RightArrow from "../../assets/icons/rightArrow.svg";
import LeftArrow from "../../assets/icons/leftArrow.svg";
import { MdArrowForwardIos } from "react-icons/md";
import ReadMore from "../readMore/ReadMore";
import { Link } from "react-router-dom";

export default function Services() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderRef = useRef(null);

  const servicescard = [
    {
      id: 1,
      title: "Ümumi Stomatologiya",
      detail:
        "Müalicə, restavrasiya və profilaktika, anesteziya üçün geniş çeşiddə materiallar.",
      img: Servicescard1,
    },
    {
      id: 2,
      title: "Ortodontologiya",
      detail:
        "Şəffaf elaynerlər – estetik və rahatlığı ön planda tutan müasir həllər.",
      img: Servicescard2,
    },
    {
      id: 3,
      title: "İmplantologiya",
      detail: "Müasir implant sistemləri və aksesuarları.",
      img: Servicescard3,
    },
    {
      id: 4,
      title: "Üz-Çənə Cərrahiyyəsi",
      detail: "Biomateriallar:membranlar, insan və heyvan mənşəli sümüklər",
      img: Servicescard4,
    },
    {
      id: 5,
      title: "Diş Laboratoriyaları",
      detail: "Biomateriallar:membranlar, insan və heyvan mənşəli sümüklər",
      img: Servicescard5,
    },
  ];
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,  
    speed: 500,
    slidesToShow: width <= 576 ? 1 : width <= 768 ? 2 : width <= 1048  ? 3 : 4,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <section id="services">
      <div className="services container-fluid  p-0 g-0 m-0 d-flex  flex-column gap-1 gap-md-2">
        <div className="d-flex w-100 justify-content-between  align-items-end g-0">
          <div className="d-flex flex-column gap-4">
            <SectionHead title={"Xidmətlər"} />
            <h1 className="services-head">Geniş Çeşid və Mükəmməl Xidmət</h1>
          </div>
          <div className="d-none d-md-flex align-items-end  gap-1  ">
            <img
              src={LeftArrow}
              alt=""
              onClick={() => sliderRef.current.slickPrev()}
            />
            <img
              src={RightArrow}
              alt=""
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        </div>

        <Slider {...settings} ref={sliderRef}>
          {servicescard.map((item) => (
            <div className=" card-container p-1 p-sm-2">
              <div
                className="services-card d-flex flex-column justify-content-between gap-2 gap-md-4"
                key={item.id}
              >
                <div className="card-img">
                  <img src={item.img} alt="" />
                </div>
                <div className=" d-flex flex-column h-100 justify-content-between ">
                  <div className="card-title d-flex flex-column gap-2">
                    <h6 className="card-head">{item.title}</h6>
                    <p className="card-detail">{item.detail}</p>
                  </div>
                  {/* <hr /> */}
                  <Link to={"/services"} className="read-more">
                    <span>Daha Ətraflı</span>
                    <span className="read-more-arrow">
                      <MdArrowForwardIos />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Link
          to={"/services"}
          className="w-100 text-align-center d-flex justify-content-center mt-5"
        >
          <ReadMore title={"Xidmətlər"} />
        </Link>
      </div>
        <div className="vector">
          <img src={Vector} alt="" />
      </div>
    </section>
  );
}
