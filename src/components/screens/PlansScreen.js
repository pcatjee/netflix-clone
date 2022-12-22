import React from "react";
import "./plansScreen.css";
import { plans } from "./plan";

const PlansScreen = () => {
  return (
    <div className="plansScreen">
      {plans.map((curUser) => {
        return (
          <div
            key={curUser.id}
            className={`${
              curUser.isCurrentPackage && "plansScreen__plan--disabled"
            } plansScreen__plan`}
          >
            <div className="plansScreen__info">
              <h5>{curUser.name}</h5>
              <h6>{curUser.description}</h6>
            </div>
            <button>
              {curUser.isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlansScreen;
