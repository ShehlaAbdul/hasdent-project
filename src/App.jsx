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


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/news" element={<NewsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
