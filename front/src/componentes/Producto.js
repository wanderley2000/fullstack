import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Producto = ({ userProfile }) => {
  const [productos, guardarProductos] = useState([]);
  const [nuevoProducto, guardarNuevoProducto] = useState({
    nombre: "",
    marca: "",
    inventario: "",
    valor: "",
    vendido: "",
    imagen: "",
  });
  const [mensaje, guardarMensaje] = useState("");
  const [editado, guardarEditado] = useState(false);
  const [idProductoEditando, setIdProductoEditando] = useState(null);

  // Traer productos del back
  const recuperarProductos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/productos");
      guardarProductos(response.data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
      guardarMensaje("Error al cargar productos.");
    }
  };

  useEffect(() => {
    recuperarProductos();
  }, []);

  //cambios
  const cambioEnProducto = (e) => {
    const { name, value } = e.target;
    const valorTransformado = name === "marca" ? value.toUpperCase() : value;

    guardarNuevoProducto({
      ...nuevoProducto,
      [name]: valorTransformado,
    });
  };

  // Editar
  const editarProducto = (product) => {
    guardarNuevoProducto({
      nombre: product.nombre,
      marca: product.marca,
      inventario: product.inventario,
      valor: product.valor,
      vendido: product.vendido,
      imagen: product.imagen || ""
    });
    setIdProductoEditando(product.id);
    guardarEditado(true);
  };

  // Añadir
  const anadirProducto = async (e) => {
    e.preventDefault();
    try {
      if (editado) {
        const response = await axios.put(
          `http://localhost:3001/api/productos/${idProductoEditando}`,
          nuevoProducto
        );
        guardarMensaje(response.data.mensaje);
        guardarEditado(false);
        setIdProductoEditando(null);
      } else {
        const response = await axios.post(
          "http://localhost:3001/api/productos",
          nuevoProducto
        );
        guardarMensaje(response.data.mensaje);
      }
      guardarNuevoProducto({
        nombre: "",
        marca: "",
        inventario: "",
        valor: "",
        vendido: "",
        imagen: "",
      });
      recuperarProductos();
    } catch (error) {
      console.error("Error al agregar o editar producto:", error);
      guardarMensaje(
        error.response ? error.response.data.mensaje : "Error de conexión"
      );
    }
  };

  // Eliminar
  const eliminarProducto = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/productos/${id}`
      );
      guardarMensaje(response.data.mensaje);
      recuperarProductos();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      guardarMensaje(
        error.response ? error.response.data.mensaje : "Error de conexión"
      );
    }
  };

  return (
   
    <div className="producto-container">
      <div className="form-section box">
        <h1 className="title is-2">{editado ? "Editar Producto" : "Agregar Producto" }</h1>
        <form onSubmit={anadirProducto}>
          <input
            className="input is-primary"
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nuevoProducto.nombre}
            onChange={cambioEnProducto}
            required
          />
          <input
            className="input is-primary"
            type="text"
            name="marca"
            placeholder="Marca"
            value={nuevoProducto.marca}
            onChange={cambioEnProducto}
            readOnly={editado}
          />
          <input
            className="input is-primary"
            type="number"
            name="inventario"
            placeholder="Inventario"
            value={nuevoProducto.inventario}
            onChange={cambioEnProducto}
            required
          />
          <input
            className="input is-primary"
            type="number"
            name="valor"
            placeholder="Valor"
            value={nuevoProducto.valor}
            onChange={cambioEnProducto}
            required
          />
          <input
           className="input is-primary"
            type="number"
            name="vendido"
            placeholder="Vendidos"
            value={nuevoProducto.vendido}
            onChange={cambioEnProducto}
            required
          />
          <input
            className="input is-primary"
            type="url"
            name="imagen"
            placeholder="Pega la URL de tu imagen"
            value={nuevoProducto.imagen}
            onChange={cambioEnProducto}
            required
          />
          
          <button type="submit"
            className="input is-primary">
            {editado ? "Actualizar Producto" : "Agregar Producto"}
          </button>
        </form>
        {mensaje && <p>{mensaje}</p>}
      </div>
      <div className="table-section box">

        <p className="title is-2 ">Lista de productos</p>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Inventario</th>
              <th>Valor</th>
              <th>Vendidos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((product, index) => (
              <tr key={index}>
                <td>{product.nombre}</td>
                <td>{product.marca}</td>
                <td>{product.inventario}</td>
                <td>{product.valor}</td>
                <td>{product.vendido}</td>
                <td>
                  
                    <button
                      className="button-edit"
                      onClick={() => editarProducto(product)}
                    >
                      Editar
                    </button>
                    <button
                      className="button-delete"
                      onClick={() => eliminarProducto(product.id)}
                    >
                      Eliminar
                    </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Producto;
