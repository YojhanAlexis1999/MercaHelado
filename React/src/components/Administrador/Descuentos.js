import React, { useEffect, useState } from 'react'
import MenuAdmin from '../layout/MenuAdmin'
import MaterialTable from 'material-table';
import clienteAxios from '../../config/axios'
import {
    Modal, Button, Form
} from 'react-bootstrap'

const Descuentos = () => {

    const [descuento, setdescuento] = useState([])
    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [AgregarDescuento, setAgregarDescuento] = useState({
        id_producto: '',
        descuento: ''
    });
    const [showModalModificar, setShowModalModificar] = useState(false);
    const [ModificarDescuento, setModificarDescuento] = useState({
        id_descuento: '',
        id_producto: '',
        descuento: ''
    });
    const onChangeAgregar = (e) => {
        setAgregarDescuento({
            ...AgregarDescuento,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitAgregar = async (e) => {
        const {  descuento,id_producto } = AgregarDescuento
        if (  descuento == ''||id_producto == '' ) {
            console.log("Descuento Agregado")
        } else {
            const datos = {   descuento,id_producto }
            await clienteAxios.post(`/administrador/descuento`, datos)
        }
    }
    const onChangeModificar = (e) => {
        setModificarDescuento({
            ...ModificarDescuento,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitModificar = async (e) => {
        const { id_descuento, id_producto, descuento } = ModificarDescuento
        if (id_descuento == '' || id_producto == '' || descuento == '') {
            console.log("Descuento Modificado")
        } else {
            const datos = { id_descuento, id_producto, descuento }
            await clienteAxios.put(`/administrador/descuento/${id_descuento}`, datos)
        }
    }
    const handleCloseAgregarModal = () => setShowModalAgregar(false);
    const handleShowAgregarModal = () => setShowModalAgregar(true);
    const handleCloseModificarModal = () => setShowModalModificar(false);
    const handleShowModificarModal = () => setShowModalModificar(true);

    const DescuentoSeleccionado = (descuento) => {
        handleShowModificarModal();
        setModificarDescuento(descuento);
    }
    const formularioAgregar = (
        <Form onSubmit={onSubmitAgregar} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label># descuento</Form.Label>
                <Form.Control type="number" name="descuento" placeholder="numero del descuento" onChange={onChangeAgregar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>id_producto</Form.Label>
                <Form.Control type="number" name="id_producto" placeholder="numero del producto" onChange={onChangeAgregar} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Descuento
            </Button>
        </Form>
    );
    const formularioModificar = (
        <Form onSubmit={onSubmitModificar} >

            <Form.Group controlId="formBasicEmail">
                <Form.Label># Descuentos</Form.Label>
                <Form.Control type="number" name="id_descuento" placeholder="Modifique el nuemero de descuento" value={ModificarDescuento && ModificarDescuento.id_descuento} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Descuentos</Form.Label>
                <Form.Control type="number" name="descuento" placeholder="Modifique el descuento" value={ModificarDescuento && ModificarDescuento.descuento} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label># producto</Form.Label>
                <Form.Control type="number" name="id_producto" placeholder="Modifique el nuemero de producto" value={ModificarDescuento && ModificarDescuento.id_producto} onChange={onChangeModificar} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Modificar Descuento
            </Button>
        </Form>);

    const modalAgregar = (
        <Modal show={showModalAgregar} onHide={handleCloseAgregarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Descuento</Modal.Title>
            </Modal.Header>
            <Modal.Body>{formularioAgregar}</Modal.Body>
        </Modal>
    );
    const modalModificar = (
        <Modal show={showModalModificar} onHide={handleCloseModificarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar Descuento</Modal.Title>
            </Modal.Header>
            <Modal.Body>{formularioModificar}</Modal.Body>
        </Modal>
    );
    const Actualizar = async () => {
        const response = await clienteAxios.get('/administrador/descuento')
        setdescuento(response.data.descuento)
    }
    useEffect(() => {
        Actualizar()
    }, []);
    const columnas = [
        {
            title: '#',
            field: 'id_descuento'
        },
        {
            title: 'Descuento',
            field: 'descuento'
        },
        {
            title: '# producto',
            field: 'id_producto'
        }
    ]
    return (
        <div>
            <MenuAdmin></MenuAdmin>
            {modalModificar}
            {modalAgregar}
            <MaterialTable
                columns={columnas}
                data={descuento}
                title="Descuento Productos"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar descuento',
                        onClick: (e, rowData) => {
                            DescuentoSeleccionado(rowData);
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar Descuento',
                        onClick: async (e, rowData) => {
                            await clienteAxios.delete(`/administrador/descuento/${rowData.id_descuento}`)
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
                Agregar Descuento
            </Button>
            <Button variant="warning" onClick={Actualizar}>
                Refrescar
            </Button>
        </div>
    )
}

export default Descuentos
