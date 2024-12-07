import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewProduct = () => {
  const [producto, setProducto] = useState(null);  // Estado del producto
  const { id } = useParams(); // Obtener el id del producto desde la URL
  const navigate = useNavigate(); // useNavigate para la navegación

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/productos/${id}`);
        setProducto(response.data);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        setProducto(null);
      }
    };

    fetchProduct();
  }, [id]); // El efecto se ejecuta cada vez que cambia el id

  if (producto === null) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="tarjetas-container">
      <div className="box">
      <h1>{producto.nombre}</h1>

      {producto.imagen && (
        <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px', height: 'auto' }} />
      )}
      <p>{producto.marca}</p>
      <p>{producto.descripcion}</p>
      <p>Valor: ${producto.valor}</p>
      <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    </div>
      
  );
}

export default ViewProduct;