import { Container, Card, Button, Col, Row } from 'react-bootstrap'
import DinamicsCards from './DinamicsCards'

function ContentCards() {

    return (

        <div className=" px-5 mt-5">
            <h2 className=" text-white display-1 fw-bold">Novità</h2>
            <hr style={{ borderColor: 'white' }} />
            <div className='d-flex flex-row overflow-x-auto m-0 p-0' style={{ width: 'auto' }}>
                <Card style={{ minWidth: '500px', marginRight: '20px' }}>
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
                <Card style={{ minWidth: '500px', marginRight: '20px' }}>
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
            </div>
            <h2 className=" text-white display-5 fw-bold mt-5">Nuovi episodi radio</h2>
            <Container fluid className=' d-flex flex-row justify-content-between p-0 m-0'>
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
                </Row>
            </Container>
            <DinamicsCards />
        </div>
    )
}

export default ContentCards