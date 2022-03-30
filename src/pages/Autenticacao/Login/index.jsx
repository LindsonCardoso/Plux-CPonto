import { Link, NavLink } from "react-router-dom";
import React, { Component, useState, useContext } from 'react'
import Axios from 'axios'
import { AuthContext } from '../../../contexts/Auth'

export default function Login() {


  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

    const [login, setLogin]  = useState('')
    const [senha, setSenha] = useState('')

    //API Login
    const { LoginAuth, loadingAuth } = useContext(AuthContext)
  //API CADASTRO
  const LoginAdm = (e) => {
      const perfil = "ADM"
      e.preventDefault();
      if(login !== '' && senha !== '' ) {
        LoginAuth(login, senha, perfil);
      }
    
    }


  return (
        <div className="formCenter">
          <form className="formFields" onSubmit={LoginAdm}>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="email">
                LOGIN
              </label>
              <input
                type="text"
               
                className="formFieldInput"
                name="login"
                value={login}
                onChange={(e) => {setLogin(e.target.value)}}
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
                onChange={(e) => {setSenha(e.target.value)}}
                name="password"
                value={senha}
              />
            </div>

            <div className="formField">
              <button className="formFieldButton"  type="submit">{loadingAuth ? 'Carregando...' : 'Entrar'}</button>{" "}
              <Link to="/" className="formFieldLink">
                Criar conta Admin
              </Link>
            </div>

          </form>
        </div>
  );
}