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
        style={{ width: "500px", height: "300px",}}
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
        className=""
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
                    src="https://www.alkosto.com/medias/711719595700-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDQ0MHxpbWFnZS93ZWJwfGFERmpMMmd4WXk4eE5EYzBORE0wT1RBeE5qQTVOQzgzTVRFM01UazFPVFUzTURCZk1EQXhYemMxTUZkNE56VXdTQXwxYWM0MzhkMDEzOGIxMDljOGQ1YTJjM2Q0NTdjYjg3OWU2ZDRlZjY5ZDVlNjc4YTY1NGIwNjE2OGY5MWZiMGNl"
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
                    src="https://www.alkosto.com/medias/889842640755-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w3OTI4fGltYWdlL3dlYnB8YURVekwyZzVZeTh4TkRVNU1EazROelV6TkRNMk5pODRPRGs0TkRJMk5EQTNOVFZmTURBeFh6YzFNRmQ0TnpVd1NBfGViMjNjYTQ0YTM4YWZjNmIxOGYxNGVmMmU5NWM5ZmIwMzg3MmE0Y2M5NGI1NTAxY2MxZDYxOWYxODEzNDZmMWE"
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
                    src="https://www.alkosto.com/medias/8806095482446-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MjA5NHxpbWFnZS93ZWJwfGFETXlMMmhpTmk4eE5EVXdOemcyTlRnek16VXdNaTg0T0RBMk1EazFORGd5TkRRMlh6QXdNVjgzTlRCWGVEYzFNRWd8ZjJhMDUyNWY0ZTcwYTQ1MmE1NDFiMGMxOThjMjNlMDdmYjQ4MTcwNWM3ZWU5YWJiN2NlNzMzMGY3MWZkOWQxOA"
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
                    src="https://www.alkosto.com/medias/840023261879-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MTI1NnxpbWFnZS93ZWJwfGFEZG1MMmd5TlM4eE5EVXdOakUzTmpNME9ERTVNQzg0TkRBd01qTXlOakU0TnpsZk1EQXhYemMxTUZkNE56VXdTQXwyNGI1ZGFhM2ZjMTI4YjA3MDYyYjM2ZTcwYzA3ZGRiZGI2YTliMDUzMDZlZTBkMzI2NTI0NmVmMWY0ODMwZWZi"
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
                    src="https://www.alkosto.com/medias/194253129172-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDYzNHxpbWFnZS93ZWJwfGFHWXpMMmd6T1M4eE5ETTNOekEzTkRFMk16YzBNaTh4T1RReU5UTXhNamt4TnpKZk1EQXhYemMxTUZkNE56VXdTQXxjZGNkNDllMTYzNDRmYjM3NGEwNjEwMmFmMzAyNmI5NWQ5YTIyODFmNTRmOWI1YTUyZTBkZDljNjM4YzU1MDI4"
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
