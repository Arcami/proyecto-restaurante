import React, { useState, useEffect } from 'react';
import RestaurantCard from '../cards/restauranteCard';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch('http://localhost:3001/restaurants/all', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setRestaurants(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchRestaurants();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container">
            <div className="row">
                {restaurants.map(restaurant => (
                    <div className="col-md-4" key={restaurant._id}>
                        <RestaurantCard restaurant={restaurant} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantList;
