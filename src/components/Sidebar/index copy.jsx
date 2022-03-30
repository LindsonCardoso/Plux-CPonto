import React, { useContext, useState,} from 'react';
import './sidebar.css'
import { LineStyle, Timeline, Settings, SupervisedUserCircle } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth"


export default function Sidebar() {

  const { signOut } = useContext(AuthContext)

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
               Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Registro de pontos
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Ponto</h3>
          <ul className="sidebarList">
            <Link to="/marcaponto" className="link">
              <li className="sidebarListItem ">
                <SupervisedUserCircle className="sidebarIcon" />
                Marca ponto
              </li>
            </Link>
            <Link to="/pontos" className="link">
              <li className="sidebarListItem ">
                <SupervisedUserCircle className="sidebarIcon" />
                Pontos
              </li>
            </Link>
            <Link to="/espelho" className="link">
              <li className="sidebarListItem ">
                <SupervisedUserCircle className="sidebarIcon" />
                Espelho
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Cadastros</h3>
          <ul className="sidebarList">
            <Link to="/usuarios" className="link">
              <li className="sidebarListItem ">
                <SupervisedUserCircle className="sidebarIcon" />
                Usuários
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem ">
                <SupervisedUserCircle className="sidebarIcon" />
                Função
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem ">
                <SupervisedUserCircle className="sidebarIcon" />
                Horarios
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Configurações</h3>
          <ul className="sidebarList">
            <Link to="/configuracao" className="link">
              <li className="sidebarListItem">
                <Settings className="sidebarIcon" />
                Configuração
              </li>
            </Link>
          </ul>

        
            <button
              onClick={() => signOut()}
            >Sair</button>
          </div>
      </div>
    </div>
  )
}