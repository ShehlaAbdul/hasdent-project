import MainLayout from "./layout/MainLayout";
import Home from "./pages/homePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import About from "./pages/aboutPage/About";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
         </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
