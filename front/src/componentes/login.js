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
        
        <form className="box" onSubmit={handleSubmit}>
      <div className="field">
  <article className="message is-success"> {}
    <div className="message-body ">
      {isLogin ? 'Bienvenido, por favor inicia sesión' : 'Registrarse'}
    </div>
  </article>
  <label className="label">Correo Electrónico</label>
  <div className="control">
    {/* Tu contenido aquí */}
              <input
                className="input"
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
      
          <div className="field">
            <label className="label">Contraseña</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
      
          <div className="field">
            <div className="control">
              <button className="button is-primary" type="submit">
                {isLogin ? 'Iniciar sesión' : 'Registrar'}
              </button>
            </div>
          </div>
        </form>
        <p className="help">{message}</p>
        <button
          
          className="button is-text title is-5 has-text-black"
          hover="has-text-white"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
        </button>
      </div>
      
    );
};

export default Login;