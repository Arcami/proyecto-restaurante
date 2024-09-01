import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RestaurantMenu from '../components/templates/restaurantMenu';
import RestaurantCard from '../components/cards/restauranteCard';




 const RestaurantPage = () => {
    const location = useLocation();
    const [restaurant, setRestaurant] = useState([]);
    const [error, setError] = useState(null);
    const id = location.state.restaurantId


    useEffect(() => {
        const fetchRestaurant = async () => {
          try {
            const response = await fetch('http://localhost:3001/restaurants/?id='+id, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
    
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            setRestaurant(data); 
          } catch (err) {
            setError(err.message); 
          }
        };
    
        fetchRestaurant();
      }, [id]);

    if (error) {
        return <div>Error: {error}</div>; 
    }

    return (
        <div>
            <RestaurantCard
          name = {restaurant.restaurant.name}
          picture = {restaurant.restaurant.picture}
          address = {restaurant.restaurant.address}
          category = {restaurant.restaurant.category}
          id = {restaurant.restaurant._id}
          >

          </RestaurantCard>
            <RestaurantMenu id={id}/>
        </div>

  )
}

export default RestaurantPage;