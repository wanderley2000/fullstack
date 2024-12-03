import React from 'react';
import { useCart } from '../componentes/CartContext'; // para permitir el uso de estados y otros recursos.
import { Link } from 'react-router-dom';
import axios from 'axios';

const Carrito = () => {
  const { cart, clearCart } = useCart(); // clearCart para vaciar el carrito

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


  const chequearCompra = async () => {
    const id_compra = Date.now(); // genera id de compra

    // Mapear los productos del carrito, validando los valores
    const productos = cart.map(product => {
      const valorReal = parseFloat(product.valor);
      const cantReal = parseInt(product.quantity, 10);

      // Validar que los valores sean números antes de enviarlos
      if (isNaN(valorReal) || isNaN(cantReal)) {
        console.error('Producto con valores inválidos:', product);
        return null;
      }

      return {
        id: product.id,
        nombre: product.nombre,
        valor: valorReal,
        cantidad: cantReal
      };
    }).filter(product => product !== null);

    if (productos.length === 0) {
      alert('Error: Hay productos con datos inválidos en el carrito.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/registerSale', {
        id_compra,
        productos
      });
      console.log('Venta registrada:', response.data);
      clearCart(); // Vaciar el carrito después de realizar la compra
    } catch (error) {
      console.error('Error al registrar la venta:', error);
      alert('Hubo un error al realizar la compra');
    }
  };

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
            <Link to="/pagar" onClick={chequearCompra} className="button is-link">Pagar</Link>
            <button onClick={clearCart} className="button is-danger">
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
