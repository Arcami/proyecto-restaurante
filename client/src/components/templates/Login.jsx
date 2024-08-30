import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, googleAuthProvider } from '../../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './styles.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        setLoading(true);
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Inicio de sesión exitoso");
            navigate('/dashboard');  // Redirige al dashboard después del inicio de sesión
        } catch (error) {
            setError("Error al iniciar sesión: " + error.message);
            console.error("Error al iniciar sesión:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        setError('');
        try {
            await signInWithPopup(auth, googleAuthProvider);
            console.log("Inicio de sesión con Google exitoso");
            navigate('/dashboard');  // Redirige al dashboard después del inicio de sesión
        } catch (error) {
            setError("Error al iniciar sesión con Google: " + error.message);
            console.error("Error al iniciar sesión con Google:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card p-4 shadow-sm">
                        <h2 className="text-center mb-4">Iniciar Sesión</h2>

                        {error && <div className="alert alert-danger mb-3">{error}</div>} {/* Muestra el error si existe */}

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
                            className="btn btn-primary w-100 mb-3"
                            disabled={loading}
                        >
                            {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                        </button>

                        <button
                            onClick={handleGoogleLogin}
                            className="btn btn-danger w-100 mb-3"
                            disabled={loading}
                        >
                            {loading ? 'Iniciando sesión con Google...' : 'Iniciar sesión con Google'}
                        </button>

                        <div className="text-center mt-3">
                            <a href="/register" className="text-primary">
                                ¿No tienes cuenta? Regístrate
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
