import React from "react";
import "./Style.scss";
import ContactBg from "../../assets/images/HomeContact.webp";
import Vector from "../../assets/images/Vector3.webp";
import ReadMore from "../readMore/ReadMore";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getCurrentLanguage,
  addLanguageToPath,
  removeLanguageFromPath,
} from "../../utils/languageUtils";

export default function ContactUs() {
    const { t, i18n } = useTranslation();
    const { pathname } = useLocation();
    // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
    const currentLanguage = getCurrentLanguage(pathname);
    const createLanguageAwarePath = (path) => {
      return addLanguageToPath(path, currentLanguage);
    }; 
  return (
    <section id="contact-us">
      <div className="contact-us container-fluid  row  g-0">
        <div className="content-side col-12 col-md-6">
          <div className="vector">
            <img src={Vector} alt="" />
          </div>
          <div className="vector2">
            <img src={Vector} alt="" />
          </div>
          <div className="content d-flex flex-column h-100  justify-content-center gap-3 ">
            <h1>{t("home.contactUsSec.title")} </h1>
            <p>{t("home.contactUsSec.text")}</p>
            <Link to={"contact-us"}>
              <ReadMore title={"Əlaqə"} />
            </Link>
          </div>
        </div>
        <div className="img-side col-12 col-md-6 m-0 ">
          <img src={ContactBg} alt="" className="rounded-end-5" />
        </div>
      </div>
    </section>
  );
}
