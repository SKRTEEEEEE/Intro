import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../hooks/AuthContext';
// import { Parallax } from 'react-parallax';
// import wallpaper from '../../src/img/wallpaper1.gif';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  async function login(ev) {
    ev.preventDefault();
    console.log('doing login...');

    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      alert('Inicio de sesion correcto.');
      setUser(true);
      navigate('/');
    } else {
      alert('Error al iniciar. Intente de nuevo');
    }
  }

  return (
    // <Parallax bgImage={wallpaper}>
    <div className="login">
      <Form className="login-form" onSubmit={login}>
        <h1 className="text-center">Log In</h1>
        <p className="login-description">
          Please enter your email and password to continue.
        </p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="placeholder"
            type="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="placeholder"
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="neofuturistic-button"
        >
          Log In
        </Button>
      </Form>
      <div id="register">
        <h1>Havent got any account?</h1>
        <p>Create a account and enter to the 3.0 community</p>
        <Link to="/signin">
          <Button
            variant="primary"
            type="submit"
            className="neofuturistic-button"
          >
            Sign In
          </Button>
        </Link>
      </div>
    </div>
    //</Parallax>
  );
};

export default Login;
