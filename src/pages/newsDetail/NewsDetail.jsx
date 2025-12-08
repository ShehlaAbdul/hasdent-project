import React, { useEffect, useState } from "react";
import "./Style.scss";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import NewsImg from "../../assets/images/WhyAreWe.webp";
import NewsCard from "../../components/newsCard/NewsCard.jsx";
import Img1 from "../../assets/images/BestSellerCard.webp";
import  "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function NewsDetail() {
  const { id } = useParams();
   const currentLanguage = "az";
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
          
            <div className="detail-side d-flex flex-column gap-3">
              <span className="date">
                {newsDetail.createdAt?.slice(0, 10)}
              </span>
              <h2 className="">
                {" "}
                {newsDetail?.title?.[currentLanguage] || newsDetail?.title?.az}
              </h2>
              <p className="detail">
                {parse(newsDetail?.description?.[currentLanguage] || newsDetail?.description?.az)}
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
