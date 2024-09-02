import React, { useState, useEffect } from 'react';
import RestaurantCard from '../components/cards/restauranteCard';
import {useLocation} from 'react-router-dom';
import RestaurantMenu from '../components/templates/restaurantMenu';
import RestaurantUserReservations from '../components/templates/restaurantUserReservations';
import ReviewsList from '../components/templates/restaurantReviews';


const RestaurantList = () => {
  const [restaurant, setRestaurant] = useState({'restaurant':{}});
  const [error, setError] = useState(null);
  const location = useLocation();
  const id = location.state.restaurantId;
  console.log(id)

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        fetch('http://localhost:3001/restaurants/?id='+id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setRestaurant(data);
        })

      } catch (err) {
        setError(err.message); 
      }
    };

    fetchRestaurants();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div className="container">
      <div className="row">
          <div className="col-md-4" key={restaurant.restaurant._id}>
          <RestaurantCard
          name = {restaurant.restaurant.name}
          picture = {restaurant.restaurant.picture}
          address = {restaurant.restaurant.address}
          category = {restaurant.restaurant.category}
          id = {restaurant.restaurant._id}
          >

          </RestaurantCard>
          <RestaurantMenu id = {id}/>
          <RestaurantUserReservations/>
          <ReviewsList/>
        </div>
        
          
        
      </div>
    </div>
  );
};

export default RestaurantList;
