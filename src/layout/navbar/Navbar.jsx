import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../../assets/images/NavLogo.jpg';
import { IoSearchOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { HiMiniBars3BottomRight } from "react-icons/hi2";


import './Style.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("az");
  
  const options = [
    {
      value: "az",
      label: "Az",
    },
    {
      value: "en",
      label: "En",
    },
    {
      value: "ru",
      label: "Ru",
    },
  ];
  const products = [
    {
      name: "İmplantologiya",
      types: [
        {
          type: "Diş İmplantları",
        },
        {
          type: "Abatmentlər və Komponentlər",
        },
        {
          type: "Cərrahi Alətlər",
        },
        {
          type: "Biomateriallar",
        },
      ],
    },
    {
      name: "Diş Laboratoriyası Materialları",
      types: [
        {
          type: "Protez Materialları",
        },
        {
          type: "Ölçü Materialları",
        },
        {
          type: "3D Çap Materialları",
        },
        {
          type: "Laboratoriya Cihazları",
        },
      ],
    },
    {
      name: "İmplantologiya",
      types: [
        {
          type: "Diş İmplantları",
        },
        {
          type: "Abatmentlər və Komponentlər",
        },
        {
          type: "Cərrahi Alətlər",
        },
        {
          type: "Biomateriallar",
        },
      ],
    },
    {
      name: "İmplantologiya",
      types: [
        {
          type: "Diş İmplantları",
        },
        {
          type: "Abatmentlər və Komponentlər",
        },
        {
          type: "Cərrahi Alətlər",
        },
        {
          type: "Biomateriallar",
        },
      ],
    },
    {
      name: "İmplantologiya",
      types: [
        {
          type: "Diş İmplantları",
        },
        {
          type: "Abatmentlər və Komponentlər",
        },
        {
          type: "Cərrahi Alətlər",
        },
        {
          type: "Biomateriallar",
        },
      ],
    },
    {
      name: "İmplantologiya",
      types: [
        {
          type: "Diş İmplantları",
        },
        {
          type: "Abatmentlər və Komponentlər",
        },
        {
          type: "Cərrahi Alətlər",
        },
        {
          type: "Biomateriallar",
        },
      ],
    },
  ];
  
  const toggleSidebar = () => setIsOpen(!isOpen);
  
  return (
    <>
      <nav className="custom-navbar navbar-expand-lg px-2  px-md-3 px-lg-1  d-flex align-items-center justify-content-between">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center overflow-hidden"
        >
          <img src={NavLogo} alt="Logo" className="nav-logo" />
        </Link>
        <div className="mx-auto d-none d-lg-flex gap-2 align-items-center">
          <Link to="/" className="nav-link">
            Ana Səhifə
          </Link>
          <Link to="/about" className="nav-link">
            Haqqımızda
          </Link>

          <Link to="/services" className="nav-link">
            Xidmətlər
          </Link>
          {/* <div className="border position-relative  g-0 m-0 p-0 gap-0"> */}
          <div className='productDiv'>
            <Link to="/products" className="nav-link">
              Məhsullar
            </Link>
          </div>
          <div className="products-types  mt-3 position-absolute p-0 m-0 ">
            <div className="products-types-container  mt-3 px-5">
              <ul className=" p-0 d-flex gap-4 ">
                {products.map(({ name, types }, index) => (
                  <li key={index} className=" pe-1 d-flex flex-column">
                    <h5>{name}</h5>
                    <div className="d-flex flex-column gap-2">
                      {types.map(({ type }, i) => (
                        <p key={i} className=" p-0 m-0">
                          {type}
                        </p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* </div> */}
          <Link to="/news" className="nav-link">
            Xəbərlər
          </Link>
          <Link to="/partners" className="nav-link">
            Partnyorlar
          </Link>
          <Link to="/contact-us" className="nav-link">
            Əlaqə
          </Link>
        </div>
        <div className="d-flex justify-content-end align-items-center gap-0">
          <div className="d-none d-lg-block">
            <IoSearchOutline size={20} className="text-dark" />
          </div>
          <div className="language-dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {options.find((o) => o.value === lang).label}
            </button>
            <ul
              className="dropdown-menu dropdown-menu"
              aria-labelledby="dropdownMenuButton"
            >
              {options.map((opt) => (
                <li key={opt.value}>
                  <button
                    className="dropdown-item"
                    onClick={() => setLang(opt.value)}
                  >
                    {opt.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-block d-lg-none  " onClick={toggleSidebar}>
            <HiBars3 size={20} className="text-dark" />
          </div>
        </div>
      </nav>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header d-flex justify-content-between align-items-center px-3 py-3 border-bottom">
          <div className="d-flex align-items-center justify-content-between w-100">
            <Link to="/" className="navbar-brand">
              <img src={NavLogo} alt="Logo" className="nav-logo" />
            </Link>
            <LiaTimesSolid size={20} onClick={toggleSidebar} />
          </div>
        </div>
        <div className="sidebar-body d-flex flex-column align-items-center  py-4 gap-3">
          <div className=" border rounded-3 px-2   ">
            <IoSearchOutline size={18} className="text-dark" />
            <input type="text" name="" id="" />
          </div>

          <div className="w-100 align-items-start  ">
            <Link to="/" className="nav-link">
              Ana Səhifə
            </Link>
            <Link to="/about" className="nav-link">
              Haqqımızda
            </Link>

            <Link to="/services" className="nav-link">
              Xidmətlər
            </Link>
            <Link to="/products" className="nav-link">
              Məhsullar
            </Link>
            <Link to="/news" className="nav-link">
              Xəbərlər
            </Link>
            <Link to="/partners" className="nav-link">
              Partnyorlar
            </Link>
            <Link to="/contact" className="nav-link">
              Əlaqə
            </Link>
          </div>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}
