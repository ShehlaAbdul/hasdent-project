import React from "react";
import "./Style.scss";
import { Link } from "react-router-dom";

export default function NewsCard({id, img, date, title, desc }) {


  return (
    <div>
      <Link
        to={`/news/${id}`}
        className="news-card d-flex flex-column gap-4  p-3 "
      >
        <div className="img-side rounded rounded-3 ">
          <img src={img} alt="" />
        </div>
        <div className="d-flex flex-column gap-2">
          <div className="date fs-6">{date}</div>
          <h4 className="news-name ">{title}</h4>
          <div className="news-desc">{desc}</div>
        </div>
      </Link>
    </div>
  );
}
