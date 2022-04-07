import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer mt-5'>
            <hr />
            <Row className='p-4'>
                <Col sm={4}>
                    <div className='get-list'>
                        <span>GET ON THE LIST</span>
                        <InputGroup className="mb-3 mt-3">
                            <FormControl
                                placeholder="Email Address"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Button
                            </Button>
                        </InputGroup>
                    </div>
                </Col>
                <Col sm={4}>
                    <img src='assets/img/Owlies3DLogo_View3.png' alt='Logo' width="150px"></img>
                </Col>
                <Col sm={4}>
                    <div>Contact Us</div>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;