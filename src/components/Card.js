import React from "react";
import "./Card.css";
import CardItem from "./CardItem";
import image1 from "./images/img-1.jpg";
import image2 from "./images/img-2.jpg";
import image3 from "./images/img-3.jpg";
import image4 from "./images/img-4.jpg";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image1}
              text="自己紹介"
              label="About"
              path="/about"
            />
            <CardItem
              src={image2}
              text="スキルや経歴など"
              label="Skill"
              path="/skill"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image3}
              text="text text text text text text text text text text"
              label="text"
              path="/"
            />
            <CardItem
              src={image4}
              text="text text text text text text text text text text"
              label="text"
              path="/"
            />
            <CardItem
              src={image1}
              text="text text text text text text text text text text"
              label="text"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
