import React, { useEffect, useState } from 'react'
import MenuAdmin from '../layout/MenuAdmin'
import MaterialTable from 'material-table';
import clienteAxios from '../../config/axios'
import {
    Modal, Button, Form
} from 'react-bootstrap'

const Productos = () => {
    const [productos, setproductos] = useState([])
    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [AgregarProductos, setAgregarProductos] = useState({
        nombre: '',
        marca: '',
        precio:'',
        cantidad:'',
        id_pedido:''
    });
    const [showModalModificar, setShowModalModificar] = useState(false);
    const [ModificarProductos, setModificarProductos] = useState({
        id_producto: '',
        nombre: '',
        marca: '',
        precio:'',
        cantidad:'',
        id_pedido:''
    });
    const onChangeAgregar = (e) => {
        setAgregarProductos({
            ...AgregarProductos,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitAgregar = async (e) => {
        const { nombre,marca,precio,cantidad,id_pedido } = AgregarProductos
        if (nombre == ''|| marca == '' || precio == ''|| cantidad == ''|| id_pedido == '') {
            console.log("Producto Agregado")
        } else {
            const datos = { nombre,marca,precio,cantidad,id_pedido }
            await clienteAxios.post(`/administrador/productos`, datos)
        }
    }
    const onChangeModificar = (e) => {
        setModificarProductos({
            ...ModificarProductos,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitModificar = async (e) => {
        const { id_producto,nombre,marca,precio,cantidad,id_pedido } = ModificarProductos
        if (nombre == ''|| marca == '' || precio == ''|| cantidad == ''|| id_pedido == '') {
            console.log("Producto Modificado")
        } else {
            const datos = { nombre,marca,precio,cantidad,id_pedido }
            await clienteAxios.put(`/administrador/productos/${id_producto}`, datos)
        }
    }
    const handleCloseAgregarModal = () => setShowModalAgregar(false);
    const handleShowAgregarModal = () => setShowModalAgregar(true);
    const handleCloseModificarModal = () => setShowModalModificar(false);
    const handleShowModificarModal = () => setShowModalModificar(true);

    const ProductoSeleccionado = (productos) => {
        handleShowModificarModal();
        setModificarProductos(productos); 
    }
    const formularioAgregar = (
        <Form onSubmit={onSubmitAgregar} >

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="nombre" placeholder="Agrege el nombre del producto" onChange={onChangeAgregar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Marca</Form.Label>
                <Form.Control type="text" name="marca" placeholder="Agrege la marca del producto" onChange={onChangeAgregar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" name="precio" placeholder="Agrege el precio del producto" onChange={onChangeAgregar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control type="number" name="cantidad" placeholder="Agrege la cantidad del producto" onChange={onChangeAgregar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label># pedido</Form.Label>
                <Form.Control type="number" name="id_pedido" placeholder="Agrege el nuemero del pedido" onChange={onChangeAgregar} />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Agregar Producto
            </Button>
        </Form>);
        
    const formularioModificar = (
        <Form onSubmit={onSubmitModificar} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>#</Form.Label>
                <Form.Control type="number" name="id_producto" placeholder="# producto" value={ModificarProductos && ModificarProductos.id_producto} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="nombre" placeholder="Agrege el nombre del producto" value={ModificarProductos && ModificarProductos.nombre} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Marca</Form.Label>
                <Form.Control type="text" name="marca" placeholder="Agrege la marca del producto" value={ModificarProductos && ModificarProductos.marca} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" name="precio" placeholder="Agrege el precio del producto" value={ModificarProductos && ModificarProductos.precio}  onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control type="number" name="cantidad" placeholder="Agrege la cantidad del producto" value={ModificarProductos && ModificarProductos.cantidad} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label># pedido</Form.Label>
                <Form.Control type="number" name="id_pedido" placeholder="Agrege el nuemero del pedido" value={ModificarProductos && ModificarProductos.id_pedido} onChange={onChangeModificar} />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Modificar Producto
            </Button>
        </Form>);
        const modalAgregar = (
            <Modal show={showModalAgregar} onHide={handleCloseAgregarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>{formularioAgregar}</Modal.Body>
            </Modal>
        );
        const modalModificar = (
            <Modal show={showModalModificar} onHide={handleCloseModificarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>{formularioModificar}</Modal.Body>
            </Modal>
        );

        const Actualizar = async () => {
            const response = await clienteAxios.get('/administrador/productos')
            setproductos(response.data.productos)
        }
        useEffect(() => {
            Actualizar()
        }, []);

        const columnas = [
            {
                title: '#',
                field: 'id_producto'
            },
            {
                title: 'Nombre',
                field: 'nombre'
            },
            {
                title: 'Marca',
                field: 'marca'
            },
            {
                title: 'Precio',
                field: 'precio'
            },
            {
                title: 'Cantidad',
                field: 'cantidad'
            },
            {
                title: '# pedido',
                field: 'id_pedido'
            }
        ]

    return (
        <div>
            <MenuAdmin></MenuAdmin>
            {modalModificar}
            {modalAgregar}
            <MaterialTable
                columns={columnas}
                data={productos}
                title="Productos"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar Producto',
                        onClick: (e, rowData) => {
                            ProductoSeleccionado(rowData);
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar Producto',
                        onClick: async (e, rowData) => {
                            await clienteAxios.delete(`/administrador/productos/${rowData.id_producto}`)
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
                Agregar Producto
            </Button>
            <Button variant="warning" onClick={Actualizar}>
                Refrescar
            </Button>
        </div>
    )
}

export default Productos
