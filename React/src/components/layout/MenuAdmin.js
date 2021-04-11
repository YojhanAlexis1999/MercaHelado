import React from 'react'
import { 
    Navbar, 
    Nav
} from 'react-bootstrap'
    

const MenuAdmin = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
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
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MenuAdmin
