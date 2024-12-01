import React from "react";
import { Link } from "react-router-dom";
function ShowProducts() {
 
  const productos = [1,2,3,4,5,6];  

  return (
    <div className="tarjetas-container">
      <div className="columns is-multiline">
        {productos.map((producto, index) => (
          <div className="column is-4" key={index}> {}
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/assets/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/assets/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Producto {producto}</p>
                    <p className="subtitle is-6">@producto</p>
                  </div>
                </div>

                <div className="content">
                  asd
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowProducts;