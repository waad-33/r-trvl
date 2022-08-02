import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out this epic destenations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items"></ul>
          <Carditem
            src="images/img-9.jpg"
            text="Explore the hidden waterfall deep inside the Amason Jungle"
            label="Adventure"
            path="/services"
          />
          <Carditem
            src="images/img-2.jpg"
            text="Travel throught the island of Bali"
            label="luxury"
            path="/services"
          />
          <Carditem
            src="images/img-3.jpg"
            text="Travel the ocean"
            label="maistery"
            path="/services"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
