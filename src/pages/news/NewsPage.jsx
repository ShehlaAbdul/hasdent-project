import React from "react";
import "./Style.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import NewsCard from "../../components/newsCard/NewsCard";
import Img1 from "../../assets/images/BestSellerCard.webp";
import { useParams } from "react-router-dom";

export default function NewsPage() {
  const newsdetail = [
    {
      id: 1,
      img: Img1,
      title: "Xeber",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sapiente.",
    },
    {
      id: 2,
      img: Img1,
      title: "Xeber",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sapiente.",
    },
    {
      id: 3,
      img: Img1,
      title: "Xeber",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sapiente.",
    },
    {
      id: 4,
      img: Img1,
      title: "Xeber",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sapiente.",
    },
    {
      id: 5,
      img: Img1,
      title: "Xeber",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sapiente.",
    },
    ];
    const { id } = useParams();

  return (
    <>
      <HeroSection page={"Xəbərlər"} />
      <section id="news-sec" className="container-fluid">
        <div className="news-sec row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4 ">
          {newsdetail.map((card) => (
            <NewsCard
              key={card.id}
              id={card.id}
              img={card.img}
              title={card.title}
              date={"09.04.25"}
              desc={card.desc}
            />
          ))}
        </div>
      </section>
    </>
  );
}
