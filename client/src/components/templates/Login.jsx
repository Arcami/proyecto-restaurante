import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });


      const data = await response.json();

      if (!response.ok) {
        // La respuesta no es OK, intenta analizar el error
        setError(data.message || 'Login failed. Please check your credentials.');
      } else {
        // La respuesta es OK, redirige al usuario
        alert('Login successful!');
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.user._id);
        navigate('/'); // Redirige a la página /home tras el inicio de sesión
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <Container style={{ width: "300px", margin: "0 auto", padding: "20px" }}>
      <Card>
        <Card.Title className="text-center">Iniciar sesión</Card.Title>
        <Card.Body>
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
            <Form.Group controlId="formPassword" className="mb-4">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Introduce tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-2"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Entrar"}
            </Button>
            <p className="text-center">
              ¿Eres nuevo?{" "}
              <a href="#" onClick={() => navigate("/register")}>
                Regístrate
              </a>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
