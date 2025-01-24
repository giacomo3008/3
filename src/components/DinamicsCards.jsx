import { Container, Card, Col, Row } from 'react-bootstrap'
import './ContentCards.css'


function DinamicsCards() {
    return (
        <>
            <h2 className=" text-white display-6 fw-bold mt-5 mb-3">Nuove uscite</h2>
            <Container fluid className='p-0 m-0'>
                <Row>
                    <Col xs={4} className='p-0'>
                        <Card style={{ backgroundColor: 'transparent', width: '95%', marginBottom: '2rem' }}>
                            <Card.Img variant="top" src="/src/assets/img/images/2c.png" />
                            <Card.Body className='p-0'>
                                <Card.Text className='fs-5 m-0 m-0'>
                                    Song Placeholder
                                </Card.Text>
                                <Card.Text className='grey-card m-0 artist-card'>
                                    Artist Placeholder
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} className='p-0'>
                        <Card style={{ backgroundColor: 'transparent', width: '95%', marginBottom: '2rem' }}>
                            <Card.Img variant="top" src="/src/assets/img/images/2c.png" />
                            <Card.Body className='p-0'>
                                <Card.Text className='fs-5 m-0'>
                                    Song Placeholder
                                </Card.Text>
                                <Card.Text className='grey-card m-0 artist-card'>
                                    Artist Placeholder
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} className='p-0'>
                        <Card style={{ backgroundColor: 'transparent', width: '95%', marginBottom: '2rem' }}>
                            <Card.Img variant="top" src="/src/assets/img/images/2c.png" />
                            <Card.Body className='p-0'>
                                <Card.Text className='fs-5 m-0'>
                                    Song Placeholder
                                </Card.Text>
                                <Card.Text className='grey-card m-0 artist-card'>
                                    Artist Placeholder
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} className='p-0'>
                        <Card style={{ backgroundColor: 'transparent', width: '95%', marginBottom: '2rem' }}>
                            <Card.Img variant="top" src="/src/assets/img/images/2c.png" />
                            <Card.Body className='p-0'>
                                <Card.Text className='fs-5 m-0'>
                                    Song Placeholder
                                </Card.Text>
                                <Card.Text className='grey-card m-0 artist-card'>
                                    Artist Placeholder
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} className='p-0'>
                        <Card style={{ backgroundColor: 'transparent', width: '95%', marginBottom: '2rem' }}>
                            <Card.Img variant="top" src="/src/assets/img/images/2c.png" />
                            <Card.Body className='p-0'>
                                <Card.Text className='fs-5 m-0'>
                                    Song Placeholder
                                </Card.Text>
                                <Card.Text className='grey-card m-0 artist-card'>
                                    Artist Placeholder
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} className='p-0'>
                        <Card style={{ backgroundColor: 'transparent', width: '95%', marginBottom: '2rem' }}>
                            <Card.Img variant="top" src="/src/assets/img/images/2c.png" />
                            <Card.Body className='p-0'>
                                <Card.Text className='fs-5 m-0'>
                                    Song Placeholder
                                </Card.Text>
                                <Card.Text className='grey-card m-0 artist-card'>
                                    Artist Placeholder
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DinamicsCards