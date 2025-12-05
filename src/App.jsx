import MainLayout from "./layout/MainLayout";
import Home from "./pages/homePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import About from "./pages/aboutPage/About.jsx";
import ServicesPage from "./pages/servicesPage/ServicesPage.jsx";
import Partners from "./pages/partners/Partners.jsx";
import ContactPage from "./pages/contactPage/ContactPage.jsx";
import ProductsPage from "./pages/productsPage/ProductsPage.jsx";
import NewsDetail from "./pages/newsDetail/NewsDetail.jsx";
import NewsPage from "./pages/news/NewsPage.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LanguageRedirect from "./components/languageRedirect/LanguageRedirect.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refreshHard();
  }, []);

  return (
    <>
      <BrowserRouter>
        <LanguageRedirect>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/products/:id" element={<ProductsPage />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/news" element={<NewsPage />} />
              {/*   English */}
              <Route path="/en/" element={<Home />} />
              <Route path="/en/about" element={<About />} />
              <Route path="/en/services" element={<ServicesPage />} />
              <Route path="/en/partners" element={<Partners />} />
              <Route path="/en/contact-us" element={<ContactPage />} />
              <Route path="/en/categories/:id" element={<ProductsPage />} />
              <Route path="/en/news/:id" element={<NewsDetail />} />
              <Route path="/en/news" element={<NewsPage />} />
              {/*   Rus */}
              <Route path="/ru/" element={<Home />} />
              <Route path="/ru/about" element={<About />} />
              <Route path="/ru/services" element={<ServicesPage />} />
              <Route path="/ru/partners" element={<Partners />} />
              <Route path="/ru/contact-us" element={<ContactPage />} />
              <Route path="/ru/products/:id" element={<ProductsPage />} />
              <Route path="/ru/news/:id" element={<NewsDetail />} />
              <Route path="/ru/news" element={<NewsPage />} />
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Route>
          </Routes>
        </LanguageRedirect>
      </BrowserRouter>
    </>
  );
}

export default App;
