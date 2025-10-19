import React from 'react';
import "./Style.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules"; 
import Card1 from "../../assets/images/BestSellerCard.webp";
import "swiper/css";
import "swiper/css/autoplay";
import SectionHead from '../sectionHead/SectionHead';
import ReadMore from '../readMore/ReadMore';



export default function BestSeller() {
    const products = [
      {
        id: 1,
        img: Card1,
        title: "Artinibsa 4% local anaesthesia",
        desc: "Məhsul haqqında məlumat",
      },
      {
        id: 2,
        img: Card1,
        title: "Artinibsa 4% local anaesthesia",
        desc: "Məhsul haqqında məlumat",
      },
      {
        id: 3,
        img: Card1,
        title: "Artinibsa 4% local anaesthesia",
        desc: "Məhsul haqqında məlumat",
      },
      {
        id: 4,
        img: Card1,
        title: "Artinibsa 4% local anaesthesia",
        desc: "Məhsul haqqında məlumat",
      },
      {
        id: 5,
        img: Card1,
        title: "Artinibsa 4% local anaesthesia",
        desc: "Məhsul haqqında məlumat",
      },
    ];
  return (
    <section id="bestseller">
      <div className="bestseller">
        <div className="">
          <SectionHead title={"Məhsullar"} />
          <div className="d-flex justify-content-between">
            <h1 className="py-4 fs-2 ">Ən çox seçilən məhsullar</h1>
            <Link to="/products" className="d-none d-md-block">
              {" "}
              <ReadMore title={"Hamısına Bax"} />
            </Link>
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={4000}
        //   autoplay={{
        //     delay: 0,
        //     disableOnInteraction: false,
        //   }}
          allowTouchMove={false}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            576: { slidesPerView: 2, spaceBetween: 2 },
            992: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="brands-slider"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bestseller-card">
                <img src={product.img} alt={`product-${product.id}`} />
                <div className="content-side">
                  <h5>{product.title}</h5>
                  <p>{product.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to={"/products"} className='d-block d-md-none'>
          <ReadMore title={"Hamısına bax "} />
        </Link>
      </div>
    </section>
  );
}
