import React, { useEffect, useRef, useState } from "react";
import "./Style.scss";
import Servicescard1 from "../../assets/icons/servicesCardLogo1.svg";
import Servicescard2 from "../../assets/icons/servicesCardLogo2.svg";
import Servicescard3 from "../../assets/icons/servicesCardLogo3.svg";
import Servicescard4 from "../../assets/icons/servicesCardLogo4.svg";
import Servicescard5 from "../../assets/icons/servicesCardLogo5.svg";
import HeroSection from "../../components/HeroSection/HeroSection";
import ServicesAbout from "../../components/servicesAbout/ServicesAbout";
// import ServicesCard from '../../components/ServicesCard/ServicesCard';
import Vector from "../../assets/images/Vector4.webp";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getCurrentLanguage,
  addLanguageToPath,
  removeLanguageFromPath,
} from "../../utils/languageUtils";

export default function ServicesPage() {
  const [width, setWidth] = useState(window.innerWidth);
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
  const currentLanguage = getCurrentLanguage(pathname);
  const createLanguageAwarePath = (path) => {
    return addLanguageToPath(path, currentLanguage);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderRef = useRef(null);

  const servicescard = [
    {
      id: 1,
      title: t("servicesPage.services.service1"),
      detail: t("servicesPage.services.text1"),
      img: Servicescard1,
    },
    {
      id: 2,
      title: t("servicesPage.services.service2"),
      detail: t("servicesPage.services.text2"),
      img: Servicescard2,
    },
    {
      id: 3,
      title: t("servicesPage.services.service3"),
      detail: t("servicesPage.services.text3"),
      img: Servicescard3,
    },
    {
      id: 4,
      title: t("servicesPage.services.service4"),
      detail: t("servicesPage.services.text4"),
      img: Servicescard4,
    },
    {
      id: 5,
      title: t("servicesPage.services.service5"),
      detail: t("servicesPage.services.text5"),
      img: Servicescard5,
    },
  ];
  return (
    <>
      <HeroSection page={t("header.services")} />
      <ServicesAbout />
      <div className="vector3">
        <img src={Vector} alt="" />
      </div>
      <section id="services-cards">
        <div className="services-cards container-fluid d-flex flex-column gap-5">
          {servicescard.map((item) => (
            <div
              className="services-card d-flex flex-column"
              key={item.id}
              // data-aos="fade-right"
              // data-aos-duration="10000"
            >
              <div className="card-img">
                <img src={item.img} alt="" />
              </div>
              <div className="card-title">
                <h6 className="card-head">{item.title}</h6>
                <p className="card-detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
