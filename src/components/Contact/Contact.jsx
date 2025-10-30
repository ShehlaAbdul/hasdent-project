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
              <div className="d-flex flex-column ">
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
        <div className="map-side col-12 col-lg-7">
          <div className="map">
            <iframe
              title="Hasdent Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.3029806651895!2d49.81690877605146!3d40.440782355936846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dd7ce03c86d%3A0x6c4e7f7de5a5f9e!2sAdil%20Mammadov%2011%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2saz!4v1730210000000!5m2!1sen!2saz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
