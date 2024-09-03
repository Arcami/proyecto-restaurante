import React, { useState, useEffect } from 'react';
import RestaurantCard from '../components/cards/restaurantCard';
import {useLocation} from 'react-router-dom';
import RestaurantMenu from '../components/templates/restaurantMenu';
import RestaurantUserReservations from '../components/templates/restaurantUserReservations';
import ReviewsList from '../components/templates/restaurantReviews';
import { useNavigate } from 'react-router-dom';
import MenuItem from '../components/cards/menuItem';


const ReservationPage = () => {
    const updatedTitle = "12"
    const menu = ["filete", "patatas"]
    const [menuItems, setMenuItems] = useState([]);
    const [error, setError] = useState(null);
    const [menuQuantities, setMenuQuantities] = useState({});
    const [reservationData, setReservationData] = useState({});
    const Navigate = useNavigate();
    const location = useLocation();
    const id = location.state.restaurantId;
    const token = localStorage.getItem('token');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        
        setReservationData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
        console.log(reservationData);
      };
    
      const handleMenuChange = (event) => {
        const { name, value } = event.target;
        
        setMenuQuantities((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
        console.log(menuQuantities);
      };

    if(!token) {
        Navigate('/login');
    }

    useEffect(() => {
        const fetchMenuItems = async () => {
          try {
            const response = await fetch('http://localhost:3001/menus/restaurant/?restaurantId='+id, {
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
            
            console.log(menuQuantities);
          } catch (err) {
            setError(err.message); 
          }
        };
    
        fetchMenuItems();
      },[]);




    return(
        <div>
            <label>Nombre</label>
            <input name="name" placeholder={updatedTitle} onChange={handleInputChange}></input>

            <label>Teléfono</label>
            <input type="tel" name="tel" placeholder={updatedTitle} onChange={handleInputChange}></input>

            <label>¿Cuántos sois?</label>
            <input type="number" min="1" max="12" name="numberOfGuests" placeholder={updatedTitle} onChange={handleInputChange}></input>

            <label>Fecha</label>
            <input type="date" name="date" placeholder={updatedTitle} onChange={handleInputChange}></input>

            <label>Menú</label>
            
            <div>
            {menuItems.map((e, key) => {
            return <div>
                <label for={e._id}>{e.name}</label>
                <input type="number" id={e._id} name={e._id} min="0" max="12" placeholder="0" onChange={handleMenuChange}/>
                </div>
             })}
            </div>
             <button onClick={() => {
                console.log(menuQuantities);
                console.log(reservationData);
                let menuList = [];
                for(let [key, value] of Object.entries(menuQuantities)) {
                    console.log(key, value)
                    for(let i = 0; i < value; i++) {
                        menuList.push(key)
                    }
                }
                console.log(menuList)
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

                

                }
                console.log(body)
                fetch('http://localhost:3001/reservations/create', {
                    method: 'POST',
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                    }) 

             }
             }>Reservar</button>
        </div>
        
    )
};

export default ReservationPage;
