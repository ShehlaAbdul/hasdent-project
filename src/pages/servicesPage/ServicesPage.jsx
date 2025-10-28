import React from 'react';
import "./Style.scss";
import Servicescard1 from "../../assets/icons/servicesCardLogo1.svg";
import Servicescard2 from "../../assets/icons/servicesCardLogo2.svg";
import Servicescard3 from "../../assets/icons/servicesCardLogo3.svg";
import Servicescard4 from "../../assets/icons/servicesCardLogo4.svg";
import Servicescard5 from "../../assets/icons/servicesCardLogo5.svg";
import HeroSection from '../../components/HeroSection/HeroSection';
import ServicesAbout from '../../components/servicesAbout/ServicesAbout';
// import ServicesCard from '../../components/ServicesCard/ServicesCard';

export default function ServicesPage() {
        const servicescard = [
          {
            id: 1,
            title: "Ümumi Stomatologiya",
            detail:
              "Müalicə, restavrasiya və profilaktika üçün nəzərdə tutulmuş yüksək keyfiyyətli materiallardan başlayaraq, anesteziya sahəsində tətbiq olunan innovativ həllərə qədər geniş məhsul çeşidi təqdim edirik. Məqsədimiz stomatoloqlara həm gündəlik praktikada, həm də xüsusi prosedurlarda etibarlı dəstək olmaqdır.",
            img: Servicescard1,
          },
          {
            id: 2,
            title: "Ortodontologiya",
            detail:
              "Şəffaf elaynerlər və digər müasir ortodontik məhsullarımız pasiyentlərə həm estetik görünüş, həm də maksimum rahatlıq təmin edir. Bu həllər müalicə müddətində gündəlik həyata uyğunlaşmanı asanlaşdırır və peşəkar stomatoloqlara effektiv nəticələr əldə etməyə imkan yaradır.",
            img: Servicescard2,
          },
          {
            id: 3,
            title: "İmplantologiya",
            detail:
              "Müasir implant sistemləri və onların aksesuarları uzunmüddətli etibarlılığı ilə seçilir. Bizim təqdim etdiyimiz məhsullar stomatoloqlara pasiyentlər üçün funksionallığı, estetikliyi və davamlılığı birləşdirən həllər yaratmağa şərait yaradır. Keyfiyyətli materiallar sayəsində implant prosedurları daha uğurlu və rahat olur.",
            img: Servicescard3,
          },
          {
            id: 4,
            title: "Üz-Çənə Cərrahiyyəsi",
            detail:
              "Biomateriallar, membranlar, insan və heyvan mənşəli sümüklərdən ibarət məhsul portfelimiz üz-çənə cərrahiyyəsi üçün etibarlı dəstəkdir. Bu materiallar ən mürəkkəb prosedurlarda belə yüksək standartları təmin edir, cərrahlara isə təhlükəsiz və effektiv nəticələr əldə etməyə imkan verir.",
            img: Servicescard4,
          },
          {
            id: 5,
            title: "Diş Laboratoriyaları",
            detail:
              "Diş texnikləri üçün nəzərdə tutulmuş materiallar və avadanlıqlar, laboratoriya işlərinin keyfiyyətini və dəqiqliyini artırmaq məqsədilə seçilmişdir. Bizim təqdim etdiyimiz məhsullar sayəsində protezlərin hazırlanması, bərpa və digər texniki proseslər daha sürətli, dəqiq və etibarlı olur. Hər bir detal yüksək standartlara cavab verir və stomatoloqlarla yanaşı laboratoriya mütəxəssislərinin də işini asanlaşdırır.",
            img: Servicescard5,
          },
        ];
  return (
    <>
      <HeroSection page={"Xidmətlər"}/>
      <ServicesAbout />
      <section id='services-cards'>
        <div className="services-cards container-fluid d-flex flex-column gap-5">
          {servicescard.map((item) => (
            <div className="services-card d-flex flex-column" key={item.id}>
              <div className="card-img">
                <img src={item.img} alt="" />
              </div>
              <div className="card-title">
                <h6 className="card-head">{item.title}</h6>
                <p className="card-detail">{item.detail}</p>
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
