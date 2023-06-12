import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function register(ev) {
    ev.preventDefault();
    console.log('doing register..');

    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        console.log('Registro exitoso');
        alert('Se ha registrado correctamente');
        navigate('/');
      } else {
        console.log('Error en el registro');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
      <div id="register">
        <h1>Have you account?</h1>
        <p>Enter to your 3.0 community account</p>
        <Link to="/login">
          <Button
            variant="primary"
            type="submit"
            className="neofuturistic-button"
          >
            Log In
          </Button>
        </Link>
      </div>

      <Form className="signin-form" onSubmit={register}>
        <h1 className="text-center">Create Account</h1>
        <p className="login-description">Discover next gen to build your own</p>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            className="placeholder"
            type="text"
            name="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="placeholder"
            type="email"
            name="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="placeholder"
            type="password"
            name="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control className="placeholder" type="password" />
        </Form.Group> */}

        <Button
          variant="primary"
          type="submit"
          className="neofuturistic-button"
        >
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default Signin;
