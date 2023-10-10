import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menu }) => {
  return (
    <section className="section-center">
      {menu.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </section>
  );
};

export default Menu;
