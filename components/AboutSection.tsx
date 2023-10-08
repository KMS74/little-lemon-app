import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="container p-4">
      <div className="row row-gap-4">
        <div className="col-lg-7 col-sm-12  ">
          <div className="d-flex flex-column">
            <h1 className="display-2 text-secondary fw-bold mb-0 pb-0">
              Little Lemon
            </h1>
            <h6 className="display-6">Chicago</h6>
          </div>
          <p className="fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sequi
            nobis unde, perferendis qui esse, eos quae, cupiditate molestias a
            dolorum excepturi odit ut eligendi sunt! In, aspernatur. Dolore,
            dolor! nobis unde, perferendis qui esse, eos quae, cupiditate
            molestias a dolorum excepturi odit ut eligendi sunt! In, aspernatur.
            Dolore, dolor!
          </p>
        </div>
        <div className="col-lg-5 col-sm-12 text-center">
          <Image
            className="rounded-3 text-center"
            width={400}
            height={440}
            src="/assets/Mario and Adrian A.jpg"
            alt="Mario and Adrian A"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
