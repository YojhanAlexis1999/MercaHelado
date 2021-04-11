import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components/pages/Index';
import Login from './components/pages/Login';
import Registro from './components/pages/Registro';
import Administrador from './components/pages/Administrador';
import Usuario from './components/pages/Usuario';
import Empleado from './components/pages/Empleado';
import AutenticacionState from './context/autenticacion/autenticacionState';
import Comentario from './components/Administrador/Comentarios'
import Descuento from './components/Administrador/Descuentos'
import Inventario from './components/Administrador/Inventario'
import Pedidos from './components/Administrador/Pedidos'
import Productos from './components/Administrador/Productos'
import Roles from './components/Administrador/Roles'
import Terminos from './components/Administrador/Terminos'
import UsuariosListar from './components/Administrador/UsuarioListar'
import AdministradorState from './context/Administrador/administradorState';



const App = () => {
  return (
    <AdministradorState>
      <AutenticacionState>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/registro" component={Registro} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Administrador" component={Administrador} />
            <Route exact path="/Usuario" component={Usuario} />
            <Route exact path="/Empleado" component={Empleado} />

            <Route exact path="/Comentario" component={Comentario} />
            <Route exact path="/Descuento" component={Descuento} />
            <Route exact path="/Inventario" component={Inventario} />
            <Route exact path="/Pedidos" component={Pedidos} />
            <Route exact path="/Productos" component={Productos} />
            <Route exact path="/Roles" component={Roles} />
            <Route exact path="/Terminos" component={Terminos} />
            <Route exact path="/UsuarioListar" component={UsuariosListar} />

          </Switch>
        </Router>
      </AutenticacionState>
    </AdministradorState>
  )
}

export default App;
