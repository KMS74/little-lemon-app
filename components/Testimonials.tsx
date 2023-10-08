import React from "react";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="container space-v-lg">
      <h3 className="display-3 text-center mb-3">Testimonials</h3>
      <div className="row row-gap-3">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card text-center px-3 bg-primary text-light border-0 shadow-lg">
            <div className="card-body">
              <div className="d-flex gap-4 justify-content-center align-items-center mb-2">
                <Image
                  className="rounded-circle"
                  width={100}
                  height={100}
                  src="/assets/profile.jpeg"
                  alt="avatar"
                />

                <h3>John Doe</h3>
              </div>
              <q className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
                est?
              </q>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card text-center px-3 bg-primary text-light  border-0 shadow-lg">
            <div className="card-body bg-primary text-light">
              <div className="d-flex gap-4 justify-content-center align-items-center mb-2">
                <Image
                  className="rounded-circle"
                  width={100}
                  height={100}
                  src="/assets/profile.jpeg"
                  alt="avatar"
                />

                <h3>John Doe</h3>
              </div>
              <q className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
                est?
              </q>
            </div>
          </div>
        </div>{" "}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card text-center px-3 bg-primary text-light  border-0 shadow-lg">
            <div className="card-body">
              <div className="d-flex gap-4 justify-content-center align-items-center mb-2">
                <Image
                  className="rounded-circle"
                  width={100}
                  height={100}
                  src="/assets/profile.jpeg"
                  alt="avatar"
                />

                <h3>John Doe</h3>
              </div>
              <q className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
                est?
              </q>
            </div>
          </div>
        </div>{" "}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card text-center px-3 bg-primary text-light  border-0 shadow-lg">
            <div className="card-body">
              <div className="d-flex gap-4 justify-content-center align-items-center mb-2">
                <Image
                  className="rounded-circle"
                  width={100}
                  height={100}
                  src="/assets/profile.jpeg"
                  alt="avatar"
                />

                <h3>John Doe</h3>
              </div>
              <q className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
                est?
              </q>
            </div>
          </div>
        </div>{" "}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card text-center px-3 bg-primary text-light  border-0 shadow-lg">
            <div className="card-body">
              <div className="d-flex gap-4 justify-content-center align-items-center mb-2">
                <Image
                  className="rounded-circle"
                  width={100}
                  height={100}
                  src="/assets/profile.jpeg"
                  alt="avatar"
                />

                <h3>John Doe</h3>
              </div>
              <q className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
                est?
              </q>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
