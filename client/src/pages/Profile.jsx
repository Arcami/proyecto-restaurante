// src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import RestaurantCard from '../components/cards/restauranteCard';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [user, setUser] = useState(null); // Mantener el estado del usuario
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario está autenticado
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:3001/profile', {
    
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data); 
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          navigate('/login'); // Redirige a la página de login si no está autenticado
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      // Obtener todos los restaurantes si está autenticado
      fetch('http://localhost:3001/restaurants/all', {
   
      })
        .then(response => response.json())
        .then(data => setRestaurants(data))
        .catch(error => console.error('Error fetching restaurants:', error));
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="container">
      <h1 className="my-4">Perfil de {user ? user.name : 'Usuario'}</h1> 
      <h2 className="my-4">Mis Restaurantes</h2>
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

export default Profile;
