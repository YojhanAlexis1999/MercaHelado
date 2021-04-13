import React, { useEffect, useState } from 'react'
import MenuAdmin from '../layout/MenuAdmin'
import MaterialTable from 'material-table';
import clienteAxios from '../../config/axios'
import {
    Modal, Button, Form
} from 'react-bootstrap'


const Comentarios = () => {
    const [comentario, setComentario] = useState([])
    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [AgregarComentario, setAgregarComentario] = useState({
        descripcion: ''
    });
    const [showModalModificar, setShowModalModificar] = useState(false);
    const [ModificarComentario, setModificarComentario] = useState({
        id_comentario: '',
        descripcion: ''
    })
    const onChangeAgregar = (e) => {
        setAgregarComentario({
            ...AgregarComentario,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitAgregar = async (e) => {
        const { descripcion } = AgregarComentario
        if (descripcion == '') {
            console.log("Comentario Agregado")
        } else {
            const datos = { descripcion }
            await clienteAxios.post(`/administrador/comentario`, datos)
        }

    }
    const onChangeModificar = (e) => {
        setModificarComentario({
            ...ModificarComentario,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitModificar = async (e) => {
        const { id_comentario, descripcion } = ModificarComentario
        if (id_comentario==''||descripcion == '') {
            console.log("Comentario Modificado")
        } else {
            const datos = {id_comentario, descripcion }
            await clienteAxios.put(`/administrador/comentario/${id_comentario}`, datos)
        }

    }
    const handleCloseAgregarModal = () => setShowModalAgregar(false);
    const handleShowAgregarModal = () => setShowModalAgregar(true);
    const handleCloseModificarModal = () => setShowModalModificar(false);
    const handleShowModificarModal = () => setShowModalModificar(true);
    const ComentarioSelecionado = (comenta) => {
        handleShowModificarModal();
        setModificarComentario(comenta);

    }
    const formularioAgregar = (
        <Form onSubmit={onSubmitAgregar} >

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" name="descripcion" placeholder="Agrege la descripcion" onChange={onChangeAgregar} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Comentario
            </Button>
        </Form>);

    const formularioModificar = (
        <Form onSubmit={onSubmitModificar} >

            <Form.Group controlId="formBasicEmail">
                <Form.Label>#</Form.Label>
                <Form.Control type="number" name="id_comentario" placeholder="#" value={ModificarComentario && ModificarComentario.id_comentario} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" name="descripcion" placeholder="Descripcion de los terminos" value={ModificarComentario && ModificarComentario.descripcion} onChange={onChangeModificar} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Modificar Comentario
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
                <Modal.Title>Modificar Comentario</Modal.Title>
            </Modal.Header>
            <Modal.Body>{formularioModificar}</Modal.Body>
        </Modal>);

    const Actualizar = async () => {
        const response = await clienteAxios.get('/administrador/comentario')
        setComentario(response.data.comentarios)
    }
    useEffect(() => {
        Actualizar()
    }, [])
    const columnas = [
        {
            title: '#',
            field: 'id_comentario'
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
                data={comentario}
                title="Comentario"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar Comentario',
                        onClick: (e, rowData) => {
                            ComentarioSelecionado(rowData);
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar termino',
                        onClick: async (e, rowData) => {
                            await clienteAxios.delete(`/administrador/comentario/${rowData.id_comentario}`)
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
                Agregar Comentario
            </Button>
            <Button variant="warning" onClick={Actualizar}>
                Refrescar
            </Button>

        </div>
    )
}

export default Comentarios
