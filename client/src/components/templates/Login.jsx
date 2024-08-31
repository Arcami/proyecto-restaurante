import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, googleAuthProvider } from '../../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Inicio de sesión exitoso");
            // Puedes redirigir al usuario a una página después de iniciar sesión exitosamente
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider);
            console.log("Inicio de sesión con Google exitoso");
            // Redirige al usuario a una página después de iniciar sesión exitosamente
            window.location.href = "/dashboard";  // Cambia "/dashboard" por la ruta que prefieras

        } catch (error) {
            console.error("Error al iniciar sesión con Google:", error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-sm" style={{ width: '300px' }}>
                <h2 className="text-center mb-4">Iniciar Sesión</h2>

                <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleLogin}
                    className="btn btn-primary w-100 mb-3">
                    Iniciar sesión
                </button>

                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-danger w-100 mb-3">
                    Iniciar sesión con Google
                </button>

                <div className="text-center mt-3">
                    <a href="/register" className="text-primary">
                        ¿No tienes cuenta? Regístrate
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
