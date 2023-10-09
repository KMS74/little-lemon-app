import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className={`bg-primary p-4 space-v-lg`}>
      <div className="container py-4">
        <div className="row row-gap-4 align-items-center">
          <div className="col-lg-7 col-sm-12  ">
            <div className="d-flex flex-column">
              <h1 className="display-2 text-secondary fw-bold mb-0 pb-0">
                Little Lemon
              </h1>
              <h6 className="display-6 text-white">Chicago</h6>
            </div>
            <p className="text-white fs-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              sequi nobis unde, perferendis qui esse, eos quae, cupiditate
              molestias a dolorum excepturi odit ut eligendi sunt! In,
              aspernatur. Dolore, dolor!
            </p>
            <Link href="/reservation" className="btn btn-secondary">
              Reserve a Table
            </Link>
          </div>
          <div className="col-lg-5 col-sm-12 text-lg-end text-sm-center">
            <Image
              className="rounded-3"
              width={400}
              height={440}
              src="/assets/restauranfood.jpg"
              alt="restauranfood"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
