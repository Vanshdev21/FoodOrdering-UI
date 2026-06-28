import ResturantCard from "./ResturantCard";
import restaurants from "../utils/resturantData";
import { useState } from "react";
const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurants);
  function onClicked(restaurants) {
    const filteredRes = [];
    for (const resturant of restaurants) {
      if (resturant["rating"] >= 4.5) {
        filteredRes.push(resturant);
      }
      setRestaurants(filteredRes);
    }
  }
  return (
    <div className="body-container">
      <div className="search">
        <input type="text" />
        <button>Search</button>
        <button
          onClick={() => {
            onClicked(restaurants);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="resturant-card-container">
        {restaurants.map((restaurant) => {
          return (
            <ResturantCard key={restaurant.id} restaurantData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
