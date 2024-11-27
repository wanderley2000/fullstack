import React from "react";

function Home() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "80vh",
        gap: "30px",
        padding: "20px",
        boxSizing: "border-box"
      }}
    >
      {/* Carrusel */}
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        style={{ width: "500px", height: "300px"}}
      >
        {/* Indicadores del carrusel */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Contenido del carrusel */}
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://acortar.link/3ztDIC"
              className="d-block w-100"
              alt="Slide 1"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://acortar.link/WRkbqI"
              className="d-block w-100"
              alt="Slide 2"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://acortar.link/NM9PUZ"
              className="d-block w-100"
              alt="Slide 3"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Controles del carrusel */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Tarjeta */}
      <div className="card" style={{ width: "600px", height: "300px" }}>
        <div className="row g-0 h-100">
          <div className="col-md-6 h-100">
            <img
              src="https://acortar.link/6WifRp"
              className="img-fluid rounded-start h-100"
              alt="Card"
              style={{ objectFit: "cover" }}
            />
          </div>  vb
        </div>
      </div>
    </div>
  );
}

export default Home;