import React, { Component, useState,useContext } from "react";
import { Link, useHistory  } from "react-router-dom";
import { AuthContext } from '../../../contexts/Auth';
export default function Register() {

  const {Registro, loadingAuth} = useContext(AuthContext);

  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  let history = useHistory();
  let perfil  = "ADM"
  //API CADASTRO
  const Cadastro = (e) => {
    e.preventDefault();
    if(nome !== '' && login !== '' && email !== '' && senha !== '') {
      Registro(nome, login, email, senha, perfil)
    }  
    setTimeout(() => {history.push("/login")},3100);
  }

  return (
    <div className="formCenter">
    <form className="formFields" onSubmit={Cadastro}>
      <div className="formField">
        <label className="formFieldLabel" htmlFor="name">
          Nome completo
        </label>
        <input
          type="text"
          id="nome"
          className="formFieldInput"
          name="nome"
          value={nome} 
          onChange={ (e) => {setNome(e.target.value)}}
        />
      </div>
      <div className="formField">
        <label className="formFieldLabel" htmlFor="name">
          Login
        </label>
        <input
          type="text"
          id="login"
          className="formFieldInput"
          name="login"
          value={login} 
          onChange={ (e) => {setLogin(e.target.value)}}
        />
      </div>
      <div className="formField">
        <label className="formFieldLabel" htmlFor="password">
         Senha
        </label>
        <input
          type="password"
          id="password"
          className="formFieldInput"
          value={senha}
          onChange={(e) => {setSenha(e.target.value)}}
          name="password"
        
        />
      </div>
      <div className="formField">
        <label className="formFieldLabel" htmlFor="email">
          E-Mail 
        </label>
        <input
          type="email"
          id="email"
          className="formFieldInput"
          name="email"
          value={email}
          onChange={ (e) => {setEmail(e.target.value)}}
        />
      </div>


      <div className="formField">
        <button className="formFieldButton" type="submit">{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>{" "}
        <Link to="/login" className="formFieldLink">
         Já tenho acesso
        </Link>
      </div>
    </form>
  </div>
  );
}