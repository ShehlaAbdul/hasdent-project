import React from "react";
import "./Style.scss";
import AboutLayout from "../../assets/images/AboutLayout.webp";
import Vector from "../../assets/images/Vector2.webp";
import SectionHead from "../sectionHead/SectionHead";
import ReadMore from "../readMore/ReadMore";

export default function AboutSection() {
  return (
    <section id="about-sec">
      <div
        className="about-sec container-fluid  p-0 row m-0 g-0"
        data-aos-anchor-placement="top-center"
      >
        <div
          className="layout-side col-12 col-lg-6 p-0 g-0 d-flex"
          data-aos="fade-right"
          // data-aos-anchor-placement="top-center"
        >
          <img src={AboutLayout} alt="" className="layout1" />
        </div>
        <div
          className="title-side col-12 col-lg-6 d-flex flex-column justify-content-center gap-3  "
          data-aos="fade-left"
          // data-aos-anchor-placement="top-center"
        >
          <SectionHead title={"Haqqımızda"} />
          <h1 className="about-title">Uğurun əsasında təcrübə və keyfiyyət</h1>
          <p>
            HASDENT MMC-nin hekayəsi 1996-cı ildən başlayır. Təsisçimiz Namiq
            Həsənov stomatoloji məhsullar sahəsində uzun illərin təcrübəsi ilə
            bu sektorda önəmli boşluğu doldurmağı hədəfləmişdir. Şirkətimiz
            illər boyu Stomart adı altında fəaliyyət göstərmiş, 2015-ci ildən
            isə daha geniş vizyonla HASDENT olaraq yoluna davam edir. Bu
            dəyişiklik sadəcə bir ad yenilənməsi deyil, həm də bazarın
            ehtiyaclarına uyğun olaraq məhsul çeşidini artırmaq və xidmət
            keyfiyyətini yüksəltmək öhdəliyimizdir.
          </p>
          <div>
            <ReadMore title={"Məhsullara bax "} />
          </div>
        </div>
      </div>
    </section>
  );
}
