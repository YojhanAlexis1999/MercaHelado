import React, { useEffect, useState } from 'react'
import MenuAdmin from '../layout/MenuAdmin'
import MaterialTable from 'material-table';
import clienteAxios from '../../config/axios'
import {
    Modal, Button, Form
} from 'react-bootstrap'

const Inventario = () => {
    const [inventario, setinventario] = useState([])
    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [AgregarInventario, setAgregarInvenatario] = useState({
        id_producto:'',
        cantidad: '',
        peso:'',
        fecha_ingreso:''
    });
    const [showModalModificar, setShowModalModificar] = useState(false);
    const [ModificarInventario, setModificarInvenario] = useState({
        id_inventario: '',
        id_producto:'',
        cantidad: '',
        peso:'',
        fecha_ingreso:''
    });
    const onChangeAgregar = (e) => {
        setAgregarInvenatario({
            ...AgregarInventario,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitAgregar = async (e) => {
        const { id_producto,cantidad,peso,fecha_ingreso} = AgregarInventario
        if ( id_producto =='' || cantidad == ''|| peso == ''||fecha_ingreso == '') {
            console.log("Inventario Agregado")
        } else {
            const datos = { id_producto,cantidad,peso,fecha_ingreso }
            await clienteAxios.post(`/administrador/inventario`, datos)
        }
    }
    const onChangeModificar = (e) => {
        setModificarInvenario({
            ...ModificarInventario,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitModificar = async (e) => {
        const { id_inventario,id_producto,cantidad,peso,fecha_ingreso } = ModificarInventario
        if ( id_inventario == '' ||id_producto =='' || cantidad == '' || peso == ''||fecha_ingreso == '') {
            console.log("Inventario Modificado")
        } else {
            const datos = { id_inventario,id_producto,cantidad,peso,fecha_ingreso }
            await clienteAxios.put(`/administrador/inventario/${id_inventario}`, datos)
        }
    }
    const handleCloseAgregarModal = () => setShowModalAgregar(false);
    const handleShowAgregarModal = () => setShowModalAgregar(true);
    const handleCloseModificarModal = () => setShowModalModificar(false);
    const handleShowModificarModal = () => setShowModalModificar(true);

    const InventarioSeleccionado = (inventario) => {
        handleShowModificarModal();
        setModificarInvenario(inventario);
    }
    const formularioAgregar = (
        <Form onSubmit={onSubmitAgregar} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label># producto</Form.Label>
                <Form.Control type="number" name="id_producto" placeholder="Agrege el numero del producto" onChange={onChangeAgregar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control type="number" name="cantidad" placeholder="Agrege la cantidad del producto" onChange={onChangeAgregar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Peso</Form.Label>
                <Form.Control type="text" name="peso" placeholder="Agrege el peso del producto" onChange={onChangeAgregar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Fecha de ingreso</Form.Label>
                <Form.Control type="text" name="fecha_ingreso" placeholder="Agrege la fecha de ingreso del producto" onChange={onChangeAgregar} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Inventario
            </Button>
        </Form>
    );

    const formularioModificar = (
        <Form onSubmit={onSubmitModificar} >
            
            <Form.Group controlId="formBasicEmail">
                <Form.Label># Inventario</Form.Label>
                <Form.Control type="number" name="id_inventario" placeholder="Modifique el nuemero de inventario" value={ModificarInventario && ModificarInventario.id_inventario} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label># producto</Form.Label>
                <Form.Control type="number" name="id_producto" placeholder="Modifique el nuemero de producto" value={ModificarInventario && ModificarInventario.id_producto} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control type="number" name="cantidad" placeholder="Agrege la cantidad del producto" value={ModificarInventario && ModificarInventario.cantidad} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label># peso</Form.Label>
                <Form.Control type="text" name="peso" placeholder="Modifique el peso de inventario" value={ModificarInventario && ModificarInventario.id_peso} onChange={onChangeModificar} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label> Fecha de Ingreso</Form.Label>
                <Form.Control type="text" name="fecha_ingreso" placeholder="Modifique la fecha del inventario" value={ModificarInventario && ModificarInventario.fecha_ingreso} onChange={onChangeModificar} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Modificar Inventario
            </Button>
        </Form>);
        const modalAgregar = (
            <Modal show={showModalAgregar} onHide={handleCloseAgregarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Inventario</Modal.Title>
                </Modal.Header>
                <Modal.Body>{formularioAgregar}</Modal.Body>
            </Modal>
        );
        const modalModificar = (
            <Modal show={showModalModificar} onHide={handleCloseModificarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Inventario</Modal.Title>
                </Modal.Header>
                <Modal.Body>{formularioModificar}</Modal.Body>
            </Modal>
        );
        const Actualizar = async () => {
            const response = await clienteAxios.get('/administrador/inventario')
            setinventario(response.data.inventario)
        }
        useEffect(() => {
            Actualizar()
        }, []);

        const columnas = [
            {
                title: '#',
                field: 'id_inventario'
            },
            {
                title: '# Producto',
                field: 'id_producto'
            },
            {
                title: 'Cantidad',
                field: 'cantidad'
            },
            {
                title: 'Peso',
                field: 'peso'
            }, 
            {
                title: 'Fecha de ingreso',
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
                data={inventario}
                title="Inventario Productos"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar inventario',
                        onClick: (e, rowData) => {
                            InventarioSeleccionado(rowData);
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar Inventario',
                        onClick: async (e, rowData) => {
                            await clienteAxios.delete(`/administrador/inventario/${rowData.id_inventario}`)
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
                Agregar Inventario
            </Button>
            <Button variant="warning" onClick={Actualizar}>
                Refrescar
            </Button>
        </div>
    )
}

export default Inventario
