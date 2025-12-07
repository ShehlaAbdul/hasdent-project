import React from "react";
import "./Style.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import ReadMore from "../../components/readMore/ReadMore";
import Img from "../../assets/images/HomeHero.webp";

function ProductDetail() {
  return (
    <>
      <HeroSection page={"Məhsullar"} />
      <section id="product-detail">
        <div className="product-detail">
          <div
            className="img-side"
            //   data-aos="fade-right"
          >
            <img src={Img} alt="" />
          </div>
          <div className="text-side">
            <div className="head">
              <h3>text</h3>
              <div className="d-none d-md-block">
                <ReadMore title={"Katalogu endir"} />
              </div>
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, consectetur expedita numquam aspernatur perspiciatis
                laboriosam esse minima amet reprehenderit! Nobis perspiciatis
                minima, incidunt est aliquid magni ut ducimus odio veritatis
                odit voluptas corrupti labore itaque? Nesciunt omnis corporis a
                placeat, aliquam, consectetur blanditiis nam similique illum rem
                natus eius mollitia minima quae consequatur inventore esse animi
                tenetur rerum. At quo error explicabo, quis soluta obcaecati
                voluptatem enim provident similique rerum eum consequatur
                minima, numquam doloribus dolorum? Est dolorum molestiae dolorem
                minus porro tempore quos ex hic adipisci autem in quis quae
                distinctio, laboriosam explicabo nostrum placeat harum
                exercitationem quam aliquid.
              </p>
            </div>
            <div className="d-block d-md-none">
              <ReadMore title={"Katalogu endir"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
