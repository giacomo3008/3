import { Container, Card, Col, Row } from 'react-bootstrap'
import DinamicsCards from './DinamicsCards'
import './ContentCards.css'
import { MdKeyboardArrowRight } from "react-icons/md";

function ContentCards() {

    return (

        <div className=" px-5 mt-5">
            <h2 className=" text-white display-1 fw-bold">Novità</h2>
            <hr style={{ borderColor: 'white' }} />
            <div className='d-flex flex-row overflow-x-auto m-0 p-0' style={{ width: 'auto' }}>
                <Card style={{ minWidth: '500px', marginRight: '20px', backgroundColor: 'transparent' }}>
                    <Card.Body className='p-0'>
                        <Card.Title className='grey-card fs-3 m-0 cc'>NUOVA STAZIONE RADIO</Card.Title>
                        <Card.Text className=' fs-1 m-0 mb-4 cc'>
                            Rilassati, al resto pensiamo noi.
                            Ascolta Apple Music Chill
                        </Card.Text>
                        <Card.Img variant="top" src="/src/assets/img/images/1a.png" />
                    </Card.Body>
                </Card>
                <Card style={{ minWidth: '500px', marginRight: '20px', backgroundColor: 'transparent' }}>
                    <Card.Body className='p-0'>
                        <Card.Title className='grey-card fs-3 m-0 cc'>NUOVA STAZIONE RADIO</Card.Title>
                        <Card.Text className=' fs-1 m-0 mb-4 cc'>
                            Ecco la nuova casa della musica latina
                        </Card.Text>
                        <Card.Img variant="top" src="/src/assets/img/images/1b.png" />
                    </Card.Body>
                </Card>
            </div>

            <Container fluid className='p-0 m-0 mt-5'>
                <h2 className=" text-white display-6 fw-bold mb-3">Nuovi episodi radio <span> <MdKeyboardArrowRight /> </span></h2>
                <Row className=' d-flex flex-row justify-content-between p-0 m-0'>
                    <Col xs={4} className='p-0'>
                        <Card style={{ backgroundColor: 'transparent', width: '95%' }}>
                            <Card.Img variant="top" src="/src/assets/img/images/2a.png" />
                            <Card.Body className='p-0'>
                                <Card.Text className='fs-4 second-cards'>
                                    <p className='d-flex flex-row justify-content-between align-items-center'>Prólogo con Abuelo
                                        <span className="explicit-badge">
                                            E
                                        </span>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} className='p-0'>
                        <Card style={{ backgroundColor: 'transparent', width: '95%' }}>
                            <Card.Img variant="top" src="/src/assets/img/images/2b.png" />
                            <Card.Body className='p-0'>
                                <Card.Text className='fs-4 second-cards'>
                                    The Wanderer
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} className='p-0'>
                        <Card style={{ backgroundColor: 'transparent', width: '95%' }}>
                            <Card.Img variant="top" src="/src/assets/img/images/2c.png" />
                            <Card.Body className='p-0'>
                                <Card.Text className='fs-4 second-cards'>
                                    Michael Bublé & Carly
                                    Pearce
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <DinamicsCards />
        </div>
    )
}

export default ContentCards