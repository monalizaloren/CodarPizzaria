import React, { useState } from 'react';
import './Cadastro.css';

function Cadastro() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}, Email: ${email}`);
  }

  return (
    <div className="cadastro-container">
      <form onSubmit={handleSubmit} className="cadastro-form">
        <h2>Cadastro</h2>
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
