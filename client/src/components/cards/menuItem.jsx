import axios from 'axios';

export default function menuItem(name, picture, ingredients, price){

    return(
        <div className="menuItem">
            <img>{picture}</img>
            <div className="textContent">
                <div className="contentHead">
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
                <p>{ingredients}</p>
            </div>
        </div>
    )
}