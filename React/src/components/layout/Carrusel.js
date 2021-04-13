import React from 'react'
import {
    Carousel
} from 'react-bootstrap'
import helado from '../../img/helado.jpg'
import helado1 from '../../img/helado1.jpg'
import helado2 from '../../img/helado2.jpg'

const Carrusel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={helado}
                        style={{height:500, width: 300}}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={helado1}
                        style={{height:500, width: 300}}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={helado2}
                        style={{height:500, width: 300}}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carrusel
