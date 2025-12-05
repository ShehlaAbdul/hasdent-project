import React, { useEffect, useState } from "react";
import "./Style.scss";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import NewsImg from "../../assets/images/WhyAreWe.webp";
import NewsCard from "../../components/newsCard/NewsCard.jsx";
import Img1 from "../../assets/images/BestSellerCard.webp";

import { useParams } from "react-router-dom";
import axios from "axios";

export default function NewsDetail() {
  const { id } = useParams();
   const currentLanguage = "az";
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
  // const detailCard = newsdetail.find((card) => card.id === Number(id));

  // if (!detailCard) {
  //   return (
  //     <section className="container-fluid py-5">
  //       <h2>Xeber Tapilmadi</h2>
  //     </section>
  //   );
  // }

  const [newsDetail, setNewsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://manager.hasdent.az/api/news/${id}`)
      .then((res) => {
        setNewsDetail(res.data.data);
      })
      .catch((err) => console.log("Error fetching news detail:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center mt-5">Yüklənir...</p>;
  }

  if (!newsDetail) {
    return (
      <section className="container-fluid py-5">
        <h2>Xəbər Tapılmadı</h2>
      </section>
    );
  }
  return (
    <>
      <HeroSection page={"Xəbərlər"} />
      <section id="news-detail">
        <div className="news-detail container-fluid ">
          <div className="img-side">
            <img
              src={`https://manager.hasdent.az${newsDetail.image}`}

              // alt={newsDetail.title}
            />
          </div>
          {/* <div className="detail-side d-flex flex-column gap-3">
            <span className="date">
              {newsDetail.createdAt?.slice(0, 10)}
              {new Date(newsDetail.createdAt).toLocaleDateString("az-AZ")}
            </span>
            
            <h2 className="">{newsDetail.title.az}</h2>
            <p className="detail">{newsDetail.description.az}</p> 
          </div> */}
          <div className="detail-side d-flex flex-column gap-3">
            <span className="date">
              {newsDetail.createdAt?.slice(0, 10)}
              {/* {new Date(newsDetail.createdAt).toLocaleDateString("az-AZ")} */}
            </span>
            <h2 className="">
              {" "}
              {newsDetail?.title?.[currentLanguage] || newsDetail?.title?.az}
            </h2>
            <p className="detail">
              {newsDetail?.description?.[currentLanguage] || newsDetail?.description?.az}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
