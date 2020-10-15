import React, { useState, useEffect } from "react";
import Food from "./Food";
import "./App.css";

function App() {
  const APP_ID = "7fdaa32c";
  const APP_KEY = "d19e3a63051a412555fbe83a237e6e68";

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);

    setFoods(data.hits);
  };

  const name = "Mercy";
  // const foods = [
  //   { id: "1", name: "Amala", ingredients: "Yam flour, water", calories: "98" },
  //   { id: "2", name: "Fufu", ingredients: "cassava, water", calories: "150" },
  //   { id: "3", name: "Bean", ingredients: "beans, water", calories: "50" },
  // ];
  return (
    <div>
      <h1 className="App">My Food App</h1>
      {foods.map(function (food) {
        return (
          <Food
            id={food.id}
            name={food.name}
            ingredients={food.ingredients}
            calories={food.calories}
          />
        );
      })}
    </div>
  );
}

export default App;
