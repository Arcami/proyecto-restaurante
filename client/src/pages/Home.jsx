import React, { useState, useEffect } from 'react';
import RestaurantList from '../components/templates/RestaurantList';
import { IoSearchOutline } from 'react-icons/io5';

const Home = () => {
  const [query, setQuery] = useState('');  // Variable para manejar la búsqueda
  const [restaurants, setRestaurants] = useState(null);  // Estado para los resultados de la búsqueda
  const [error, setError] = useState(null);  // Estado para manejar errores

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:3001/restaurants/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
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

  const getRestaurantByName = async (name) => {
    try {
      const response = await fetch(`http://localhost:3001/restaurants/search?name=${name}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setRestaurants(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setRestaurants(null);
      console.error('Error fetching restaurants data:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      getRestaurantByName(query);
    }
  };

  return (
    <div>
      <h1>Bienvenido a la página de inicio</h1>

      {/* Barra de búsqueda */}
      <form onSubmit={handleSearch}>
        <div className="input-group mb-3">
          <IoSearchOutline size={24} className="input-group-text cursor-pointer" />
          <input
            type="text"
            className="form-control"
            placeholder="Search restaurants..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ borderRadius: '0.375rem' }}
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>

      {/* Mostrar errores si existen */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Lista de restaurantes */}
      <RestaurantList error={error} restaurants={restaurants} />

    </div>

  );
};

export default Home;
