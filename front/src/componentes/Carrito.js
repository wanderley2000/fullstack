import React from 'react';
import { useCart } from '../componentes/CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const { cart, vaciarCarrito } = useCart(); // vaciarCarrito para vaciar el carrito

  // Calcular el total de la compra
  const valorTotal = cart.reduce((total, product) => {
    const valorReal = parseFloat(product.valor);
    const cantReal = parseInt(product.quantity, 10);
    if (isNaN(valorReal) || isNaN(cantReal)) {
      console.error('Error en los valores del producto:', product);
      return total;
    }
    return total + valorReal * cantReal;
  }, 0);

  return (
    <div className="container">
      <h1 className="title is-3">Carrito de Compras</h1>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <div className="columns is-multiline">
            {cart.map((product) => (
              <div className="column is-4" key={product.id}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={product.imagen} alt={product.nombre} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">{product.nombre}</p>
                    <p className="subtitle is-6">{product.marca}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio: ${product.valor}</p>
                    <p>Total: ${product.valor * product.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <p className="title is-4">Total a pagar: ${valorTotal}</p>
          </div>

          <div className="buttons">
            {/* Pasar cart a la página de pago */}
            <Link to={{ pathname: "/pagar", state: { cart } }} className="button is-link">Pagar</Link>
            <button onClick={vaciarCarrito} className="button is-danger">Vaciar Carrito</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;