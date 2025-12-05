import React, { useEffect, useState } from "react";
import "./Style.scss";
import Card1 from "../../assets/images/BestSellerCard.webp";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import ReadMore from "../readMore/ReadMore";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductsSec() {
  const { id } = useParams()
    const [product, setProduct] = useState(null);
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
  useEffect(() => {
    axios
      .get(`https://manager.hasdent.az/api/products/${id}`)
      .then((res) => setProduct(res.data.data[0]))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p>Yüklənir...</p>;
  

  //  useEffect(() => {
  //    const getProduct = async () => {
  //      try {
  //        const res = await axios.get(
  //          `https://manager.hasdent.az/api/products/${id}` 
  //        );
  //        setProduct(res?.data?.data);
  //      } catch (error) {
  //        console.error("Error fetching product:", error);
  //      }
  //    };

  //    getProduct();
  //  }, [id]);
  
  // if (!product) return <p>Yüklənir...</p>;
  
  return (
    <>
      <section id="products-sec">
        <div className="products-sec">
          <div className="img-side">
            {/* <img src="/images/HomeContact.webp" alt="" /> */}
            <img
              src={`https://manager.hasdent.az/products/${product.image}`}
              alt={product.title.az}
            />  
          </div>

          <div className="text-side ">
            <div className="head d-flex justify-content-between">
              <h3>Name</h3>
              <div className="d-none d-md-block">
                <ReadMore title={"Katalogu gör"}></ReadMore>
              </div>
            </div>
            {/* {product.map((category, index) => (
              <p>
                {typeof category?.name === "object"
                  ? category?.name?.[currentLanguage] || category?.name?.az
                  : category?.name}
              </p>
              // <li key={index}>
              //   <Link
              //     to={createLanguageAwarePath(`/projects/${category?.id}`)}
              //     onClick={() => setShowProjectsDropdown(false)}
              //   >
              //     {typeof category?.name === "object"
              //       ? category?.name?.[currentLanguage] || category?.name?.az
              //       : category?.name}
              //   </Link>
              // </li>
            ))} */}
            <p className="head-text p-0 ">
              {" "}
              Üstünlükləri: Niyə INNO İmplant? INNO İmplant Sistemi bir sıra
              üstünlükləri ilə fərqlənir: • SLA-SH™ Səth Müalicəsi: İmplantın
              səthi Sandblasted, Large-grit, Acid-etched, and
              Super-Hydrophilised (Qumlanmış, İri-dənəli, Turşu ilə oyulmuş və
              Super-Hidrofilləşdirilmiş) texnologiyası ilə işlənmişdir. Bu
              müalicə sürətli və effektiv osseointeqrasiya (sümüyə birləşmə)
              təmin edərək implantın uğur nisbətini artırır. • Yüksək İlkin
              Sabitlik: Xüsusi dizayn edilmiş yivlər (dişlər) sayəsində, hətta
              sümük keyfiyyəti zəif olan nahiyələrdə və ya çıxarılma sonrası
              dərhal yerləşdirmə hallarında belə yüksək ilkin sabitlik əldə
              olunur. Bu, müalicə müddətini qısaltmağa imkan verir. • Anatomik
              Uyğunluq: İmplantın gövdəsinin konusvari və düz hissələri,
              müxtəlif ağız boşluğu şərtlər
            </p>
            <p>
              {" "}
              Üstünlükləri: Niyə INNO İmplant? INNO İmplant Sistemi bir sıra
              üstünlükləri ilə fərqlənir: • SLA-SH™ Səth Müalicəsi: İmplantın
              səthi Sandblasted, Large-grit, Acid-etched, and
              Super-Hydrophilised (Qumlanmış, İri-dənəli, Turşu ilə oyulmuş və
              Super-Hidrofilləşdirilmiş) texnologiyası ilə işlənmişdir. Bu
              müalicə sürətli və effektiv osseointeqrasiya (sümüyə birləşmə)
              təmin edərək implantın uğur nisbətini artırır. • Yüksək İlkin
              Sabitlik: Xüsusi dizayn edilmiş yivlər (dişlər) sayəsində, hətta
              sümük keyfiyyəti zəif olan nahiyələrdə və ya çıxarılma sonrası
              dərhal yerləşdirmə hallarında belə yüksək ilkin sabitlik əldə
              olunur. Bu, müalicə müddətini qısaltmağa imkan verir. • Anatomik
              Uyğunluq: İmplantın gövdəsinin konusvari və düz hissələri,
              müxtəlif ağız boşluğu şərtlərinə ideal uyğunlaşma və yüklənməyə
              müqavimət üçün nəzərdə tutulmuşdur. • Sadə və Sürətli Prosedur:
              Təkmilləşdirilmiş dizayn cərrahi əməliyyatı sadələşdirir və
              implantın yerləşdirilmə müddətini qısaldır. • Etibarlılıq və
              Keyfiyyət Təsdiqi: Cowellmedi məhsulları USFDA, CE və ISO 13485
              kimi beynəlxalq keyfiyyət sertifikatlarına malikdir, bu da onların
              klinik təhlükəsizliyini və etibarlılığını təsdiqləyir. INNO
              İmplant Sistemi ilə Cowellmedi həyat keyfiyyətinizi yaxşılaşdırmaq
              üçün ağıllı və etibarlı bir seçim təklif edir.
            </p>
            <div className="d-block  d-md-none">
              <ReadMore title={"Katalogu gör"}></ReadMore>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
