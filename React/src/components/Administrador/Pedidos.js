import React, { useEffect, useState } from 'react'
import MenuAdmin from '../layout/MenuAdmin'
import MaterialTable from 'material-table';
import clienteAxios from '../../config/axios'
import {
    Modal, Button, Form
} from 'react-bootstrap'

const Pedidos = () => {

    const [pedidos, setpedidos] = useState([])
    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [AgregarPedidos, setAgregarPedidos] = useState({
        cantidad: ''
    });
    const [showModalModificar, setShowModalModificar] = useState(false);
    const [ModificarPedidos, setModificarPedidos] = useState({
        id_pedidos: '',
        cantidad: ''
    });
    const onChangeAgregar = (e) => {
        setAgregarPedidos({
            ...AgregarPedidos,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitAgregar = async (e) => {
        const { cantidad } = AgregarPedidos
        if ( cantidad == '') {
            console.log("Pedido Agregado")
        } else {
            const datos = { cantidad }
            await clienteAxios.post(`/administrador/pedidos`, datos)
        }
    }
    const onChangeModificar = (e) => {
        setModificarPedidos({
            ...ModificarPedidos,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitModificar = async (e) => {
        const { id_pedidos, cantidad } = ModificarPedidos
        if (id_pedidos == '' || cantidad == '') {
            console.log("Pedido Modificado")
        } else {
            const datos = { id_pedidos,  cantidad }
            await clienteAxios.put(`/administrador/pedidos/${id_pedidos}`, datos)
        }
    }
    const handleCloseAgregarModal = () => setShowModalAgregar(false);
    const handleShowAgregarModal = () => setShowModalAgregar(true);
    const handleCloseModificarModal = () => setShowModalModificar(false);
    const handleShowModificarModal = () => setShowModalModificar(true);

    const PedidosSeleccionado = (pedidos) => {
        handleShowModificarModal();
        setModificarPedidos(pedidos);
    }
    const formularioAgregar = (
        <Form onSubmit={onSubmitAgregar} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control type="number" name="cantidad" placeholder="Agrege la cantidad del pedido" onChange={onChangeAgregar} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Pedido
            </Button>
        </Form>
    );

    const formularioModificar = (
        <Form onSubmit={onSubmitModificar} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label># pedido</Form.Label>
                <Form.Control type="number" name="id_pedidos" placeholder="Agrege el nuemero del pedido" value={ModificarPedidos && ModificarPedidos.id_pedidos} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control type="number" name="cantidad" placeholder="Agrege la cantidad del producto" value={ModificarPedidos && ModificarPedidos.cantidad} onChange={onChangeModificar} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Modificar Pedido
            </Button>
        </Form>);
    const modalAgregar = (
        <Modal show={showModalAgregar} onHide={handleCloseAgregarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>{formularioAgregar}</Modal.Body>
        </Modal>
    );
    const modalModificar = (
        <Modal show={showModalModificar} onHide={handleCloseModificarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar Pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>{formularioModificar}</Modal.Body>
        </Modal>
    );
    const Actualizar = async () => {
        const response = await clienteAxios.get('/administrador/pedidos')
        setpedidos(response.data.pedidos)
    }
    useEffect(() => {
        Actualizar()
    }, []);
    const columnas = [
        {
            title: '#',
            field: 'id_pedidos'
        },
        {
            title: 'Cantidad',
            field: 'cantidad'
        }
    ]

    return (
        <div>
            <MenuAdmin></MenuAdmin>
            {modalModificar}
            {modalAgregar}
            <MaterialTable
                columns={columnas}
                data={pedidos}
                title="Pedidos"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar Pedidos',
                        onClick: (e, rowData) => {
                            PedidosSeleccionado(rowData);
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar Producto',
                        onClick: async (e, rowData) => {
                            await clienteAxios.delete(`/administrador/pedidos/${rowData.id_pedidos}`)
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
                Agregar Pedido
            </Button>
            <Button variant="warning" onClick={Actualizar}>
                Refrescar
            </Button>
        </div>
    )
}

export default Pedidos
