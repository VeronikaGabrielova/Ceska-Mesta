import React from "react";
import "./style.css";

export const City = ({ name, population, area, district, photo }) => {
  return (
    <div className="city">
      <h2>{name}</h2>
      <img src={photo} />
      <p>Počet obyvatel: {population}</p>
      <p>Okres: {district}</p>
      <p>Rozloha: {area} km</p>
    </div>
  );
};
