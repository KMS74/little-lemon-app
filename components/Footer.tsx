import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container-fluid mt-5 bg-black">
      <footer className="text-center text-lg-start text-white">
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <Logo />
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  sequi nobis unde, perferendis qui esse, eos quae, cupiditate
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 ">Sitemap</h5>

                <ul className="list-unstyled">
                  <li className="nav-item">
                    <Link className="nav-link text-uppercase" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-uppercase" href="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-uppercase" href="/menu">
                      Menu
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link text-uppercase"
                      href="/reservation"
                    >
                      Reservation
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-uppercase"
                      href="/order-online"
                    >
                      Order Online
                    </Link>
                  </li>
                </ul>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 fw-bold">Contact</h6>
                <p className="d-flex align-items-center gap-2">
                  <i className="bi bi-house "></i>
                  <span>New York, NY 10012, US</span>
                </p>
                <p className="d-flex align-items-center gap-2">
                  <i className="bi bi-envelope"></i> info@gmail.com
                </p>
                <p className="d-flex align-items-center gap-2">
                  <i className="bi bi-phone "></i> + 01 234 567 88
                </p>
                <p className="d-flex align-items-center gap-2">
                  <i className="bi bi-phone "></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3 d-flex gap-2 align-items-center">
                  © {new Date().getFullYear()} Copyright
                  <a className="text-white text-decoration-none">
                    little-lemon-restaurant.com
                  </a>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="bi bi-facebook"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="bi bi-twitter"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="bi bi-google"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
