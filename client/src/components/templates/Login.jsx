import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, googleAuthProvider } from '../../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const LoginButton = ({ onClick, loading, children, variant }) => (
    <button
        onClick={onClick}
        className={`btn btn-${variant} w-100 mb-3`}
        disabled={loading}
        aria-busy={loading}
    >
        {loading ? 'Cargando...' : children}
    </button>
);

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
            navigate('/dashboard');
        } catch (error) {
            setError(`Error al iniciar sesión: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        setError('');
        try {
            await signInWithPopup(auth, googleAuthProvider);
            navigate('/dashboard');
        } catch (error) {
            setError(`Error al iniciar sesión con Google: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row justify-content-center w-100">
                <div className="col-11 col-sm-8 col-md-6 col-lg-4">
                    <div className="card p-4 shadow-sm">
                        <h2 className="text-center mb-4">Iniciar Sesión</h2>

                        {error && <div className="alert alert-danger mb-3">{error}</div>}

                        <input
                            type="email"
                            className="form-control mb-3"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label="Correo electrónico"
                        />

                        <input
                            type="password"
                            className="form-control mb-3"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            aria-label="Contraseña"
                        />

                        <LoginButton onClick={handleLogin} loading={loading} variant="primary">
                            Iniciar sesión
                        </LoginButton>

                        <LoginButton onClick={handleGoogleLogin} loading={loading} variant="danger">
                            Iniciar sesión con Google
                        </LoginButton>

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
