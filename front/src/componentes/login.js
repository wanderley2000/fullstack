import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isLogin ? 'http://localhost:3001/api/login' : 'http://localhost:3001/api/register';

        try {
            const response = await axios.post(url, { email, password });
            setMessage(response.data.message);
            if (isLogin) {
                navigate('/producto');
            }
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'Error de conexión');
        }
    };

    return (
        <div className="login-container">
            <h1>{isLogin ? 'Bienvenido, por favor inicia sesión' : 'Registrarse'}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isLogin ? 'Iniciar sesión' : 'Registrar'}</button>
            </form>
            <p>{message}</p>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
            </button>
        </div>
    );
};

export default Login;