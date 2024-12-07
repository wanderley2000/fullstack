import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom"; // Importar useLocation

function Pay() {
  const [identificacion, setIdentificacion] = useState("");  // Estado para el número de identificación
  const [cliente, setCliente] = useState(null);  // Estado para la información del cliente
  const [direccion, setDireccion] = useState("");  // Estado para la dirección
  const [celular, setCelular] = useState("");  // Estado para el celular
  const [error, setError] = useState("");  // Estado para manejar errores

  // Usar useLocation para obtener el estado que pasamos desde Carrito
  const location = useLocation();
  const cart = location.state?.cart || []; // Si no hay cart, asignar un array vacío

  // Calcular el valor total del carrito
  useEffect(() => {
    const total = cart.reduce((total, product) => {
      const valorReal = parseFloat(product.valor);
      const cantReal = parseInt(product.quantity, 10);
      if (isNaN(valorReal) || isNaN(cantReal)) {
        console.error('Error en los valores del producto:', product);
        return total;
      }
      return total + valorReal * cantReal;
    }, 0);
  }, [cart]);

  // Manejar el cambio en el campo del documento
  const cambiosIdentificacion = (e) => {
    setIdentificacion(e.target.value);
  };

  // Buscar al cliente en la base de datos con el número de identificación
  const BuscarCliente = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/clientes/${identificacion}`);
      const data = response.data;
      setCliente(data);
      setDireccion(data.direccion);
      setCelular(data.celular);
      setError("");
    } catch (err) {
      setError("Cliente no encontrado.");
      setCliente(null);
    }
  };

  // Actualizar los datos del cliente si es necesario
  const ActualizarCliente = async () => {
    try {
      await axios.put(`http://localhost:3001/api/clientes/${identificacion}`, {
        celular,
        direccion,
      });
      alert("Datos actualizados correctamente");
    } catch (err) {
      alert("Error al actualizar los datos");
    }
  };

  // Función para realizar el pago
  const realizarPago = async () => {
    if (!cliente) {
      alert("Por favor, busque al cliente antes de continuar.");
      return;
    }

    // Mapear los productos del carrito
    const productos = cart.map((product) => ({
      id: product.id,
      nombre: product.nombre,
      valor: parseFloat(product.valor),
      cantidad: parseInt(product.quantity, 10),
    }));

    try {
      // Enviar la información al servidor para registrar la venta
      const response = await axios.post("http://localhost:3001/api/registerSale", {
        clienteId: cliente.id,
        documento: identificacion,
        direccion,
        celular,
        productos,
      });
      console.log("Venta registrada:", response.data);
      alert("Pago realizado con éxito.");
    } catch (error) {
      console.error("Error al registrar la venta:", error);
      alert("Hubo un error al realizar la compra");
    }
  };

  return (
    <div className="tarjetas-container">
      <div className="box">
    <div className="container">
      <h3>Por favor ingresa tu número de identificación para continuar con el pago</h3>

      <div className="mb-3">
        <label htmlFor="identificacion" className="form-label">Número de identificación</label>
        <input
          type="text"
          className="form-control"
          id="identificacion"
          placeholder="Número de identificación"
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

            <div className="mt-3">
              <button type="button" className="btn btn-success mt-3" onClick={realizarPago}>
                Confirmar Compra
              </button>
              
            </div>
          </form>
        </div>
      )}
    </div>
    </div>
    </div>
  );
}

export default Pay;