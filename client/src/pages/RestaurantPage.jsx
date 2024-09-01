import React from 'react';
import { useParams } from 'react-router-dom';



export default function RestaurantPage() {
    const id = useParams()
    console.log(id)
    return (
        <div>Restaurant page! </div>

  )
}