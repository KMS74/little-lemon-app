import React from "react";
import Logo from "./Logo";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="container navbar navbar-expand-md navbar-light">
      <div className="container">
        <Logo />
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse container justify-content-end"
          id="collapsibleNavId"
        >
          <ul className="navbar-nav align-items-center  mt-2 mt-lg-0 ">
            <li className="nav-item fs-5 ">
              <Link className="nav-link text-uppercase" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item  fs-5 ">
              <Link className="nav-link text-uppercase" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item  fs-5 ">
              <Link className="nav-link text-uppercase" href="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item  fs-5 ">
              <Link className="nav-link text-uppercase" href="/reservation">
                Reservation
              </Link>
            </li>
            <li className="nav-item  fs-5 ">
              <Link className="nav-link text-uppercase" href="/order-online">
                Order Online
              </Link>
            </li>
            <li className="nav-item  fs-5">
              <Link
                href="/login"
                className="btn btn-outline-primary text-uppercase"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
