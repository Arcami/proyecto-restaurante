import { useEffect, useState } from "react"
import ReservationCard from "../cards/reservationCard"
import { useNavigate } from 'react-router-dom';



export default function UserRestaurantReservations({user, restaurant}){
    const navigate = useNavigate();
    const [ restaurant, setRestaurant ] = useState (restaurant);
    const [ user, setUser ] = useState (user);
    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch('http://localhost:3001/reservations/restaurant/user', {
        method: 'GET',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
           },
            
          })
        .then(res => res.json())
        .then(json => setData(json))
    },
    
   [])
   console.log(data);
    return (
        <div className="mainContainer">
          
              <ul className="getAllUl"> {data.map((dataEntry) => {
                return <li><Task
                      title={dataEntry.title}
                      project={dataEntry.project}
                      category={dataEntry.category}
                      status={dataEntry.status}
                      _id={dataEntry._id}
                  >

            </Task></li> 
            
            }
    
              )}</ul>
        </div>)

}