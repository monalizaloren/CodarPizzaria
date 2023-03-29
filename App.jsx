import React, { useState } from 'react';
import './App.css';


function Login() {
  const [cadastroClicado, setCadastroClicado] = useState(false);

  const handleCadastroClick = () => {
    setCadastroClicado(true);
  };

  if (cadastroClicado) {
    return <Cadastro />;
  }

  return (
    <div className="login-container">
      <img className="login-image" src="https://th.bing.com/th/id/OIP.Jyw0-OLOMx_daTScv09fewHaE7?pid=ImgDet&rs=1" alt="Imagem de fundo" />
      <div className="login-form-container">
        <h1> Pizzaria Codar </h1>
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Entrar</button>
        </form>
        <br></br>
        <button onClick={handleCadastroClick}>Cadastrar</button>
      </div>
    </div>
  );
}

function Cadastro() {
  return (
    <div>
      <h1>Bem-vindo à tela de cadastro!</h1>
    </div>
  );
}

export default Login;
