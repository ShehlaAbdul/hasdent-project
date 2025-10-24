import React from "react";
import Slider from "react-slick";
import SectionHead from "../sectionHead/SectionHead";
import "./Style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Servicescard1 from "../../assets/icons/ServiceCardLogo1.svg";
import Servicescard2 from "../../assets/icons/ServiceCardLogo2.svg";
import Servicescard3 from "../../assets/icons/ServiceCardLogo1.svg";
import Servicescard4 from "../../assets/icons/ServiceCardLogo1.svg";
import Servicescard5 from "../../assets/icons/ServiceCardLogo1.svg";
import ServicesCard from "../ServicesCard/ServicesCard";

export default function Services() {
 
   
  return (
    <section id="services">
      <div className="container-fluid">
        <SectionHead title="Xidmətlər" />
        <h1 className="services-title">Geniş Çeşid və Mükəmməl Xidmət</h1>

        <div className="services-slider slider-container border">
          <ServicesCard />
        </div>
      </div>
    </section>
  );
}
