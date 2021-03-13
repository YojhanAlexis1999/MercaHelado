import React, { useState, useContext, useEffect } from 'react'
import Navbars from '../layout/Navbars'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import AutenticacionContext from '../../context/autenticacion/autenticacionContext'

const Login = () => {

    // Break

    const history = useHistory()

    const autenticacionContext = useContext(AutenticacionContext)
    const { loginUsuario, rol, autenticado } = autenticacionContext

    useEffect(() => {
        if(autenticado) {
            if (rol == 1) {
                history.push('/Administrador')
            }
            if (rol == 2 ){
                history.push('/Usuario')
            }
            if (rol == 3 ){
                history.push('/Empleado')
            }
            
        }
    }, [rol, autenticado])

    const [ login, setLogin ] = useState({
        correo: '',
        contra: '',
    })

    const onSubmit = (event) => {
        event.preventDefault();

        const { correo, contra } = login

        if (correo === '' || contra === '') {
            console.log("Todos los campos son obligatorios")
        } else {

            loginUsuario({
                correo,
                contra
            })

        }
    }

    const onChange = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <Navbars />
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Correo</Form.Label>
                    <Form.Control 
                        name="correo"
                        type="email" 
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                        name="contra"
                        type="password" 
                        onChange={onChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Iniciar Seccion
                </Button>
            </Form>
            {JSON.stringify(login)}
        </div>
    )
}

export default Login

