import React, { useEffect, useState } from 'react'
import MenuAdmin from '../layout/MenuAdmin'
import MaterialTable from 'material-table';
import clienteAxios from '../../config/axios'
import {
    Modal, Button, Form
} from 'react-bootstrap'

const Terminos = () => {
    const [terminos, setTerminos] = useState([])
    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [AgregarTerminos, setAgregarTerminos] = useState({
        descripcion: ''
    });
    const [showModalModificar, setShowModalModificar] = useState(false);
    const [ModificarTerminos, setModificarTerminos] = useState({
        id_terminos: '',
        descripcion: ''
    })
    const onChangeAgregar = (e) => {
        setAgregarTerminos({
            ...AgregarTerminos,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitAgregar = async (e) => {
        const { descripcion } = AgregarTerminos
        if (descripcion == '') {
            console.log("Terminos Agregado")
        } else {
            const datos = { descripcion }
            await clienteAxios.post(`/administrador/terminos`, datos)
        }

    }
    const onChangeModificar = (e) => {
        setModificarTerminos({
            ...ModificarTerminos,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitModificar = async (e) => {
        const { id_terminos, descripcion } = ModificarTerminos
        if (descripcion == '') {
            console.log("Terminos Modificado")
        } else {
            const datos = { descripcion }
            await clienteAxios.put(`/administrador/terminos/${id_terminos}`, datos)
        }

    }
    const handleCloseAgregarModal = () => setShowModalAgregar(false);
    const handleShowAgregarModal = () => setShowModalAgregar(true);
    const handleCloseModificarModal = () => setShowModalModificar(false);
    const handleShowModificarModal = () => setShowModalModificar(true);

    const TerminoSelecionado = (termino) => {
        handleShowModificarModal();
        setModificarTerminos(termino);

    }
    const formularioAgregar = (
        <Form onSubmit={onSubmitAgregar} >

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" name="descripcion" placeholder="Agrege la descripcion" onChange={onChangeAgregar} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Terminos
            </Button>
        </Form>);

    const formularioModificar = (
        <Form onSubmit={onSubmitModificar} >

            <Form.Group controlId="formBasicEmail">
                <Form.Label>#</Form.Label>
                <Form.Control type="number" name="id_terminos" placeholder="#" value={ModificarTerminos && ModificarTerminos.id_terminos} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" name="descripcion" placeholder="Descripcion de los terminos" value={ModificarTerminos && ModificarTerminos.descripcion} onChange={onChangeModificar} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Modificar Terminos
            </Button>
        </Form>
        );
        const modalAgregar = (
            <Modal show={showModalAgregar} onHide={handleCloseAgregarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Termino</Modal.Title>
                </Modal.Header>
                <Modal.Body>{formularioAgregar}</Modal.Body>
    
            </Modal>
    
        );
    
        const modalModificar = (
            <Modal show={showModalModificar} onHide={handleCloseModificarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Termino</Modal.Title>
                </Modal.Header>
                <Modal.Body>{formularioModificar}</Modal.Body>
            </Modal>);

    const Actualizar = async () => {
        const response = await clienteAxios.get('/administrador/terminos')
        setTerminos(response.data.terminos)
    }
    useEffect(() => {
        Actualizar()
    }, [])
    
    const columnas = [
        {
            title: '#',
            field: 'id_terminos'
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
                data={terminos}
                title="Terminos"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar Termino',
                        onClick: (e, rowData) => {
                            TerminoSelecionado(rowData);
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar termino',
                        onClick: async (e, rowData) => {
                            await clienteAxios.delete(`/administrador/terminos/${rowData.id_terminos}`)
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
                Agregar Termino
            </Button>
            <Button variant="warning" onClick={Actualizar}>
                Refrescar
            </Button>


        </div>
    )
}

export default Terminos
