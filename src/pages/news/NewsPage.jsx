import React, { useEffect, useState } from "react";
import "./Style.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import NewsCard from "../../components/newsCard/NewsCard";
import Img1 from "../../assets/images/BestSellerCard.webp";
import { useParams } from "react-router-dom";
import axios from "axios";


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
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
    const { id } = useParams();

  useEffect(() => {
     axios
       .get("https://manager.hasdent.az/api/news") // <-- API URL
       .then((res) => {
         setNews(res.data.data);
       })
       .catch((err) => {
         console.log("Error:", err);
       })
       .finally(() => {
         setLoading(false);
       });
  }, [])

    if (loading) {
      return <p className="text-center mt-5">Yüklənir...</p>;
      
    }

  
  return (
    <>
      <HeroSection page={"Xəbərlər"} />
      <section id="news-sec" className="container-fluid">
        <div className="news-sec row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4 ">
          {news.map((card) => (
            <NewsCard
              key={card.id}
              id={card.id}
              img={`https://manager.hasdent.az${card.image}`}
              title={card.title.az}
              date={"09.04.25"}
              desc={card.shortDescription.az}
            />
          ))}
        </div>
      </section>
    </>
  );
}
