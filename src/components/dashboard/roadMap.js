import { Row, Col, Container } from 'react-bootstrap';

const RoadMap = () => {
    return (
        <div className='mt-5'>
            <div className="roadmap">
                <span className='roadmap-font-header'>ROADMAP</span>
                <div className='roadmap-contents'>
                    <div className='roadmap-content'>
                        <Container>
                            <Row>
                                <Col sm={4}>
                                    <div className='roadmap-item'>
                                        <span className='roadmap-item-header'>PHASE 1</span>
                                        <span className='roadmap-item-span1'>FAIR LAUNCH</span>
                                        <span className='roadmap-item-span2'>Start: Q2 2021</span>
                                        <span className='roadmap-item-span2'>Status: Mission Accomplishes</span>
                                    </div>
                                </Col>
                                <Col sm={8}></Col>
                            </Row>
                        </Container>
                    </div>
                    <div className='roadmap-content'>
                        <Container>
                            <Row>
                                <Col sm={4}>
                                    <div className='roadmap-item'>
                                        <span className='roadmap-item-header'>PHASE 2</span>
                                        <span className='roadmap-item-span1'>SMI PLAY</span>
                                        <span className='roadmap-item-span2'>Start: Q3 2021</span>
                                        <span className='roadmap-item-span2'>Status: Mission in Progress</span>
                                    </div>
                                </Col>
                                <Col sm={8}></Col>
                            </Row>
                        </Container>
                    </div>
                    <div className='roadmap-content'>
                        <Container>
                            <Row>
                                <Col sm={4}>
                                    <div className='roadmap-item'>
                                        <span className='roadmap-item-header'>PHASE 3</span>
                                        <span className='roadmap-item-span1'>BEYOND THE MOON</span>
                                        <span className='roadmap-item-span2'>Start: Q2 2022</span>
                                        <span className='roadmap-item-span2'>Status: Mission on Standby</span>
                                    </div>
                                </Col>
                                <Col sm={8}></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RoadMap;