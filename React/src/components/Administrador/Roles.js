import React, { useEffect, useState } from 'react'
import MenuAdmin from '../layout/MenuAdmin'
import MaterialTable from 'material-table';
import clienteAxios from '../../config/axios'
import {
    Modal, Button, Form
} from 'react-bootstrap'

const Roles = () => {
    const [roles, setRoles] = useState([])
    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [AgregarRoles, setAgregarRoles] = useState({
        descripcion: ''
    });
    const [showModalModificar, setShowModalModificar] = useState(false);
    const [ModificarRoles, setModificarRoles] = useState({
        id_rol: '',
        descripcion: ''
    });
    const onChangeAgregar = (e) => {
        setAgregarRoles({
            ...AgregarRoles,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitAgregar = async (e) => {
        const { descripcion } = AgregarRoles
        if (descripcion == '') {
            console.log("Roles Agregados")
        } else {
            const datos = { descripcion }
            await clienteAxios.post(`/administrador/rol`, datos)
        }
    }
    const onChangeModificar = (e) => {
        setModificarRoles({
            ...ModificarRoles,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitModificar = async (e) => {
        const { id_rol, descripcion } = ModificarRoles
        if (descripcion == '') {
            console.log("Rol Modificado")
        } else {
            const datos = { descripcion }
            await clienteAxios.put(`/administrador/rol/${id_rol}`, datos)
        }
    }
    const handleCloseAgregarModal = () => setShowModalAgregar(false);
    const handleShowAgregarModal = () => setShowModalAgregar(true);
    const handleCloseModificarModal = () => setShowModalModificar(false);
    const handleShowModificarModal = () => setShowModalModificar(true);

    const RolSeleccionado = (rol) => {
        handleShowModificarModal();
        setModificarRoles(rol);
    }
    const formularioAgregar = (
        <Form onSubmit={onSubmitAgregar} >

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" name="descripcion" placeholder="Agrege la descripcion" onChange={onChangeAgregar} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Rol
            </Button>
        </Form>);

    const formularioModificar = (
        <Form onSubmit={onSubmitModificar} >

            <Form.Group controlId="formBasicEmail">
                <Form.Label>#</Form.Label>
                <Form.Control type="number" name="id_terminos" placeholder="#" value={ModificarRoles && ModificarRoles.id_rol} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" name="descripcion" placeholder="Descripcion de los terminos" value={ModificarRoles && ModificarRoles.descripcion} onChange={onChangeModificar} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Modificar Rol
        </Button>
        </Form>
    );

    const modalAgregar = (
        <Modal show={showModalAgregar} onHide={handleCloseAgregarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Rol</Modal.Title>
            </Modal.Header>
            <Modal.Body>{formularioAgregar}</Modal.Body>
        </Modal>
    );
    const modalModificar = (
        <Modal show={showModalModificar} onHide={handleCloseModificarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar Rol</Modal.Title>
            </Modal.Header>
            <Modal.Body>{formularioModificar}</Modal.Body>
        </Modal>
    );
    const Actualizar = async () => {
        const response = await clienteAxios.get('/administrador/rol')
        setRoles(response.data.rol)
    }
    useEffect(() => {
        Actualizar()
    }, []);
    const columnas = [
        {
            title: '#',
            field: 'id_rol'
        },
        {
            title: 'Descripcion',
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
                data={roles}
                title="Roles"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar Rol',
                        onClick: (e, rowData) => {
                            RolSeleccionado(rowData);
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar Rol',
                        onClick: async (e, rowData) => {
                            await clienteAxios.delete(`/administrador/rol/${rowData.id_rol}`)
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
                Agregar Rol
            </Button>
            <Button variant="warning" onClick={Actualizar}>
                Refrescar
            </Button>

        </div>
    );
    

}

export default Roles
