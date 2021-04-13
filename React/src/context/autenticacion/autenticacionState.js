import React, { useReducer } from 'react'
import AutenticacionContext from './autenticacionContext';
import AutenticacionReducer from './autenticacionReducer';
import clienteAxios from '../../config/axios';
import {
    LOGIN_EXITOSO,
    REGISTRO_EXITOSO,
    CERRAR_SESION
} from '../../type/index'

const AutenticacionState = (props) => {

    const initializeState = {
        autenticado: false,
        usuario: null,
        rol: null
    }

    const [state, dispatch] = useReducer(AutenticacionReducer, initializeState);

    const RegistroUsuario = async (datos) => {
        try {
            const usuario = await clienteAxios.post("/usuarios", datos)
            dispatch({
                type: REGISTRO_EXITOSO,
            })
        } catch (error) {
            console.log(error.response)
        }
    }
    const loginUsuario = async (datos) => {
        try {
            const usuario = await clienteAxios.post("/usuarios/login", datos)
            dispatch({
                type: LOGIN_EXITOSO,
                payload: usuario.data.usuario[0]

            })
        } catch (error) {
            console.log(error.response)
        }
    }
    const CerrarSesion = () => {
        try {
            dispatch({
                type: CERRAR_SESION
            })
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <AutenticacionContext.Provider
            value={{
                autenticado: state.autenticado,
                usuario: state.usuario,
                rol: state.rol,
                RegistroUsuario,
                loginUsuario,
                CerrarSesion
            }}
        >
            {props.children}
        </AutenticacionContext.Provider>
    )
}

export default AutenticacionState