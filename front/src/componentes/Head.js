import React from 'react';
import { useCart } from '../componentes/CartContext';

function Head() {
  const { getCartCount } = useCart();

  return (
    <header>
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar">
          <a className="navbar-item" href="/home">
            <img
              src="/images/logo.png"
              alt="Mi tienda"
              title="Mi tienda"
              style={{ height: '100px' }}
            />
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-start">
            <div className="message is-primary title is-5" style={{ margin: 0, padding: '10px' }}>
              <a
                className="navbar-item"
                href="/productosTienda"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Compra aqui
              </a>
            </div>
            <div className="message is-primary title is-5" style={{ margin: 0, padding: '10px' }}>
              <a
                className="navbar-item"
                href="/registrarUsuario"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Registrarme
              </a>
            </div>
            <a className="navbar-item" href="/en-carrito">
              <img
                src="/images/carrito.png"
                alt="Carrito"
                title="Carrito"
                style={{ height: '100px' }}
              />
              <span>{getCartCount()}</span>
            </a>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="message is-primary title is-5" style={{}}>
              <a
                className="navbar-item"
                href="/login"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                ¿Eres administrador? Inicia sesión aquí.
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Head;