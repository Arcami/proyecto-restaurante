import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Asegúrate de importar el archivo de estilos

const ReservationPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);
  const [menuQuantities, setMenuQuantities] = useState({});
  const [reservationData, setReservationData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.restaurantId;
  const token = localStorage.getItem('token');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setReservationData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleMenuChange = (event) => {
    const { name, value } = event.target;

    setMenuQuantities((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  if (!token) {
    navigate('/login');
  }

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:3001/menus/restaurant/?restaurantId=' + id, {
          method: 'GET',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setMenuItems(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMenuItems();
  }, [id, token]);

  const handleSubmit = async () => {
    let menuList = [];
    for (let [key, value] of Object.entries(menuQuantities)) {
      for (let i = 0; i < value; i++) {
        menuList.push(key);
      }
    }
    const body = {
      "restaurantId": id,
      "userId": localStorage.getItem('userId'),
      "numberOfGuests": reservationData.numberOfGuests,
      "menuItems": menuList,
      "date": reservationData.date,
      "contactInfo": {
        "guestName": reservationData.name,
        "phone": reservationData.tel
      }
    };
    try {
      const response = await fetch('http://localhost:3001/reservations/create', {
        method: 'POST',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        alert('Reserva realizada con éxito');
        navigate('/');
      } else {
        alert('Error al realizar la reserva');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Reserva tu mesa</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {error && <div className="alert alert-danger">{error}</div>}
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                name="name"
                className="form-control"
                placeholder="Nombre"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input
                type="tel"
                name="tel"
                className="form-control"
                placeholder="Número"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">¿Cuántos sois?</label>
              <input
                type="number"
                min="1"
                max="12"
                name="numberOfGuests"
                className="form-control"
                placeholder=""
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Fecha</label>
              <input
                type="date"
                name="date"
                className="form-control"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Menú</label>
              {menuItems.map((e) => (
                <div key={e._id} className="mb-2">
                  <label htmlFor={e._id}>{e.name}</label>
                  <input
                    type="number"
                    id={e._id}
                    name={e._id}
                    min="0"
                    max="12"
                    className="form-control"
                    placeholder="0"
                    onChange={handleMenuChange}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="btn btn-danger w-100"
              onClick={handleSubmit}
            >
              Reservar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
