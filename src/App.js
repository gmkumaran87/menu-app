import React, { useState } from "react";
import data from "./data";
import Category from "./Category";
import Menu from "./Menu";

function App() {
  const [menu, setMenuItems] = useState(data);

  const category = [
    "all",
    ...new Set(
      data.map((el) => {
        return el.category;
      })
    ),
  ];

  const filterItems = (category) => {
    console.log(`menu`, category);
    if (category === "all") {
      setMenuItems(data);
      return;
    } else {
      const newItems = data.filter((el) => el.category === category);

      setMenuItems(newItems);
    }
  };

  return (
    <div className="App">
      <section className="menu section">
        <div className="title">
          <h2> Our Menu </h2>
          <div className="underline"> </div>
        </div>
        <Category categories={category} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </div>
  );
}

export default App;
