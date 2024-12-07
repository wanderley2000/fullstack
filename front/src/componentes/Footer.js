import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="has-background-black-bis text-center text-lg-start">

      <div className="container p-4">
        <div className="row">
          {/* Columna 1 */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase title is-5 ">Mi Tienda</h5>
            <p>
            En esta tienda, ofrecemos artículos de última tecnología, diseños innovadores y las mejores tendencias del mercado. Compra desde la comodidad de tu hogar y disfruta de una experiencia fácil, rápida y segura. ¡Encuentra lo que buscas al alcance de un clic!
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
            <h5 className="text-uppercase title is-5">Enlaces útiles</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/home" className="has-background-black-bis">Inicio</Link></li>
              <li><Link to="/productosTienda" className="has-background-black-bis">Productos</Link></li>
              <li><Link to="/home" href="#!" className="has-background-black-bis">Contacto</Link></li>
              <li><Link to="/home" href="#!" className="has-background-black-bis">Acerca de</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase title is-5">Redes Sociales</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="https://www.facebook.com/" style={{textDecoration: 'none', color: 'inherit',  fontFamily: 'open sans'}}><img src="/images/facebook.png" alt="Facebook" title="Facebook" className="img-responsive" style={{ width: '20px', height: '20px'}}/> facebook</a></li>
              <li><a href="https://x.com" style={{textDecoration: 'none', color: 'inherit',  fontFamily: 'open sans'}}><img src="/images/twitter.png" alt="X" title="X" className="img-responsive" style={{ width: '20px', height: '20px'}}/> Twitter</a></li>
              <li><a href="https://instagram.com" style={{textDecoration: 'none', color: 'inherit',  fontFamily: 'open sans'}}><img src="/images/instagram.png" alt="Instagram" title="Instagram" className="img-responsive" style={{ width: '20px', height: '20px'}}/> Instagram</a></li>
              <li><a href="https://linkedin.com" style={{textDecoration: 'none', color: 'inherit',  fontFamily: 'open sans'}}><img src="/images/linkedin.png" alt="Linkedin" title="Linkedin" className="img-responsive" style={{ width: '20px', height: '20px'}}/> Linkedin</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3 text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
        © 2024 Mi Tienda
      </div>
    </footer>
  );
}

export default Footer;