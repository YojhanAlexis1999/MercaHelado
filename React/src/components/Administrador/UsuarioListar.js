import React, { useEffect, useState } from 'react'
import MenuAdmin from '../layout/MenuAdmin'
import MaterialTable from 'material-table';
import clienteAxios from '../../config/axios'
import {
    Modal, Button, Form
} from 'react-bootstrap'

const UsuarioListar = () => {


    const [usuarios, setUsuarios] = useState([])
    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [AgregarUsuario, setAgregarUsuario] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        contra: '',
        id_rol: 1

    })
    const [showModalModificar, setShowModalModificar] = useState(false);
    const [ModificarUsuario, setModificarUsuario] = useState({
        id_usuario: '',
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        contra: '',
        id_rol: 1

    })


    const onChangeAgregar = (e) => {
        setAgregarUsuario({
            ...AgregarUsuario,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitAgregar = async (e) => {
        const { nombre, apellido, correo, telefono, contra, id_rol } = AgregarUsuario
        if (nombre == '' || apellido == '' || correo == '' || telefono == '' || contra == '' || id_rol == '') {
            console.log("Usuario Agregado")
        } else {
            const datos = { nombre, apellido, correo, telefono, contra, id_rol }
            await clienteAxios.post(`/usuarios`, datos)
        }

    }
    const onChangeModificar = (e) => {
        setModificarUsuario({
            ...ModificarUsuario,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitModificar = async (e) => {
        const { id_usuario, nombre, apellido, correo, telefono, contra, id_rol } = ModificarUsuario
        if (nombre == '' || apellido == '' || correo == '' || telefono == '' || contra == '' || id_rol == '') {
            console.log("Usuario Modificado")
        } else {
            const datos = { nombre, apellido, correo, telefono, contra, id_rol }
            await clienteAxios.put(`/usuarios/${id_usuario}`, datos)
        }

    }
    const handleCloseAgregarModal = () => setShowModalAgregar(false);
    const handleShowAgregarModal = () => setShowModalAgregar(true);
    const handleCloseModificarModal = () => setShowModalModificar(false);
    const handleShowModificarModal = () => setShowModalModificar(true);

    const UsuarioSelecionado = (usuario) => {
        handleShowModificarModal();
        setModificarUsuario(usuario);

    }
    const formularioAgregar = (
        <Form onSubmit={onSubmitAgregar} >

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="nombre" placeholder="Nombre del usuario" onChange={onChangeAgregar} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" name="apellido" placeholder="Apellido del usuario" onChange={onChangeAgregar} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" name="correo" placeholder="Correo del usuario" onChange={onChangeAgregar} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" name="telefono" placeholder="Telefono del usuario" onChange={onChangeAgregar} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="contra" placeholder="Contraseña del usuario" onChange={onChangeAgregar} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Roles</Form.Label>
                <Form.Control as="select" name="id_rol" onChange={onChangeAgregar}>
                    <option >Roles</option>
                    <option value="1">Administrador</option>
                    <option value="2">Usuario</option>
                    <option value="3">Empleado</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Usuario
            </Button>
        </Form>
    )
    const formularioModificar = (
        <Form onSubmit={onSubmitModificar} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>id_usuario</Form.Label>
                <Form.Control type="text" name="number" disabled placeholder="id del usuario" value={ModificarUsuario && ModificarUsuario.id_usuario} onChange={onChangeModificar} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="nombre" placeholder="Nombre del usuario" value={ModificarUsuario && ModificarUsuario.nombre} onChange={onChangeModificar} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" name="apellido" placeholder="Apellido del usuario" value={ModificarUsuario && ModificarUsuario.apellido} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" name="correo" placeholder="Correo del usuario" value={ModificarUsuario && ModificarUsuario.corre} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" name="telefono" placeholder="Telefono del usuario" value={ModificarUsuario && ModificarUsuario.telefono} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="contra" placeholder="Contraseña del usuario" value={ModificarUsuario && ModificarUsuario.contra} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Roles</Form.Label>
                <Form.Control as="select" name="id_rol" value={ModificarUsuario && ModificarUsuario.id_rol} onChange={onChangeModificar}>
                    <option >Roles</option>
                    <option value="1">Administrador</option>
                    <option value="2">Usuario</option>
                    <option value="3">Empleado</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Modificar Usuario
            </Button>
        </Form>
    )
    const modalAgregar = (
        <Modal show={showModalAgregar} onHide={handleCloseAgregarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>{formularioAgregar}</Modal.Body>

        </Modal>

    );

    const modalModificar = (
        <Modal show={showModalModificar} onHide={handleCloseModificarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>{formularioModificar}</Modal.Body>
        </Modal>);


    const Actualizar = async () => {
        const response = await clienteAxios.get('/usuarios')
        setUsuarios(response.data.usuarios)
    }

    useEffect(() => {
        Actualizar()
    }, [])

    const columnas = [
        {
            title: '#',
            field: 'id_usuario'
        },
        {
            title: 'Nombre',
            field: 'nombre'
        },
        {
            title: 'Apellido',
            field: 'apellido'
        },
        {
            title: 'Correo',
            field: 'correo'
        },
        {
            title: 'Telefono',
            field: 'telefono'
        },
        {
            title: 'Contraseña',
            field: 'contra'
        },
        {
            title: 'Rol',
            field: 'descripcion'
        }
    ]


    return (
        <div>
            <MenuAdmin></MenuAdmin>
            {modalModificar}
            {modalAgregar}
            <MaterialTable
                columns={columnas}
                data={usuarios}
                title="Usuarios"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar usuario',
                        onClick: (e, rowData) => {
                            UsuarioSelecionado(rowData);
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar usuario',
                        onClick: async (e, rowData) => {
                            await clienteAxios.delete(`/usuarios/${rowData.id_usuario}`)
                        }
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header: {
                        actions: 'Acciones'
                    }
                }}
            />
            <Button variant="primary" onClick={handleShowAgregarModal}>
                Agregar Usuario
            </Button>
            <Button variant="warning" onClick={Actualizar}>
                Refrescar
            </Button>

        </div>
    )
}
//{JSON.stringify(ModificarUsuario)}
export default UsuarioListar
