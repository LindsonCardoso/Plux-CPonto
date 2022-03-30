import { Switch, NavLink } from 'react-router-dom'
import Route from './Route'

/*** usuario ***/ 
//import AutenticacaoColaborador from '../pages/Autenticacao'




/**** painel ***/ 
import Painel from '../pages'


//Admin 
import AutenticacaoAdmin from '../pages/Autenticacao'
import RegistrosPonto from '../pages/PainelAdmin/Dashboard/registrodeponto/registroPonto'

import Dashboard from '../pages/PainelAdmin/Dashboard'
import Settings from '../pages/PainelAdmin/Settings'

import Users from '../pages/PainelAdmin/Usuarios'
import UserEdit from '../pages/PainelAdmin/Usuarios/Editar'
import NovoUsuario from '../pages/PainelAdmin/Usuarios/NovoUsuario'

import MarcaPonto from '../pages/PainelAdmin/Ponto/MarcaPonto'
import Pontos from '../pages/PainelAdmin/Ponto/Pontos'
import Espelho from '../pages/PainelAdmin/Ponto/Espelho'


//components
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";


export default function Rotas() {

    return (
        <Switch>
            Painel
             <Route exact path="/Painel" component={Painel} />
             <Route exact path="/admin/login" component={AutenticacaoAdmin} />
            
            <>
                <Topbar />
                <div className="container">
                    <Sidebar />
                    <Route exact path="/dashboard" component={Dashboard} isPrivate/>

                    <Route exact path="/usuarios" component={Users} isPrivate/>
                    <Route exact path="/usuario/:userId" component={UserEdit} isPrivate/>
                    <Route exact path="/novousuario/" component={NovoUsuario} isPrivate/>

                    <Route exact path="/marcaponto" component={MarcaPonto} isPrivate/>
                    <Route exact path="/pontos" component={Pontos} isPrivate/>
                    <Route exact path="/espelho" component={Espelho} isPrivate/>
                    <Route exact path="/configuracao" component={Settings} isPrivate/>

                    <Route exact path="/registrodepontos" component={RegistrosPonto} isPrivate/>

                </div>
            </>
        </Switch>

    )
}  