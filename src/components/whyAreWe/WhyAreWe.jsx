import React from 'react';
import "./Style.scss";
import WhyAreWeLayout from "../../assets/images/WhyAreWe.webp";
import SectionHead from '../sectionHead/SectionHead';
import ReadMore from '../readMore/ReadMore';

export default function WhyAreWe() {
  return (
    <section id="why-are-we">
      <div
        className="why-are-we container-fluid  row  g-0"
        data-aos-anchor-placement="top-center"
      >
        <div
          className=" content-side col-12 col-lg-5 d-flex flex-column gap-3 justify-content-center "
          data-aos="fade-up"
        >
          <SectionHead title={"Niyə biz?"} />
          <h1>Daim inkişaf edən bir yol</h1>
          <p>
            HASDENT olaraq məqsədimiz yalnız stomatoloji məhsullar təqdim etmək
            deyil, həm də müştərilərimizə hər zaman ən müasir və etibarlı
            həlləri çatdırmaqdır. Yeniliklərə açıq yanaşmamız, genişlənən məhsul
            çeşidimiz və keyfiyyətə sarsılmaz inamımız sayəsində biz bu sektorda
            fərq yaradırıq.
          </p>
          <p>
            Bu yanaşma bizə yalnız məhsul təqdimatında deyil, həm də
            tərəfdaşlarımızla uzunmüddətli əməkdaşlıq qurmaqda üstünlük
            qazandırır. Hər bir müştərimizin ehtiyaclarını düzgün anlamaq və
            onlara dəyər qatan həllər təqdim etmək bizim üçün əsas prioritetdir.
            Müasir texnologiyalarla zənginləşdirilmiş xidmətlərimiz, peşəkar
            komandamızın dəstəyi və davamlı inkişaf prinsiplərimiz HASDENT-i
            stomatoloji sahədə etibar olunan bir ad halına gətirib.
          </p>
          <ReadMore title={"Məhsullara Bax"} />
        </div>
        <div className="img-side col-12 col-lg-7">
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
