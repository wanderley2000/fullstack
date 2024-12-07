import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, guardarCarrito] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [productInventory, setProductoInventario] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener productos desde el backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/productos');
        setProductoInventario(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Guardar el carrito en localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Función para actualizar inventario en el backend
  const actualizarInventarioEnBack = async (productId, nuevoInventario) => {
    try {
      await axios.put(`http://localhost:3001/api/productos/${productId}`, { 
        inventario: nuevoInventario  // Actualizamos solo el inventario
      });
      console.log('Inventario actualizado con éxito');
    } catch (error) {
      console.error('Error al actualizar el inventario en el backend:', error);
    }
  };

  //agregar productos al carrito
  const agregarCarrito = (product) => {
    const inventory = productInventory.find(item => item.id === product.id)?.inventario;
    const quantityInCart = cart.find(item => item.id === product.id)?.quantity || 0;
    
    if (inventory <= quantityInCart) {
      alert('No hay suficiente inventario');
      return;
    }

    guardarCarrito((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // Reducir la cantidad del producto en el inventario
    setProductoInventario(prevInventory =>
      prevInventory.map(item =>
        item.id === product.id
          ? { ...item, inventario: item.inventario - 1 }
          : item
      )
    );
    
    // Actualizar el inventario en el backend
    actualizarInventarioEnBack(product.id, inventory - 1);
  };

  // Función para eliminar productos del carrito
  const removerDelCarrito = (productId) => {
    guardarCarrito((prevCart) => {
      const product = prevCart.find(item => item.id === productId);
      if (product) {
        // Restaurar el inventario
        setProductoInventario(prevInventory =>
          prevInventory.map(item =>
            item.id === product.id
              ? { ...item, inventario: item.inventario + product.quantity }
              : item
          )
        );
        // Actualizar el inventario en el backend
        actualizarInventarioEnBack(productId, product.inventario + product.quantity);

        return prevCart.filter(item => item.id !== productId);
      }
      return prevCart;
    });
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setProductoInventario(prevInventory =>
      prevInventory.map(item => ({
        ...item,
        inventario: item.inventario + (cart.find(p => p.id === item.id)?.quantity || 0)
      }))
    );
    guardarCarrito([]); // Vaciar el carrito
    localStorage.removeItem('cart'); // Eliminar carrito de localStorage
  };

  // Función para obtener el número total de productos en el carrito
  const getCartCount = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  // Mostrar mensaje de carga mientras obtenemos los productos
  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <CartContext.Provider value={{ cart, agregarCarrito, vaciarCarrito, getCartCount, removerDelCarrito, productInventory }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);