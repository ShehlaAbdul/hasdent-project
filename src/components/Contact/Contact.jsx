import React from 'react';
import "./Style.scss";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";



export default function Contact() {
  return (
    <section id="contact">
      <div className="contact container-fluid row g-0">
        <div className="title-side col-12 col-lg-5 ">
          <h1>Əlaqə vasitələri</h1>
          <ul className="d-flex  p-0 flex-column gap-3  ">
            <li className="d-flex align-items-center gap-2 ">
              <span className="fs-3">
                <MdOutlineEmail />
              </span>
              <div className="d-flex flex-column">
                <h5>E-mail ünvanı</h5>
                <span>info@hasdent.az</span>
              </div>
            </li>
            <li className="d-flex align-items-center gap-2 ">
              <span className="fs-3">
                <FiPhone />
              </span>
              <div className="d-flex flex-column">
                <h5>Telefon</h5>
                <span>+994124479797</span>
                <span>+994553591400</span>
              </div>
            </li>
            <li className="d-flex align-items-center gap-2 ">
              <span className="fs-3">
                <GrLocation />
              </span>
              <div className="d-flex flex-column">
                <h5>Ünvan</h5>
                <span>
                  Adil Məmmədov 11 , Binəqədi ray, Bakı Ş., Azərbaycan
                </span>
              </div>
            </li>
          </ul>
        </div>
              <div className="map-side col-12 col-lg-7 ">
                  <div className="map">
                      map
                  </div>
        </div>
      </div>
    </section>
  );
}
