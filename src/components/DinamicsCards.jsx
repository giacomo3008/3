import { Container, Card, Button, Col, Row } from 'react-bootstrap'


function DinamicsCards() {
    return (
        <>
            <h2 className=" text-white display-5 fw-bold mt-5">Nuovi episodi radio</h2>
            <Container fluid className='p-0 m-0'>
                <Row>
                    <Col xs={4}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of th content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of th content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of th content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of th content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of th content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of th content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DinamicsCards