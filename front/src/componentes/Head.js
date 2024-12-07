import React, { useState } from 'react';
import { useCart } from '../componentes/CartContext';


function Head() {
  const { getCartCount } = useCart();
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header>
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/home">
            <img
              className="logoPrinc"
              src="/images/logo.png"
              alt="Mi tienda"
              title="Mi tienda"
              style={{ height: '100px' }}
            />
          </a>
          <a
            role="button"
            className={`navbar-burger${isMenuActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={isMenuActive}
            onClick={toggleMenu} 
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarMenu" className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <div className="message is-primary title is-5" style={{ margin: 0, padding: '10px' }}>
              <a
                className="nav-text-animado navbar-item"
                href="/productosTienda"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Compra aquí
              </a>
            </div>
            <div className="message is-primary title is-5" style={{ margin: 0, padding: '10px' }}>
              <a
                className="navbar-item nav-text-animado"
                href="/registrarUsuario"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Registrarme
              </a>
            </div>
            <a className="navbar-item" href="/en-carrito ">
              <img
                className="nav-text-animado"
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
            <div className="message is-primary title is-5">
              <a
                className="navbar-item nav-text-animado"
                href="/login"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                ¿Eres administrador? Inicia sesión aquí
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Head;
