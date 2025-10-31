import React from "react";
import "./Style.scss";
import { Link } from "react-router-dom";

export default function NewsCard({id, img, date, title, desc }) {


  return (
    <div>
      <Link
        to={`/news/${id}`}
        className="news-card d-flex flex-column gap-4  px-2 py-3 "
      >
        <div className="img-side">
          <img src={img} alt="" />
        </div>
        <div className="title-side d-flex flex-column gap-2">
          <div className="date">{date}</div>
          <div>
            <h4 className="news-name m-0 ">{title}</h4>
            <div className="news-desc">
              {" "}
              {desc.split(" ").slice(0, 7).join(" ")}
              {desc.split(" ").length > 4 ? "..." : ""}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
