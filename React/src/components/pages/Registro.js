import React,{ useState, useContext } from 'react';
import AutenticacionContext from '../../context/autenticacion/autenticacionContext'
import { Form, Button} from 'react-bootstrap';
import Navbars from '../layout/Navbars';

const Registro = () => {
    const autenticacionContext = useContext(AutenticacionContext);
    const {RegistroUsuario} = autenticacionContext

    const [ registro, setRegistro ]  = useState({
        nombre: '',
        apellido:'',
        correo: '',
        telefono: '',
        contra:'',
        id_rol: 1
    });

    const onChange = (e)=> {
        setRegistro({
            ...registro,
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = (e) =>{
        const { nombre,apellido,correo,telefono,contra,id_rol } = registro

        if (nombre == '' || apellido == '' || correo == '' || telefono == '' || contra == ''){
            console.log('ingrese su informacion en todos los campos')
        }else{
            //const datos = {nombre,apellido,correo,telefono,contra,id_rol}
            RegistroUsuario(registro)
        }
            

    }
    return (
        <div>
            <Navbars/>
            <Form onSubmit = {onSubmit}>
                <Form.Group >
                    <Form.Label>nombre</Form.Label>
                    <Form.Control 
                    type="text"
                    name = "nombre" 
                    placeholder="nombre"
                    onChange={onChange} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>apellido</Form.Label>
                    <Form.Control 
                    type="text"
                    name = "apellido" 
                    placeholder="apellido"
                    onChange={onChange} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>correo</Form.Label>
                    <Form.Control 
                    type="email"
                    name = "correo" 
                    placeholder="correo"
                    onChange={onChange} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>telefono</Form.Label>
                    <Form.Control 
                    type="text"
                    name = "telefono" 
                    placeholder="telefono"
                    onChange={onChange} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>contraseña</Form.Label>
                    <Form.Control 
                    type="password"
                    name = "contra" 
                    placeholder="contra"
                    onChange={onChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
            {JSON.stringify(registro)}
        </div>
    )
}

export default Registro
