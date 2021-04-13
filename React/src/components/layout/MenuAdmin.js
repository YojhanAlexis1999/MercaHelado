import React, { useContext} from 'react'
import { 
    Navbar, 
    Nav,
    Button
} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import AutenticacionContext from '../../context/autenticacion/autenticacionContext';

    

const MenuAdmin = () => {

    const history = useHistory();
    const autenticacionContext = useContext(AutenticacionContext)
    const { CerrarSesion } = autenticacionContext
    const Salir = () =>{
        CerrarSesion()
        history.push("/")
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Administrador</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Terminos">Terminos y condiciones</Nav.Link>
                        <Nav.Link href="/Comentario">Comentarios</Nav.Link>
                        <Nav.Link href="/Productos">Productos</Nav.Link>
                        <Nav.Link href="/Roles">Roles</Nav.Link>
                        <Nav.Link href="/Pedidos">Pedidos</Nav.Link>
                        <Nav.Link href="/Descuento">Descuentos</Nav.Link>
                        <Nav.Link href="/Inventario">Inventario</Nav.Link>
                        <Nav.Link href="/UsuarioListar">Usuarios</Nav.Link>
                        <Button variant="link" onClick={Salir} >Cerrar Seccion</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MenuAdmin
