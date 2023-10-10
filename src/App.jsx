import { useEffect, useState } from "react";
import Title from "./components/Title";
import data from "./data";
import Menu from "./components/Menu";
import Catagories from "./components/Catagories";

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    const tempCatagories = data.map((item) => item.category);
    const tempSet = new Set(tempCatagories);
    const categories = ["all", ...tempSet];
    setCategory(categories);
  }, []);

  const displayCategory = (cat) => {
    if (cat === "all") {
      return setMenu(data);
    }
    setMenu(
      data.filter((item) => {
        return item.category === cat;
      })
    );
  };
  return (
    <main>
      <Title />
      <Catagories category={categories} displayCategory={displayCategory} />
      <Menu menu={menu} />
    </main>
  );
};
export default App;
