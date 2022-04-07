import { Row, Col } from 'react-bootstrap';

const header = () => {
    return (
        <div className="owlies-club mt-5">
            <Row>
                <Col sm={6}>
                    <div className='owlies-club-content'>
                        <h1>Our Project</h1>
                        <p>BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</p>
                    </div>
                </Col>
                <Col sm={6} className="owlies-items">
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <img src="assets/img/buy.png" alt='item' width="100%"></img>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default header;