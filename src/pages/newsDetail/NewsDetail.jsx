import React from "react";
import "./Style.scss";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import NewsImg from "../../assets/images/WhyAreWe.webp";
import NewsCard from "../../components/newsCard/NewsCard.jsx";
import Img1 from "../../assets/images/BestSellerCard.webp";

import { useParams } from "react-router-dom";

export default function NewsDetail() {
  const { id } = useParams();
  const newsdetail = [
    {
      id: 1,
      img: Img1,
      title: "Xeber 1",
      date: "09.04.25",
      desc: "Bu, birinci xəbər üçün nümunə mətndir.",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur error tenetur voluptates consequuntur, distinctio voluptas et laborum in!",
    },
    {
      id: 2,
      img: Img1,
      title: "Xeber 2",
      date: "10.04.25",
      desc: "Bu, ikinci xəbər üçün nümunə mətndir.",
      detail:
        "Porro provident eum in voluptatum tempore animi quos accusantium soluta blanditiis.",
    },
    {
      id: 3,
      img: Img1,
      title: "Xeber 3",
      date: "11.04.25",
      desc: "Bu, üçüncü xəbər üçün nümunə mətndir.",
      detail:
        "Vero accusantium veritatis rem delectus! Beatae nobis ad laborum consequuntur!",
    },
  ];
  const detailCard = newsdetail.find((card) => card.id === Number(id));

  if (!detailCard) {
    return (
      <section className="container-fluid py-5">
        <h2>Xeber Tapilmadi</h2>
      </section>
    );
  }
  return (
    <>
      <HeroSection page={"Xəbərlər"} />
      <section id="news-detail">
        <div className="news-detail container-fluid ">
          <div className="img-side">
            <img src={detailCard.img} alt="" />
          </div>
          <div className="detail-side d-flex flex-column gap-3">
            <span className="date">{detailCard.date}</span>
            <h2 className="">{detailCard.title}</h2>
            <p className="detail">{detailCard.detail}</p>
          </div>
        </div>
      </section>
    </>
  );
}
