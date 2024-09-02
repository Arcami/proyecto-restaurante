import { useNavigate } from "react-router-dom";

export default function ProfileReservationCard({
  contactInfo,
  date,
  numberOfGuests,
  status,
  restaurantId,
  restaurantName,
}) {
  const navigate = useNavigate();

  // Format the date to a more readable format
  const formattedDate = new Date(date).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{restaurantName}</h5>
        <p className="card-text">Fecha de la reserva: {formattedDate}</p>
        <p className="card-text">Núm. de comensales: {numberOfGuests}</p>
        <p className="card-text">A nombre de: {contactInfo.guestName}</p>
        <p className="card-text">
          <small className="text-muted">Estado: {status}</small>
        </p>
        <button
          onClick={() => {
            navigate("/restaurant", { state: { restaurantId } });
          }}
        >
          Visitar
        </button>
      </div>
    </div>
  );
}
