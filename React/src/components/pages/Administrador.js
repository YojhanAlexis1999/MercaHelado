import React,{useContext,useEffect} from 'react'
import MenuAdmin from '../layout/MenuAdmin'
import AdministradorContext from '../../context/Administrador/administradorContext'

const Administrador = () => {
    const administradorContext = useContext(AdministradorContext);
    const{listarUsuarios }= administradorContext;
    useEffect(()=>{
        listarUsuarios()
    },[])
    return (
        <div>
            <MenuAdmin></MenuAdmin>
            <h1>Soy un Dios</h1>
        </div>
    )
}

export default Administrador
