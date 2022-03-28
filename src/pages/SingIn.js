import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logIn } from '../services/firebase';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await logIn(email, password);
    } catch (err) {
      setError((err).message);
    }
  };

  return (
    <>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <p>Login:</p>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <p>Password:</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <br />
   <a href="/singup">
        <button type="submit">sign Up</button>
    </a>
    </>
  );
};