import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, googleAuthProvider } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('client');
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (password === confirmPassword) {
            try {
                await createUserWithEmailAndPassword(auth, username, password);
                console.log("Registro exitoso");
                navigate('/dashboard'); // Redirige al dashboard después del registro
            } catch (error) {
                console.error("Error en el registro:", error);
            }
        } else {
            console.log("Las contraseñas no coinciden");
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider);
            console.log("Inicio de sesión con Google exitoso");
            navigate('/dashboard'); // Redirige al dashboard después del inicio de sesión
        } catch (error) {
            console.error("Error al iniciar sesión con Google:", error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-sm" style={{ width: '300px' }}>
                <h2 className="text-center mb-4">Registro</h2>

                <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Usuario (email)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Repetir Contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <h6 className="text-center mb-3">
                    ¿Eres restaurante? <a href='/restaurantregister'>Haz clic aquí</a>
                </h6>

                <button
                    onClick={handleRegister}
                    className="btn btn-primary w-100 mb-3">
                    Registrarse
                </button>

                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-danger w-100 mb-3">
                    Registrarse con Google
                </button>

                <div className="text-center mt-3">
                    <a href="/login" className="text-primary">
                        ¿Ya tienes cuenta? Inicia sesión
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
