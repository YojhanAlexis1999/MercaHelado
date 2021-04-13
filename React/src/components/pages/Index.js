import React from 'react'
import Navbars from '../layout/Navbars'
import Carrusel from '../layout/Carrusel'
import CardFet from '../layout/CardFet'
import Carrito from '../layout/Carrito'
const Index = () => {
    return (
        <div>
            <Navbars />
            <Carrusel></Carrusel>
            <CardFet></CardFet>
            <marquee direction="right">
                <Carrito></Carrito>
            </marquee>
        </div>
    )
}

export default Index
