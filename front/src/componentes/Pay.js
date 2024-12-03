import React, { useState } from "react";
import axios from "axios";

function Pay() {
  const [identificacion, setidentificacion] = useState("");
  const [cliente, setCliente] = useState(null);
  const [direccion, setDireccion] = useState("");
  const [celular, setCelular] = useState("");
  const [error, setError] = useState("");

  const cambiosIdentificacion = (e) => {
    setidentificacion(e.target.value);
  };

  const BuscarCliente = async () => {
    try {
      //para obtener la información del cliente
      const response = await axios.get(`http://localhost:3001/api/clientes/${identificacion}`);
      const data = response.data;

      //llenar el formulario con la información
      setCliente(data);
      setDireccion(data.direccion);
      setCelular(data.celular);
      setError("");
    } catch (err) {
      setError("Cliente no encontrado.");
      setCliente(null);
    }
  };

  const ActualizarCliente = async () => {
    try {
      //actualizar los datos del cliente
      await axios.put(`http://localhost:3001/api/clientes/${identificacion}`, {
        celular,
        direccion
      });

      alert("Datos actualizados correctamente");
    } catch (err) {
      alert("Error al actualizar los datos");
    }
  };

  const Pagar = () => {
    alert("Pago realizado con éxito.");
  };

  return (
    <div className="container">
      <h3>Por favor ingresa tu número de identificacion para continuar con el pago</h3>

      <div className="mb-3">
        <label htmlFor="identificacion" className="form-label">Número de identificacion</label>
        <input
          type="text"
          className="form-control"
          id="identificacion"
          placeholder="Número de identificacion"
          value={identificacion}
          onChange={cambiosIdentificacion}
        />
      </div>

      <button className="btn btn-primary" onClick={BuscarCliente}>
        Buscar Cliente
      </button>

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {cliente && (
        <div className="mt-5">
          <h4>Información del Cliente</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                value={cliente.nombres}
                disabled
              />
            </div>

            <div className="mb-3">
              <label htmlFor="celular" className="form-label">Celular</label>
              <input
                type="text"
                className="form-control"
                id="celular"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">Dirección</label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>

            <button type="button" className="btn btn-success" onClick={ActualizarCliente}>
              Actualizar Datos
            </button>

            <button type="button" className="btn btn-success mt-3" onClick={Pagar}>
              Pagar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Pay;
