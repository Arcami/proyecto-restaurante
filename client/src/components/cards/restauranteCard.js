
import React from 'react';

const RestaurantCard = ({ name, picture, address, category }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={picture} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{address}</p>
                <p className="card-text"><small className="text-muted">{category}</small></p>
            </div>
        </div>
    );
};

export default RestaurantCard;