import React from "react";

function Menu(props) {
  return (
    <div className="menu-items">
      {props.menu.map((item, index) => {
        return (
          <article key={index} className="menu-item">
            <img src={item.img} alt={item.title} className="menu-img" />
            <div className="menu-descDetails">
              <header className="menu-title">
                <h4>{item.title}</h4>
                <h4 className="price">{item.price}</h4>
              </header>
              <p>{item.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
