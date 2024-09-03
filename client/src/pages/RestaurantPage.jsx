import React, { useState, useEffect } from "react";
import RestaurantCard from "../components/cards/restaurantCard";
import { useLocation } from "react-router-dom";
import RestaurantMenu from "../components/templates/restaurantMenu";
import RestaurantUserReservations from "../components/templates/restaurantUserReservations";
import ReviewsList from "../components/templates/restaurantReviews";
import { useNavigate } from "react-router-dom";

const RestaurantList = () => {
  const [restaurant, setRestaurant] = useState({ restaurant: {} });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const id = location.state.restaurantId;
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        fetch("http://localhost:3001/restaurants/?id=" + id, {
          method: "GET",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.status === 403) {
              navigate("/login");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data) {
              setLoading(false);
              setRestaurant(data);
            }
          });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRestaurants();
  }, [id, loading]);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <p>Cargando...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-danger">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <RestaurantCard
            name={restaurant.restaurant.name}
            picture={restaurant.restaurant.picture}
            address={restaurant.restaurant.address}
            category={restaurant.restaurant.category}
            id={restaurant.restaurant._id}
          />
        </div>
        <div className="col-md-8">
          <div className="row mb-4">
            <div className="col-12">
              <h3 className="text-center mb-4">Menú</h3>
              <RestaurantMenu id={id} />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <h3 className="text-center mb-4">Mis Reservas</h3>
              <RestaurantUserReservations />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <h3 className="text-center mb-4">Reseñas</h3>
              <ReviewsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
