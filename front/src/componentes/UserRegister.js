import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/UserRegister.css';

function UserRegister() {
  const [nombre, setNombre] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <div className="container d-flex justify-content-center flex-grow-1">
        <div className="col-md-6">
          <h5 className="text-center mb-4">Registra tu información</h5>
          <form>
            {/* Nombres y Apellidos */}
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombres y Apellidos</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Nombres y apellidos"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            {/* Número de documento */}
            <div className="mb-3">
              <label htmlFor="numeroDocumento" className="form-label">Número de Documento</label>
              <input
                type="text"
                className="form-control"
                id="numeroDocumento"
                placeholder="Número de documento"
                value={numeroDocumento}
                onChange={(e) => setNumeroDocumento(e.target.value)}
              />
            </div>

            {/* Celular de contacto */}
            <div className="mb-3">
              <label htmlFor="celular" className="form-label">Celular de Contacto</label>
              <input
                type="text"
                className="form-control"
                id="celular"
                placeholder="Celular de contacto"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
            </div>

            {/* Correo electrónico */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Botón de Continuar */}
            <div className="d-grid gap-2">
              <Link to="/home" className="btn btn-dark">
                Continuar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
