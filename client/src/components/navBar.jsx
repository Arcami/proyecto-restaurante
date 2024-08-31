import logo from '../public/assets/images/logo_1.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';

const Navbar = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [restaurant, setRestaurant] = useState(null);
    const [error, setError] = useState(null);

    const getRestaurantByName = async (name) => {
        try {
            const response = await fetch(`http://localhost:3001/restaurants/search?name=${encodeURIComponent(name)}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            setRestaurant(data);
            setError(null);  // Limpiar el error si la solicitud es exitosa
        } catch (error) {
            setError(error.message);
            setRestaurant(null);  // Limpiar el resultado si hay un error
            console.error('Error fetching restaurant data:', error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (query) {
            getRestaurantByName(query);  // Llama a la función con el nombre del restaurante
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* Logo en la parte izquierda */}
                <div className="col-md-4 d-flex justify-content-start align-items-center">
                    <img src={logo} alt="logo" height="30" />
                </div>

                {/* Barra de búsqueda en el centro */}
                <div className="col-md-4 d-flex justify-content-center position-relative">
                    <IoSearchOutline
                        size={24}
                        className="cursor-pointer"
                        onClick={() => setSearchOpen(!searchOpen)}
                    />
                    {searchOpen && (
                        <div className="position-absolute top-100 start-50 translate-middle-x mt-2 bg-white p-3 rounded shadow-lg">
                            <form onSubmit={handleSearch}>
                                <input
                                    type="text"
                                    placeholder="Buscar restaurantes..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="form-control mb-2"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    Buscar
                                </button>
                            </form>
                            {restaurant && (
                                <div className="mt-3">
                                    <h3>Resultado de la búsqueda</h3>
                                    <p>Owner: {restaurant.owner}</p>
                                    <p>Picture: {restaurant.picture}</p>
                                    <p>Address: {restaurant.address}</p>
                                    <p>Category: {restaurant.category}</p>
                                    {/* Muestra otros detalles según tu estructura de datos */}
                                </div>
                            )}
                            {error && (
                                <div className="mt-3 alert alert-danger">
                                    <strong>Error:</strong> {error}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Usuario, carrito y logout a la derecha */}
                <div className="col-md-4 d-flex justify-content-end align-items-center">
                    <div className="me-3">
                        <FaRegUser size={24} />
                    </div>
                    <div className="me-3">
                        <FiShoppingCart size={24} />
                    </div>
                    <div>
                        <HiOutlineLogout size={24} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
