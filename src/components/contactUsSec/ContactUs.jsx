import React from "react";
import "./Style.scss";
import ContactBg from "../../assets/images/HomeContact.webp";
import Vector from "../../assets/images/Vector3.webp";
import ReadMore from "../readMore/ReadMore";
import { Link } from "react-router-dom";

export default function ContactUs() {
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
          <div className="content d-flex flex-column h-100  justify-content-center ">
            <h1>Bizimlə Əlaqə Saxlayın</h1>
            <p>
              Məhsullarımız və xidmətlərimiz haqqında məlumat almaq üçün bizimlə
              əlaqə qurun.
            </p>
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
