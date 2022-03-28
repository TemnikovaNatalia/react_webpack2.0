import React, { useState } from 'react';
import { signUp } from '../services/firebase';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signUp(email, password);
    } catch (err) {
      setError((err).message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup page</h1>
      <p>Email:</p>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <p>Password:</p>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button type="submit">register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};