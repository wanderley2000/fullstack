
import React, { useState } from "react";
import '../styles/UserRegister.css';

function UserRegister() {
  const [nombres, setnombres] = useState("");
  const [identificacion, setidentificacion] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(false);

  // manejar el envío del formulario
  const enviarFormulario = async (e) => {
    e.preventDefault();
    setCargando(true);
    setMensaje('');

    // Crear objeto con los datos del cliente
    const nuevoCliente = { 
      nombres,
      identificacion,
      celular,
      email,
      direccion
    };

    try {
      // Enviar los datos al backen
      const response = await fetch('http://localhost:3001/api/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoCliente),
      });

      if (!response.ok) {
        throw new Error('Error al registrar el cliente.');
      }

      const result = await response.json();
      setMensaje(result.message || 'Cliente registrado exitosamente.');
      setCargando(false);
      
      // Limpiar el formulario
      setnombres('');
      setidentificacion('');
      setCelular('');
      setEmail('');
      setDireccion('');
    } catch (error) {
      setMensaje(error.message || 'Hubo un error al registrar el cliente.');
      setCargando(false);
    }
  };

  return (
  <div className="tarjetas-container">
    <div className="container-fluid d-flex flex-column min-vh-100 ">
      <div className="container d-flex justify-content-center flex-grow-1 ">
        <div className="col-md-6 box title is-6">
          <h5 className="text-center mb-4 title is-4">Registra tu información</h5>
          <form onSubmit={enviarFormulario}>

            <div className="mb-3">
              <label htmlFor="nombres" className="form-label">Nombres y Apellidos</label>
              <input
                className="form-control"
                type="text"
                id="nombres"
                placeholder="Nombres y apellidos"
                value={nombres}
                onChange={(e) => setnombres(e.target.value)}
                required
              />
            </div>


            <div className="mb-3">
              <label htmlFor="identificacion" className="form-label">Número de Documento</label>
              <input
                className="form-control"
                type="text"
                id="identificacion"
                placeholder="Número de documento"
                value={identificacion}
                onChange={(e) => setidentificacion(e.target.value)}
                required
              />
            </div>


            <div className="mb-3">
              <label htmlFor="celular" className="form-label">Celular de Contacto</label>
              <input
                className="form-control"
                type="text"
                id="celular"
                placeholder="Celular de contacto"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
                required
              />
            </div>


            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>


            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">Dirección</label>
              <input
                className="form-control"
                type="text"
                id="direccion"
                placeholder="Dirección de entrega"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                required
              />
            </div>


            {mensaje && <div className="alert alert-info">{mensaje}</div>}


            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary" disabled={cargando}>
                {cargando ? 'Registrando...' : 'Continuar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}

export default UserRegister;