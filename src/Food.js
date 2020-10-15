import React from "react";
import logo from "./logo.svg";

const Food = (props) => {
  const { id, name, ingredients, calories } = props;
  return (
    <div className="card" key={id}>
      <img src={logo} alt="" />
      <h3 className="card-header">{name}</h3>
      <p className="card-body">{ingredients}</p>
      <p className="footer">{calories} cal</p>
    </div>
  );
};

export default Food;
