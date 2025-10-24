import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../../assets/images/NavLogo.jpg';
import { IoSearchOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { HiMiniBars3BottomRight } from "react-icons/hi2";


import './Style.scss';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  
  return (
    <>
      <nav className="custom-navbar navbar-expand-lg px-2 px-md-3 px-lg-5  d-flex align-items-center justify-content-between rounded-4 overflow-hidden ">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={NavLogo} alt="Logo" className="nav-logo" />
        </Link>
        <div className="mx-auto d-none d-lg-flex gap-2">
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
          <Link to="/contact-us" className="nav-link">
            Əlaqə
          </Link>
        </div>
        <div className="d-flex   justify-content-end align-items-center gap-2">
          <div className="">
            <IoSearchOutline size={20} className="text-dark" />
          </div>
          <div className="d-block d-lg-none  " onClick={toggleSidebar}>
            <HiMiniBars3BottomRight size={20} className="text-dark" />
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

          <div className='w-100 align-items-start  '>
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
