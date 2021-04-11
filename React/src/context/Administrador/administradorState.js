import React, {useReducer} from 'react'
import AdministradorContext from './administradorContext';
import AdministradorReducer from './admministradorReducer';
import clienteAxios from '../../config/axios';
import {
    LISTAR_USUARIOS
}from '../../type/index'

const AdministradorState =(props)=>{

    const initializeState ={
        usuarios: null
    }

    const[ state ,dispatch ] = useReducer(AdministradorReducer, initializeState);
    
    const listarUsuarios = async () => {
        const response = await clienteAxios.get('/usuarios')
        dispatch({
            type:LISTAR_USUARIOS,
            payload:response.data.usuarios
        })
    }
    const AgregarUsuario = async (datos)=>{
        await clienteAxios.post('/usuarios',datos)
    }
    const EditarUsuario = async (datos,id) =>{
        await clienteAxios.put(`/usuarios/${id}`,datos)
    }
    const EliminarUsuario = async (id) =>{
        await clienteAxios.delete(`/usuarios/${id}`)
    }
    return(
        <AdministradorContext.Provider
            value={{
                usuarios:state.usuarios,
                listarUsuarios,
                AgregarUsuario,
                EditarUsuario,
                EliminarUsuario
            }}
        >
            {props.children}
        </AdministradorContext.Provider>    
    )
}


export default AdministradorState