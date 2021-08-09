import React from "react";
import "./Card.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-4.jpg"
              text="自己紹介"
              label="About"
              path="/about"
            />
            <CardItem
              src="images/img-2.jpg"
              text="スキルや経歴など"
              label="Skill"
              path="/skill"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="text text text text text text text text text text"
              label="text"
              path="/"
            />
            <CardItem
              src="images/img-4.jpg"
              text="text text text text text text text text text text"
              label="text"
              path="/"
            />
            <CardItem
              src="images/img-1.jpg"
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
