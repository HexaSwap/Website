import { Row, Col } from 'react-bootstrap';

const BuyOwlies = () => {
    return (
        <div className='mt-5'>
            <div className='buy-woof'>
                <span className='buy-font-header'>How to Buy</span>
                <Row className="mt-5">
                    <Col sm={3}><img src='assets/img/char.jpg' alt='buy woof' width="250px"></img></Col>
                    <Col sm={3}><img src='assets/img/char.jpg' alt='buy woof' width="250px"></img></Col>
                    <Col sm={3}><img src='assets/img/char.jpg' alt='buy woof' width="250px"></img></Col>
                    <Col sm={3}><img src='assets/img/char.jpg' alt='buy woof' width="250px"></img></Col>
                </Row>
            </div>
        </div>
    )
}

export default BuyOwlies;