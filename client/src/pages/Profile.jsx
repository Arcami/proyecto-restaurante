import React, { useState, useEffect } from "react";
import UserCard from "../components/cards/userCard";
import RestaurantCard from "../components/cards/restaurantCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoSearchOutline } from "react-icons/io5";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch("http://localhost:3001/users/profile");
        if (!userResponse.ok) throw new Error("Error fetching user data");
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch restaurants data
        const restaurantsResponse = await fetch(
          "http://localhost:3001/restaurants"
        );
        if (!restaurantsResponse.ok)
          throw new Error("Error fetching restaurants data");
        const restaurantsData = await restaurantsResponse.json();
        setRestaurants(restaurantsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getRestaurantByName = async (name) => {
    try {
      const response = await fetch(
        `http://localhost:3001/restaurants/search?name=${name}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setRestaurant(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setRestaurant(null);
      console.error("Error fetching restaurant data:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      getRestaurantByName(query);
    }
  };

  if (loading)
    return (
      <div className="container mt-5">
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="container mt-5">
        <p>Error: {error}</p>
      </div>
    );

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-md-4">
          {/* Input de búsqueda con el icono */}
          <div className="input-group mb-3">
            <IoSearchOutline
              size={24}
              className="input-group-text cursor-pointer"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Search restaurants..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ borderRadius: "0.375rem" }}
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Renderizar la tarjeta de usuario */}
          {user ? (
            <UserCard username={user.username} picture={user.picture} />
          ) : (
            <p>No user data available</p>
          )}

          {/* Mostrar el resultado de la búsqueda */}
          {restaurant && (
            <div className="mt-3">
              <h3>Search Result</h3>
              <p>Owner: {restaurant.owner}</p>
              <p>Picture: {restaurant.picture}</p>
              <p>Address: {restaurant.address}</p>
              <p>Category: {restaurant.category}</p>
            </div>
          )}
        </div>

        <div className="col-md-8">
          <h2>Favorite Restaurants</h2>
          <div className="row">
            {restaurants.length > 0 ? (
              restaurants.map((restaurant) => (
                <div className="col-md-4 mb-4" key={restaurant.id}>
                  <RestaurantCard
                    name={restaurant.name}
                    image={restaurant.image}
                  />
                </div>
              ))
            ) : (
              <p>No restaurants available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
