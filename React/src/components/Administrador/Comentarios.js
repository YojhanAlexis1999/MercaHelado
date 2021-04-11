import React from 'react'
import MenuAdmin from '../layout/MenuAdmin'
import { 
    Button
} from 'react-bootstrap'

const Comentarios = () => {
    return (
        <div>
            <MenuAdmin></MenuAdmin>
            <>
            <Button as="input" type="reset" value="Agregar" />
            </>
        </div>
    )
}

export default Comentarios
