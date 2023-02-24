import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { City } from "./components/City";
import { cities } from "./cz-cities";

const App = () => {
  return (
    <div className="cities">
      {cities.map((city) => (
        <City
          key={city.name}
          name={city.name}
          population={city.population}
          area={city.area}
          district={city.district}
          photo={city.photo}
        />
      ))}
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
