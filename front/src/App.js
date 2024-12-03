import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './componentes/Head';
import Home from './componentes/Home';
import Producto from './componentes/Producto';
import Login from './componentes/login.js';
import UserRegister from './componentes/UserRegister';
import ShowProducts from './componentes/ShowProducts';
import ViewProduct from './componentes/ViewProduct.js';
import Carrito from './componentes/Carrito.js';
import Pay from './componentes/Pay.js';
import Footer from './componentes/Footer';
import './App.css';

function App() {
    return (
        <Router>
            <Head />
            <div className="container ">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/producto" element={<Producto />} />
                    <Route path="/registrarUsuario" element={<UserRegister />} />
                    <Route path="/productosTienda" element={<ShowProducts />} />
                    <Route path="/ver-detalle/:id" element={<ViewProduct />} />
                    <Route path="/en-carrito" element={<Carrito />} />
                    <Route path="/pagar" element={<Pay />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;