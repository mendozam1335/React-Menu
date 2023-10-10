import React from "react";
import CategoryButton from "./CategoryButton";

const Catagories = ({ category, displayCategory }) => {
  const catArray = Array.from(category);

  return (
    <section className="btn-container">
      {catArray.map((cat) => {
        return (
          <CategoryButton
            key={cat}
            name={cat}
            displayCategory={displayCategory}
          />
        );
      })}
    </section>
  );
};

export default Catagories;
