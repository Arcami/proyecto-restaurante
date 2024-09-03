import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const UpdateProfileForm = ({ user, onClose }) => {
  const [username, setUsername] = useState(user.username);
  const [picture, setPicture] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (!username.trim()) {
      setError("No puedes dejar vacío el nombre de usuario.");
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    if (picture) {
      formData.append("picture", picture);
    }
    if (password) {
      formData.append("password", password);
    }

    try {
      const response = await fetch("http://localhost:3001/users/edit", {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error updating profile");
      }

      const result = await response.json();
      console.log("Datos actualizados:", result);
      window.location.reload();
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title text-center">Actualizar perfil</h5>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formProfilePicture">
            <Form.Label>Imagen de perfil</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setPicture(e.target.files[0])}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ backgroundColor: "#F8F9FA" }} // Gris tenue
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Nueva contraseña</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ backgroundColor: "#F8F9FA" }} // Gris tenue
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ backgroundColor: "#F8F9FA" }} // Gris tenue
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="danger" type="submit">
              Confirmar
            </Button>
            <Button variant="secondary" className="ms-2" onClick={onClose}>
              Cancelar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProfileForm;
