import "./Style.scss";
import ServicesImg from "../../assets/images/ServicesLayout.webp";
import SectionHead from "../sectionHead/SectionHead";
import Vector from "../../assets/images/Vector4.webp";
import ReadMore from "../readMore/ReadMore";
import  { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getCurrentLanguage,
  addLanguageToPath,
  removeLanguageFromPath,
} from "../../utils/languageUtils";

export default function ServicesAbout() {
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
    <section id="services-about">
      <div className="vector">
        <img src={Vector} alt="" />
      </div>

      <div
        className="services-about container-fluid  row  g-0 "
        data-aos-anchor-placement="top-center"
      >
        <div className="col-12 col-lg-6 img-side  g-0 m-0 ">
          <img
            src={ServicesImg}
            alt=""
            className="rounded-5"
            data-aos="fade-right"
          />
        </div>
        <div
          className="col-12 col-lg-6 title-side d-flex flex-column gap-3"
          data-aos="fade-left"
        >
          <SectionHead title={"Xidmətlər"} />
          <h1>{t("servicesPage.title")}</h1>
          <p>{t("servicesPage.text")}</p>
        </div>
        <div className="pt-2 d-block d-lg-none">
          <Link>
            <ReadMore title={"Məhsullara bax"} />
          </Link>
        </div>
      </div>
    </section>
  );
}
