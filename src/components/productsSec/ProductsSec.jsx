import React from "react";
import "./Style.scss";
import Card1 from "../../assets/images/BestSellerCard.webp";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export default function ProductsSec() {
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
  const categories = [
    {
      id: 1,
      category: "İmplantologiya"[
        ({
          subcategory: "Diş İmplantları",
        },
        {
          subcategory: "Abatmentlər və Komponentlər",
        },
        {
          subcategory: "Cərrahi Alətlər",
        },
        {
          subcategory: "Biomateriallar",
        })
      ],
    },
    {
      id: 2,
      category: "Ortodontiya",
    },
    {
      id: 3,
      category: "Üz-Çənə Cərrahiyyəsi",
    },
    "Terapevtik Stomatologiya",
    "Diş Laboratoriyası Materialları",
    "Ümumi Təchizat və Ləvazimatlar",
  ];
  return (
    <div className="products-sec d-flex row">
      <section id="products-sec">
        <div className="products-sec container-fluid row p-0">
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column gap-4">
            <div className="categories-head d-flex align-items-center gap-2 border justify-content-between rounded-4 py-2 px-3">
              <h4>Kategoriyalar</h4>
              <IoIosArrowDown className="fs-3" />
            </div>
            <div className="categories border rounded-4 py-3 px-3">
              <div className="content">
                <div className="search border border-2 py-2 px-2 d-flex  align-items-center gap-2 rounded-3 ">
                  <CiSearch className="fs-4" />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Axtarin"
                    className="border-none outline-none"
                  />
                </div>
                <ul className="categories-list list-unstyled">
                  <li className="form-check d-flex gap-3">
                    <input
                      type="checkbox"
                      id="men"
                      name="item"
                      class=""
                    />
                    <span>Hamısı </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 border border-dark ">card</div>
        </div>
      </section>
      {/* Sidebar */}
      <div className="flex-shrinK-0 p-3 border-end col-12 col-md-3">
        {/* Categories */}
        <div className="mb-4">
          <h6 className="mb-2">Categories</h6>
          <input
            type="text"
            className="form-control form-control-sm mb-2"
            placeholder="Search category"
          />
          <ul className="list-unstyled mb-0">
            {[
              "TShirts",
              "Jackets",
              "Sweaters",
              "Crossbody Bags",
              "Hair Tie",
            ].map((cat) => (
              <li className="form-check" key={cat}>
                <input className="form-check-input" type="checkbox" id={cat} />
                <label className="form-check-label" htmlFor={cat}>
                  {cat}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Products */}
      <div className="flex-grow-1 p-3 col-12 col-md-9">
        {/* <div className="d-flex flex-wrap gap-2 mt-4">
          {["Jackets", "Tommy Hilfiger", "Orange", "Zara", "Dresses"].map(
            (tag) => (
              <button
                key={tag}
                type="button"
                className="btn btn-outline-secondary btn-sm"
              >
                {tag}
              </button>
            )
          )}
        </div> */}

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 mt-3">
          {products.map((product) => (
            <div className="bestseller-card">
              <img src={product.img} alt={`product-${product.id}`} />
              <div className="content-side">
                <h5>{product.title}</h5>
                <p>{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
