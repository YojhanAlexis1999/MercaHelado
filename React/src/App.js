import React from 'react';
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import Index from './components/pages/Index';
import Login from './components/pages/Login';
import Registro from './components/pages/Registro';
import Administrador from './components/pages/Administrador';
import Usuario from './components/pages/Usuario';
import Empleado from './components/pages/Empleado';
import AutenticacionState from './context/autenticacion/autenticacionState';


const App = () => {
  return(
    <AutenticacionState>
    <Router>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/registro" component={Registro}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Administrador" component={Administrador}/>
        <Route exact path="/Usuario" component={Usuario}/>
        <Route exact path="/Empleado" component={Empleado}/>
      </Switch>
    </Router>
    </AutenticacionState>
  )
}

export default App;
