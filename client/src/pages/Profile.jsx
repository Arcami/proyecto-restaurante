import React, { useState, useEffect } from "react";
import UserCard from "../components/cards/userCard";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileReservationCard from "../components/cards/ProfileReservationCard";
import UpdateProfileForm from "../components/cards/UpdateProfileForm";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const userResponse = await fetch(
          "http://localhost:3001/users/profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!userResponse.ok) throw new Error("Error fetching user data");
        const userData = await userResponse.json();
        setUser(userData);

        await getUserReservations();
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const getUserReservations = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/reservations/user?userId=${userId}`,
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

        const reservations = await response.json();

        const reservationsWithRestaurantNames = [];
        for (const reservation of reservations) {
          const restaurantResponse = await fetch(
            `http://localhost:3001/restaurants?id=${reservation.restaurantId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (!restaurantResponse.ok) {
            throw new Error(
              `Error fetching restaurant with ID: ${reservation.restaurantId}`
            );
          }

          const restaurantData = await restaurantResponse.json();
          const reservationWithRestaurant = {
            ...reservation,
            restaurantName: restaurantData.restaurant.name,
          };

          reservationsWithRestaurantNames.push(reservationWithRestaurant);
        }

        setRestaurants(reservationsWithRestaurantNames);
        setError(null);
      } catch (error) {
        setError(error.message);
        setRestaurants([]);
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchData();
  }, [userId]);

  if (loading)
    return (
      <div className="container mt-5 text-center">
        <p>Cargando...</p>
      </div>
    );
  if (error)
    return (
      <div className="container mt-5 text-center">
        <p>Error: {error}</p>
      </div>
    );

  return (
    <div className="container mt-5">
      {/* User Card */}
      <div className="row mb-4">
        <div className="col-12 d-flex flex-column align-items-center">
          {user ? (
            <>
              <UserCard username={user.username} picture={user.picture} />

              {/* Edit Button */}
              {!editing ? (
                <button
                  className="btn btn-danger btn-sm mt-2"
                  onClick={() => setEditing(!editing)}
                  style={{ width: "fit-content" }}
                >
                  Editar perfil
                </button>
              ) : null}
              {editing && (
                <UpdateProfileForm
                  user={user}
                  onClose={() => setEditing(false)}
                />
              )}
            </>
          ) : (
            <p>No user data available</p>
          )}
        </div>
      </div>

      {/* Title */}
      <div className="row mb-4">
        <div className="col-12">
          <h2
            className="text-center mb-4"
            style={{ color: "#C32C23", fontSize: "2rem" }}
          >
            Mis reservas
          </h2>
        </div>
      </div>

      {/* Reservation Cards */}
      <div className="row">
        {restaurants.length > 0 ? (
          restaurants.map((reservation) => (
            <div
              className="col-12 mb-4 d-flex justify-content-center"
              key={reservation._id}
            >
              <div
                className="card"
                style={{
                  width: "90%",
                  maxWidth: "30rem",
                  backgroundColor: "#F5F5F5",
                  borderColor: "#5B5B5B",
                }}
              >
                <div
                  className="card-body text-center"
                  style={{ color: "#3D3D3D" }}
                >
                  <h5 className="card-title" style={{ color: "#C32C23" }}>
                    {reservation.restaurantName}
                  </h5>
                  <p className="card-text">
                    <strong>Fecha de la reserva:</strong>{" "}
                    {new Date(reservation.date).toLocaleDateString()}
                  </p>
                  <p className="card-text">
                    <strong>Núm. de comensales:</strong>{" "}
                    {reservation.numberOfGuests}
                  </p>
                  <p className="card-text">
                    <strong>A nombre de:</strong>{" "}
                    {reservation.contactInfo.guestName}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      <strong>Estado:</strong> {reservation.status}
                    </small>
                  </p>
                  <button
                    className="btn btn-danger rounded-pill mt-2"
                    style={{ padding: "0.5rem 1.5rem" }}
                    onClick={() => {
                      // navigate logic goes here
                    }}
                  >
                    Visitar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Actualmente no tienes ninguna reserva.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
