import React, { useState, useEffect } from 'react';
import RestaurantCard from '../cards/restaurantCard';

const RestaurantList = ({ restaurants }) => {
  const [error, setError] = useState(null);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {restaurants ? restaurants.map((restaurant) => {
          return (
            <div className="col-md-4" key={restaurant._id}>
              <RestaurantCard
                name={restaurant.name}
                picture={restaurant.picture}
                address={restaurant.address}
                category={restaurant.category}
                id={restaurant._id}
              ></RestaurantCard>
            </div>
          );
        }) : null}
      </div>
    </div>
  );
};

export default RestaurantList;
