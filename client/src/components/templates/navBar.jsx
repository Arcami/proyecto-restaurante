import logo from "../../images/logo_1.svg";
import mobileLogo from "../../images/logo_2.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { ThemeContext } from "../../context/ThemeContext";
import { BiAdjust } from "react-icons/bi";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLoginClick = () => {
        navigate("/login"); // Redirigir a la página de login
    };

    const handleLogoutClick = () => {
        // Aquí puedes agregar la lógica para cerrar sesión, como eliminar el token de autenticación
        setIsAuthenticated(false);
        navigate("/login"); // Redirige al usuario a la página de login después de cerrar sesión
    };
    const handleLogoClick = () => {
        navigate("/home"); // Redirige a la página de inicio
    };

    return (
        <nav
            className={`navbar navbar-expand-lg ${theme === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"
                }`}
        >
            <div className="container-fluid">
                <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                    <img
                        src={mobileLogo}
                        alt="logo"
                        onClick={handleLogoClick}
                        className="d-block d-md-none" // Mostrar solo en móvil
                        height="30"
                    />
                    <img
                        src={logo}
                        alt="logo"
                        onClick={handleLogoClick}
                        className="d-none d-md-block" // Mostrar solo en pantallas grandes
                        height="30"
                    />
                </div>
                <div className="col-md-4 d-flex justify-content-end align-items-center">
                    <div className="me-3">
                        {/* Agregar la función onClick para redirigir al hacer clic en el icono */}
                        {isAuthenticated ? (
                            <HiOutlineLogout
                                size={24}
                                style={{
                                    color: theme === "light" ? "#000" : "#fff",
                                    cursor: "pointer",
                                }}
                                onClick={handleLogoutClick}
                            />
                        ) : (
                            <FaRegUser
                                size={24}
                                style={{
                                    color: theme === "light" ? "#000" : "#fff",
                                    cursor: "pointer",
                                }}
                                onClick={handleLoginClick}
                            />
                        )}
                    </div>
                    <div>
                        <BiAdjust
                            size={24}
                            onClick={toggleTheme}
                            style={{
                                cursor: "pointer",
                                backgroundColor: theme === "light" ? "#fff" : "#333",
                                color: theme === "light" ? "#000" : "#fff",
                            }}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;