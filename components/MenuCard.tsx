import React from "react";
import Image from "next/image";
import { Menu } from "./SpecialsMenu";

const MenuCard = ({ menu }: { menu: Menu }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 ">
      <div className="card rounded-top-4 border-0 shadow-sm">
        <Image
          className="card-img-top rounded-top-4"
          width={415}
          height={380}
          src={menu.image}
          alt="lemon dessert"
        />
        <div className="card-body bg-grey d-flex flex-column justify-content-between px-4">
          <div className="d-flex justify-content-between align-items-center">
            <h3>{menu.title}</h3>
            <h4 className="text-info">${menu.price}</h4>
          </div>
          <p className="card-text text-primary text-left fs-5">
            {menu.description}
          </p>
          <div className="d-flex gap-4">
            <h4>Order Delivery</h4>
            <i className="bi bi-scooter"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
