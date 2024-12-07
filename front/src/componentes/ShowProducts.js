import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../componentes/CartContext';

const ShowProducts = () => {
  const [products, setProducts] = useState([])
  const { agregarCarrito } = useCart(); // Acceder a la función para agregar productos al carrito

  // productos desde el backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/productos');
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
          
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProducts();
  }, []);

  const agregarAlCarrito = (product) => {
    agregarCarrito(product); // Agregar al carrito
  };

  return (
    <div className="tarjetas-container">
      <div className="columns is-multiline">
        {products.length === 0 ? (
          <p>No hay productos disponibles</p>
        ) : (
          products.map((product) => (
            <div className="column is-4" key={product.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={product.imagen} alt={product.nombre} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{product.nombre}</p>
                      <p className="subtitle is-6">{product.marca}</p>
                    </div>
                  </div>

                  <div className="content">
                    <p>Valor: ${product.valor}</p>
                    <p>Stock: {product.inventario > 0 ? 'Disponible' : 'Agotado'}</p>
                    <Link to={`/ver-detalle/${product.id}`} className="button is-link is-small">
                      Ver más
                    </Link>
                    <button
                      className="button is-link is-small"
                      onClick={() => agregarAlCarrito(product)} // Agregar al carrito
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShowProducts;