import React, { useEffect, useRef, useState } from 'react';
import "./Style.scss"
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import AboutSection from "../../components/aboutSection/AboutSection.jsx";
import WhyAreWe from '../../components/whyAreWe/WhyAreWe.jsx';
import Vector from "../../assets/images/Vector4.webp";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getCurrentLanguage,
  addLanguageToPath,
  removeLanguageFromPath,
} from "../../utils/languageUtils";


export default function About() {
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

  return (
    <div>
      <HeroSection page={t("header.aboutUs")} />
      <AboutSection />
      <div className="vector4 position-absolute">
        <img src={Vector} alt="" />
      </div>
      {/* <AboutSection /> */}
      <WhyAreWe />
    </div>
  );
}
