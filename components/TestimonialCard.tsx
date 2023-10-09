import React from "react";
import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card text-center px-3   border-0 shadow-lg">
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
          <q className="card-text fst-italic lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
            est?
          </q>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
