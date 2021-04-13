import React from 'react'
import {Image} from 'react-bootstrap'
import carrito from '../../img/carrito.gif'

const Carrito = () => {
    return (
        <div>
            <Image src={carrito} style={{height:300, width: 300}} thumbnail />

        </div>
    )
}

export default Carrito
