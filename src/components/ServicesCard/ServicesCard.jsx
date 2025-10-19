import React from 'react';
import Servicescard1 from '../../assets/icons/ServiceCardLogo1.svg';
import Servicescard2 from "../../assets/icons/ServiceCardLogo2.svg";
import Servicescard3 from "../../assets/icons/ServiceCardLogo1.svg";
import Servicescard4 from "../../assets/icons/ServiceCardLogo1.svg";
import Servicescard5 from "../../assets/icons/ServiceCardLogo1.svg";
import "./Style.scss";
import Slider from 'react-slick';

function ServicesCard() {
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
        detail:
          "Müasir implant sistemləri və aksesuarları.",
          img: Servicescard3,
      },
      {
        id: 4,
        title: "Üz-Çənə Cərrahiyyəsi",
        detail:
          "Biomateriallar:membranlar, insan və heyvan mənşəli sümüklər",
        img: Servicescard4,
      },
      {
        id: 5,
        title: "Diş Laboratoriyaları",
        detail:
             "Biomateriallar:membranlar, insan və heyvan mənşəli sümüklər",
        img: Servicescard5,
      },
  ];
   const settings = {
     dots: true,
     infinite: false,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 4,
     initialSlide: 0,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true,
         },
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };
  return (
    <div >

      <Slider {...settings} className='row'>
      {servicescard.map((item) => (
        <div className="services-card d-flex" key={item.id}>
          <div className="card-img">
            <img src={item.img} alt="" />
          </div>
          <div className="card-title">
            <h6 className="card-head">{item.title}</h6>
            <div className="card-detail">{item.detail}</div>
          </div>
          {/* <hr /> */}
          <div className="read-more">
            <span>Daha Ətraflı</span>
            <i> v</i>
          </div>
        </div>
      ))}


      </Slider>
    </div>
  );
}

export default ServicesCard;
