import MainLayout from "./layout/MainLayout";
import Home from "./pages/homePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import About from "./pages/aboutPage/About";
import ServicesPage from "./pages/servicesPage/ServicesPage";
import Partners from "./pages/partners/Partners";
import ContactPage from "./pages/contactPage/ContactPage";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
