import React, { useEffect, useState } from 'react';
import "./Style.scss";
import ReadMore from '../readMore/ReadMore.jsx';
import HomeHeroBg from '../../assets/images/HomeHero.webp';
import Vector1 from '../../assets/images/Vector1.webp';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link,useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import {
  getCurrentLanguage,
  addLanguageToPath,
  removeLanguageFromPath,
} from "../../utils/languageUtils";


export default function HomeHero() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
  const currentLanguage = getCurrentLanguage(pathname);
  const createLanguageAwarePath = (path) => {
    return addLanguageToPath(path, currentLanguage);
  };
  // /////////
  const [randomProduct, setRandomProduct] = useState(null);

  useEffect(() => {
    fetch("https://manager.hasdent.az/api/products")
      .then((res) => res.json())
      .then((res) => {
        const products = res.data;
        setRandomProduct(products[Math.floor(Math.random() * products.length)]);
      });
  }, []);
 

  return (
    <section id="home-hero">
      <div className="container-fluid row   g-0">
        <div className=" col-12 col-lg-6 m-0 g-0">
          <div className="text-side">
            <h1 className="head-title">
              <span className="purple">HAS</span>
              <span className="yellow">DENT</span>
              {t("home.heroSection.title")}
            </h1>
            <p className="content">{t("home.heroSection.text")}</p>
            <div>
              {randomProduct && (
                <Link
                  to={createLanguageAwarePath(
                    `/products/${randomProduct.categoryID}/${randomProduct.subcategoryID}`
                  )}
                >
                  <ReadMore title={t("btn.readMore")} />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="img-side col-12 col-lg-6  ">
          <div className="vector">
            <img src={Vector1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
