import React from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../../assets/images/NavLogo.jpg';
import './Style.scss';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg p-0  ">
      <div className="nav-content  container-fluid d-flex  justify-content-between  rounded-4 ">
        {/* Logo */}
        <Link>
          <img src={NavLogo} alt="" className="nav-logo" />
        </Link>

        {/* Burger icon (mobil üçün) */}
        <button
          className="navbar-toggler d-block d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menyu hissəsi */}
        <div className="collapse navbar-collapse row p-0   " id="navbarNav">
          <ul className="navbar-nav col-12 col-lg-8 justify-content-end ">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Ana Səhifə
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/partners">
                Partners
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact-us">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

          <div className="search col-4 d-flex justify-content-end">search</div>
        </div>
      </div>     
    </nav>
  );
}
