import React from 'react'
import { Toast, Image, Row, Col } from 'react-bootstrap'
import chococono from '../../img/chococono.png'
import ch from '../../img/ch.png'
import pote from '../../img/pote.png'
import pote1 from '../../img/pote1.png'
import bocatto from '../../img/bocatto.gif'
import bocatto2 from '../../img/bocatto2.png'

const CardFet = () => {
    return (
        <div>
            <center>
                <br></br>
                <>
                    <Row>
                        <Col xs={6} md={4} xs={2}>
                            <Toast>
                                <Toast.Header>
                                    <Image src={chococono} style={{ height: 300, width: 300 }} rounded />
                                </Toast.Header>
                                <Toast.Body>
                                    Chococonno faked $2000
                                </Toast.Body>
                            </Toast>
                        </Col>
                        <Col xs={6} md={4}>
                        <Toast>
                                <Toast.Header>
                                    <Image src={ch} style={{ height: 300, width: 300 }} rounded />
                                </Toast.Header>
                                <Toast.Body>
                                    Chococonno faked $2000
                        </Toast.Body>
                        </Toast>
                        </Col>
                        <Col xs={6} md={4}>
                        <Toast>
                                <Toast.Header>
                                    <Image src={pote} style={{ height: 300, width: 300 }} rounded />
                                </Toast.Header>
                                <Toast.Body>
                                    Medio litro de helado mony $2000
                        </Toast.Body>
                        </Toast>
                        <br></br>
                        </Col>
                        
                        <Col xs={6} md={4} sm={2}>
                        <Toast>
                                <Toast.Header>
                                    <Image src={pote1} style={{ height: 300, width: 300 }} rounded />
                                </Toast.Header>
                                <Toast.Body>
                                    Medio litro de helado mony $2000
                        </Toast.Body>
                        </Toast>
                        </Col>
                        <Col xs={6} md={4} sm={2}>
                        <Toast>
                                <Toast.Header>
                                    <Image src={bocatto} style={{ height: 300, width: 300 }} rounded />
                                </Toast.Header>
                                <Toast.Body>
                                    Medio litro de helado mony $2000
                        </Toast.Body>
                        </Toast>
                        </Col>
                        <Col xs={6} md={4} sm={2}>
                        <Toast>
                                <Toast.Header>
                                    <Image src={bocatto2} style={{ height: 300, width: 300 }} rounded />
                                </Toast.Header>
                                <Toast.Body>
                                    Medio litro de helado mony $2000
                        </Toast.Body>
                        </Toast>
                        </Col>
                    </Row>
                </>
                <br></br>
            </center>
        </div>
    )
}

export default CardFet
