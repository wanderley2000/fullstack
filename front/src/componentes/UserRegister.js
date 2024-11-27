import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/UserRegister.css';

function UserRegister() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [vanityUrl, setVanityUrl] = useState("");
  const [amount, setAmount] = useState("");
  const [server, setServer] = useState("");
  const [textarea, setTextarea] = useState("");

  return (
    <div className="dark-form-container">
      <h5>Registra</h5>
            <div className="input-group mb-3">
        <input
          type="text"
          className="form-control dark-input"
          placeholder="Nombres y apellidos"
          aria-label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          className="form-control dark-input"
          placeholder="Número de documento"
          aria-label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control dark-input"
          placeholder="Correo electrónico"
          aria-label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          className="form-control dark-input"
          placeholder="Celular de contacto"
          aria-label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control dark-input"
          placeholder="Ciudad de residencia"
          aria-label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          className="form-control dark-input"
          placeholder="Dirección de residencia"
          aria-label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <Link to="/home" className="btn btn-dark">
          Continuar
        </Link>
      </div>
    </div>
  );
}

export default UserRegister;