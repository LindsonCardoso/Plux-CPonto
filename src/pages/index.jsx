import * as React from 'react';
import './painel.css'
import { LineStyle, Timeline, Settings, SupervisedUserCircle } from '@mui/icons-material';
import { Link } from "react-router-dom";


const Painel = () => {

    return (

        <div className="container_flex">

            <div className="box1">
                <h1>Plux</h1>
            </div>

            <div className="flex2">
                <div className="item">
                    <Link to="/" className="link">
                        <a className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Colaborador
                        </a>
                    </Link>
                </div>

                <div className="item">
                    <Link to="/admin/login" className="link">
                        <a className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Administrador
                        </a>
                    </Link>
                </div>
            </div>
        </div>


    )



}

export default Painel;