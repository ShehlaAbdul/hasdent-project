import React from 'react';
import Logo from "../../assets/images/NavLogo.jpg"
import { Link } from 'react-router-dom';
// import SlSocialInstagram from "react-icons";
import { TbBrandFacebook } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import "./Style.scss";
import Vector from "../../assets/images/Vector1.webp"



export default function Footer() {
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
          <h2>HASDENT – Etibarın və Keyfiyyətin Adı</h2>
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
            <h5>Sürətli Keçid </h5>
            <ul className="">
              <li className="">
                <IoIosArrowForward />
                <Link to={"about"}>Haqqımzıda </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"services"}>Xidmətlər </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"about"}>Kampaniya </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"about"}>Məhsullar </Link>
              </li>{" "}
              <li>
                <IoIosArrowForward />
                <Link to={"about"}>Partnyorlar </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"contact-us"}>Əlaqə </Link>
              </li>
            </ul>
          </div>
          <div className="links col-12 col-md-6 col-lg-4">
            <h5>Məhsullar</h5>
            <ul>
              <li>
                <IoIosArrowForward />
                <Link to={"about"}>İmplantologiya </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"services"}>Ortodontiya </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"about"}>Üz-Çənə Cərrahiyyəsi </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"about"}>Terapevtik Stomatologiya </Link>
              </li>{" "}
              <li>
                <IoIosArrowForward />
                <Link to={"about"}>Diş Laboratoriyası Materialları </Link>
              </li>
              <li>
                <IoIosArrowForward />
                <Link to={"contact-us"}>Ümumi Təchizat və Ləvazimatlar </Link>
              </li>
            </ul>
          </div>
          <div className="links-2 col-12 col-md-12 col-lg-4">
            <h5>Əlaqə </h5>
            <ul className="d-flex flex-column gap-3 ">
              <li className="">
                <div className="icons-side">
                  <GrLocation />
                  <span>Ünvan:</span>
                </div>
                <p>Adil Məmmədov 11 , Binəqədi ray, Bakı Ş., Azərbaycan</p>
              </li>
              <li>
                <div className="icons-side">
                  <FiPhoneCall />
                  <span>Telefon:</span>
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
