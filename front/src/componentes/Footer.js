import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">

      <div className="container p-4">
        <div className="row">
          {/* Columna 1 */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Mi Tienda</h5>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Enlaces útiles</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/home" className="text-dark">Inicio</Link></li>
              <li><Link to="/productosTienda" className="text-dark">Productos</Link></li>
              <li><Link to="/home" href="#!" className="text-dark">Contacto</Link></li>
              <li><Link to="/home" href="#!" className="text-dark">Acerca de</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Redes Sociales</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="https://www.facebook.com/" style={{textDecoration: 'none', color: 'inherit',  fontFamily: 'open sans'}}><img src="/images/facebook.png" alt="Facebook" title="Facebook" className="img-responsive" style={{ width: '20px', height: '20px'}}/> facebook</a></li>
              <li><a href="https://x.com" style={{textDecoration: 'none', color: 'inherit',  fontFamily: 'open sans'}}><img src="/images/twitter.png" alt="X" title="X" className="img-responsive" style={{ width: '20px', height: '20px'}}/> Twitter</a></li>
              <li><a href="https://instagram.com" style={{textDecoration: 'none', color: 'inherit',  fontFamily: 'open sans'}}><img src="/images/instagram.png" alt="Instagram" title="Instagram" className="img-responsive" style={{ width: '20px', height: '20px'}}/> Instagram</a></li>
              <li><a href="https://linkedin.com" style={{textDecoration: 'none', color: 'inherit',  fontFamily: 'open sans'}}><img src="/images/linkedin.png" alt="Linkedin" title="Linkedin" className="img-responsive" style={{ width: '20px', height: '20px'}}/> Linkedin</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
        © 2024 Mi Tienda
      </div>
    </footer>
  );
}

export default Footer;