import React from 'react';


function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      {/* Sección superior */}
      <div className="container p-4">
        <div className="row">
          {/* Columna 1 */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Mi Tienda</h5>
            <p>
              Aquí puedes añadir una breve descripción sobre tu tienda, misión, o cualquier información relevante para tus usuarios.
            </p>
          </div>

          {/* Columna 2 */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Enlaces útiles</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">Inicio</a></li>
              <li><a href="#!" className="text-dark">Productos</a></li>
              <li><a href="#!" className="text-dark">Contacto</a></li>
              <li><a href="#!" className="text-dark">Acerca de</a></li>
            </ul>
          </div>

          {/* Columna 3 */}
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

      {/* Sección inferior */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Mi Tienda
      </div>
    </footer>
  );
}

export default Footer;