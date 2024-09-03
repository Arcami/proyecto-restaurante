import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.user._id);
                alert('Registration successful!');
                navigate('/home');
            } else {
                setError('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4">
                <Card.Body>
                    <Card.Title className="text-center mb-4">Register</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form.Group controlId="formUsername" className="mb-3">
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Introduce tu nombre de usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Introduce tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formConfirmPassword" className="mb-4">
                            <Form.Label>Confirma tu contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Introduce tu contraseña"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mb-2">
                            Registrar
                        </Button>
                        <p className="text-center">
                            Ya tienes una cuenta? <a href="#" onClick={() => navigate('/login')}>¡Inicia sesión!</a>
                        </p>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Register;
