import React, { useEffect, useState } from "react";
import "./Style.scss";
import Card1 from "../../assets/images/BestSellerCard.webp";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import ReadMore from "../readMore/ReadMore";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";

export default function ProductsSec() {
const { categoryId, subcategoryId } = useParams(); // URL: /products/:subcategoryId
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
    
      try {
        const { data } = await axios.get(
          `https://manager.hasdent.az/api/products?subcategoryID=${subcategoryId}`
        );
        console.log(data); // ← bunı əlavə et
        setProducts(data?.data || data?.products || data || []);
      } catch (err) {
        setError(err.message || "Xəta baş verdi");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [subcategoryId]);
  if (loading) return <p>Yüklənir...</p>;
  if (error) return <p>{error}</p>;
  
  if (products.length === 0) return <p>Bu subcategory-də məhsul yoxdur.</p>;
  
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await axios.get("/api/categories"); 
  //       setCategories(data.data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, []);
  

  return (
    <>
      <section id="products-sec">
        <div className="products row g-0">
          {products.map((item) => (
            <Link to={`/products/${item.id}`}>
              <div key={item.id} className="product-card">
                <div className="card-container">
                  <div className="img-side">
                    <img
                      src={`https://manager.hasdent.az${item.image}`}
                      alt={item.title?.az}
                    />
                  </div>
                  <div className="text-side">
                    <h5 className="title ">
                      {item.title?.az.length > 30
                        ? item.title?.az.slice(0, 30) + "..."
                        : item.title.az}
                    </h5>
                    <p className="detail">
                      {item.description?.az
                        ? parse(
                            item.description.az.length > 0
                              ? item.description.az.slice(0,20) + "..."
                              : item.description.az
                          )
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="products-sec"></div>
      </section>
    </>
  );
}
