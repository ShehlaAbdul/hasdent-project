import React from 'react';
import './Style.scss';
import ServicesImg from "../../assets/images/ServicesLayout.webp";
import SectionHead from '../sectionHead/SectionHead';
import Vector from "../../assets/images/Vector4.webp"
import ReadMore from '../readMore/ReadMore';
import { Link } from "react-router-dom";

export default function ServicesAbout() {
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
          <h1>Geniş Çeşid və Mükəmməl Xidmət</h1>
          <p>
            HASDENT olaraq, bizim əsas məqsədimiz stomatologiya sahəsində
            çalışan peşəkarları, stomatoloji klinikaları və laboratoriyaları ən
            yüksək standartlara cavab verən məhsullarla təmin etməkdir. Məhsul
            portfelimiz genişdir və peşəkar stomatologiyanın bütün əsas
            sahələrini əhatə edir. Bizim üçün keyfiyyət təkcə məhsulun özü
            deyil, həm də təqdim etdiyimiz xidmətdir. Hər bir müştəri ilə fərdi
            işləyir, onların ehtiyaclarını anlamağa çalışır və ən doğru məhsulu
            seçmələrinə kömək edirik. HASDENT sadəcə bir təchizatçı deyil, sizin
            inkişafınızda maraqlı olan etibarlı bir tərəfdaşdır. Gələcəkdə də
            stomatologiya sahəsinin inkişafına töhfə vermək, yenilikləri ilk
            olaraq Azərbaycana gətirmək və peşəkarların işini asanlaşdırmaq üçün
            çalışacağıq. HASDENT ilə birgə, stomatologiyanın gələcəyini yaradın!
          </p>
        </div>
        <div className='pt-2 d-block d-lg-none'>
          <Link>
            <ReadMore title={"Məhsullara bax"} />
          </Link>
        </div>
      </div>
    </section>
  );
}
