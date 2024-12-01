import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './componentes/Head';
import Home from './componentes/Home';
import Producto from './componentes/Producto';
import Login from './componentes/login.js';
import UserRegister from './componentes/UserRegister';
import ShowProducts from './componentes/ShowProducts';
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
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;