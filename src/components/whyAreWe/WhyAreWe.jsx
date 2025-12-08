import React from "react";
import "./Style.scss";
import WhyAreWeLayout from "../../assets/images/WhyAreWe.webp";
import SectionHead from "../sectionHead/SectionHead";
import ReadMore from "../readMore/ReadMore";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getCurrentLanguage,
  addLanguageToPath,
  removeLanguageFromPath,
} from "../../utils/languageUtils";

export default function WhyAreWe() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
  const currentLanguage = getCurrentLanguage(pathname);
  const createLanguageAwarePath = (path) => {
    return addLanguageToPath(path, currentLanguage);
  };

  return (
    <section id="why-are-we">
      <div
        className="why-are-we container-fluid  row  g-0"
        data-aos-anchor-placement="top-center"
      >
        <div
          className=" content-side col-12 col-xl-5 d-flex flex-column gap-3 justify-content-center "
          data-aos="fade-up"
        >
          <SectionHead title={t("title.whyUs")} />
          <h1>{t("about.whyUs.title")}</h1>
          <p>{t("about.whyUs.text1")}</p>
          <p>{t("about.whyUs.text2")}</p>
          <div>
            {" "}
            {/* <ReadMore title={t("title.lookAll")} /> */}
          </div>
        </div>
        <div className="img-side col-12 col-xl-7">
          <img
            src={WhyAreWeLayout}
            alt=""
            className="rounded-5 "
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>
  );
}
