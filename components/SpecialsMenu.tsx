import React from "react";
import MenuCard from "./MenuCard";

export type Menu = {
  title: string;
  image: string;
  price: number;
  description: string;
};

const menuItems: Menu[] = [
  {
    title: "Greek Salad",
    image: "/assets/greek salad.jpg",
    price: 13,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ab eius culpa accusamus expedita reiciendis consectetur nam minima atque tenetur deleniti, quasi vero tempora illum praesentium blanditiis nisi voluptatibus fuga!",
  },
  {
    title: "Bruchetta",
    image: "/assets/bruchetta.jpg",
    price: 15,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ab eius culpa accusamus expedita reiciendis consectetur nam minima atque tenetur deleniti, quasi vero tempora illum praesentium blanditiis nisi voluptatibus fuga!",
  },
  {
    title: "Lemon Dessert",
    image: "/assets/lemon dessert.jpg",
    price: 13,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ab eius culpa accusamus expedita reiciendis consectetur nam minima atque tenetur deleniti, quasi vero tempora illum praesentium blanditiis nisi voluptatibus fuga!",
  },
];

const SpecialsMenu = () => {
  return (
    <section className="container space-v-lg">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="display-3 mb-0">Specials</h2>
        <button className="btn btn-secondary">Online Menu</button>
      </div>
      <div className="row row-gap-4">
        {menuItems.map((menu, index: number) => (
          <MenuCard key={index} menu={menu} />
        ))}
      </div>
    </section>
  );
};

export default SpecialsMenu;
