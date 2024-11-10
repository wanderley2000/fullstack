import React, { useState } from 'react';
import Login from './componentes/login';
import Producto from './componentes/Producto';
import './App.css';

function App() {
    const [isLogin, setIsLogin] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userProfile, setUserProfile] = useState(0);

    const handleLoginSuccess = (profile) => {
        setIsAuthenticated(true);
        setUserProfile(profile);
    };

    return (
        <div className="container">
            {isAuthenticated ? (
                <Producto userProfile={userProfile} />
            ) : (
                <Login onLoginSuccess={handleLoginSuccess} isLogin={isLogin} setIsLogin={setIsLogin} />
            )}
        </div>
    );
}

export default App;