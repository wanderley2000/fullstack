import React from "react";
import { Link } from "react-router-dom";

function Head() {
  return (
    <div>
      <br></br>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          height: "100px",
          fontSize: "20px",
          padding: "15px 5px",
        }}
      >
        <div className="container">
          <Link to="/home">
            <img
              src="/images/logo.png"
              alt="Mi tienda"
              title="Mi tienda"
              className="img-responsive"
              style={{
                width: "150px",
                height: "150px",
              }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/productosTienda"
                  aria-current="page"
                  style={{ color: "#333" }} // Color del texto
                >
                  ¡Compra aquí!
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/registrarUsuario" style={{ color: "#333" }}>
                  Registrarme
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "#333" }}>
                  Mi perfil
                </a>
              </li>
            </ul>
            <span className="nav-item" style={{ color: "#333" }}>
              <Link className="nav-link" to="/login" style={{ color: "#333" }}>
                ¿Eres administrador? Inicia sesión aquí.
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Head;
