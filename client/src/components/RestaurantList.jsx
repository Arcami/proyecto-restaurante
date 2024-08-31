// src/components/RestaurantList.js
import React, { useEffect, useState } from 'react';
import RestaurantCard from './cards/restauranteCard';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/restaurants/all')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error('Error fetching restaurants:', error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {restaurants.map(restaurant => (
          <div className="col-md-4 mb-4" key={restaurant._id}>
            <RestaurantCard
              name={restaurant.name}
              picture={restaurant.picture}
              address={restaurant.address}
              category={restaurant.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
