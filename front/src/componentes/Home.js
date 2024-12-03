import React from "react";

function Home() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "80vh",
        gap: "30px",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        style={{ width: "500px", height: "300px" }}
      >
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

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div
        className="card"
        style={{ width: "600px", border: "none", overflow: "hidden" }}
      >
        <div className="row g-0" style={{ height: "auto" }}>
          {/* Carrusel 1 */}
          <div className="col-md-6">
            <div
              id="carouselExample1"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://acortar.link/DDoX9C"
                    className="d-block w-100"
                    alt="Imagen 1"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://acortar.link/SNkZWJ"
                    className="d-block w-100"
                    alt="Imagen 2"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://acortar.link/DfCewN"
                    className="d-block w-100"
                    alt="Imagen 3"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample1"
                data-bs-slide="prev"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample1"
                data-bs-slide="next"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Carrusel 2 */}
          <div className="col-md-6">
            <div
              id="carouselExample2"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://acortar.link/EWOedE"
                    className="d-block w-100"
                    alt="Imagen 4"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://acortar.link/Pqltw5"
                    className="d-block w-100"
                    alt="Imagen 5"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://acortar.link/NEwgPk"
                    className="d-block w-100"
                    alt="Imagen 6"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample2"
                data-bs-slide="prev"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample2"
                data-bs-slide="next"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
