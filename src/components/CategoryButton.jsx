import React from "react";

const CategoryButton = ({ name, displayCategory }) => {
  return (
    <button className="btn" onClick={() => displayCategory(name)}>
      {name}
    </button>
  );
};

export default CategoryButton;
