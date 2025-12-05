import React, { useEffect, useRef, useState } from 'react';
// import Logo from "../../assets/images/NavLogo.jpg"
import Logo from "../../assets/images/NavLogo.webp";
import { Link, useLocation } from 'react-router-dom';
// import SlSocialInstagram from "react-icons";
import { TbBrandFacebook } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import "./Style.scss";
import Vector from "../../assets/images/Vector1.webp";
import { useTranslation } from 'react-i18next';
import {
  addLanguageToPath,
  getCurrentLanguage,
  removeLanguageFromPath,
} from "../../utils/languageUtils";


export default function Footer() {
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
    <footer>
      <div className="vector ">
        <img src={Vector} alt="" />
      </div>
      <div className="vector-2 ">
        <img src={Vector} alt="" />
      </div>
      <div className="vector-3 ">
        <img src={Vector} alt="" />
      </div>
      <div className="footer row  m-0 g-0 ">
        <div className="logo-side col-12  col-lg-3 d-flex flex-column gap-3  m-0 p-0  ">
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <h2>{t("footer.logoTitle")}</h2>
          <div className="footer-icons pb-5">
            <span>
              <Link to={"/"}>
                <IoLogoInstagram />
              </Link>
            </span>
            <span>
              <Link to={"/"}>
                <TbBrandFacebook />
              </Link>
            </span>
          </div>
        </div>

        <div className="title-side col-12 col-lg-9 row  ">
          <div className="links col-12 col-md-6 col-lg-4 d-flex flex-column ">
            <h5>{t("footer.quickLinks")}</h5>
            <ul className="">
              <li className="">
                <IoIosArrowForward />
                <Link to={"about"}>{t("header.aboutUs")} </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"services"}>{t("header.services")} </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"/news"}>{t("header.news")} </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"/"}>{t("header.products")} </Link>
              </li>{" "}
              <li>
                <IoIosArrowForward />
                <Link to={"about"}>{t("header.partners")} </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"contact-us"}>{t("header.contact")} </Link>
              </li>
            </ul>
          </div>
          <div className="links col-12 col-md-6 col-lg-4">
            <h5>{t("footer.products")}</h5>
            <ul>
              <li>
                <IoIosArrowForward />
                <Link to={"about"}>{t("footer.categories.category1")} </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"services"}>{t("footer.categories.category2")} </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"about"}>{t("footer.categories.category3")} </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"about"}>{t("footer.categories.category4")} </Link>
              </li>{" "}
              <li>
                <IoIosArrowForward />
                <Link to={"about"}>{t("footer.categories.category5")} </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"contact-us"}>
                  {t("footer.categories.category6")}{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="links-2 col-12 col-md-12 col-lg-4">
            <h5> {t("footer.contactUs")} </h5>
            <ul className="d-flex flex-column gap-3 ">
              <li className="">
                <div className="icons-side">
                  <GrLocation />
                  <span>{t("footer.loc")}</span>
                </div>
                <p>{t("footer.locName")}</p>
              </li>
              <li>
                <div className="icons-side">
                  <FiPhoneCall />
                  <span>{t("footer.phone")}</span>
                </div>
                <div className="d-flex flex-column">
                  <span>+994124479797</span>
                  <span>+994553591400</span>
                </div>
              </li>
              <li>
                <div className="icons-side">
                  <MdOutlineMail />
                  <span>E-mail: </span>
                </div>
                <p>info@hasdent.az</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
