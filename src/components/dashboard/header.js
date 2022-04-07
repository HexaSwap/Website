import React from 'react';
import { Row, Col } from 'react-bootstrap';


const header = () => {
    return (
        <Row className="App-header">
            <Col sm={6} className="header-left">
                <p className='font-header'>Hexa the .............</p>
                <p className='font-p'>A Decentralized Community Coin Building the Web 3.0 Future</p>
                <div>

                </div>
                <div className='button-group'>
                    <button className='read-button'>Read WoofPaper</button>
                    <button className='buy-button'>How to Buy</button>
                </div>
            </Col>
            <Col sm={6} className="header-right">
                <img src='assets/img/Hexa.png' alt='Logo' width="500px"></img>
            </Col>
        </Row>
    )
}

export default header