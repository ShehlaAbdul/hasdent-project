import React, { useEffect, useState } from "react";
import "./Style.scss";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import NewsImg from "../../assets/images/WhyAreWe.webp";
import NewsCard from "../../components/newsCard/NewsCard.jsx";
import Img1 from "../../assets/images/BestSellerCard.webp";
import  "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

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
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [id]);



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
        {loading ? (
          <>
            {/* Skeleton Image */}
            <Skeleton
              height={400}
              width={"90%"}
              className="mb-4 mx-auto"
              style={{ borderRadius: "12px" }}
            />

            {/* Skeleton Date */}
            <Skeleton height={20} width={150} className="mb-3" />

            {/* Skeleton Title */}
            <Skeleton height={35} width={"60%"} className="mb-3" />

            {/* Skeleton Text */}
            <Skeleton count={4} height={20} width={"90%"} />
          </>
        ) : (
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
        )}
      </section>
    </>
  );
}
