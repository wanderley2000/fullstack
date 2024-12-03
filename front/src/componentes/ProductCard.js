import React from 'react';
import PropTypes from 'prop-types';

// Para mostrar una tarjeta de producto
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imagen} alt={product.nombre} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.nombre}</h3>
        <p className="product-price">${product.valor}</p>
        <p className="product-stock">
          {product.inventario > 0 ? 'Disponible' : 'Sin Stock'}
        </p>
        <p className="product-sold">Vendidos: {product.vendido}</p>
      </div>
    </div>
  );
};

// Validación de las propiedades del producto
ProductCard.propTypes = {
  product: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired,
    inventario: PropTypes.number.isRequired,
    vendido: PropTypes.number.isRequired
  }).isRequired
};

export default ProductCard;