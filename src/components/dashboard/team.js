import { Row, Col } from 'react-bootstrap';

const Team = () => {
    return (
        <div className="items">
            <div className='item-content'>
                <div></div>
                <span className='item-font-header'>12,000+</span>
                <span className='item-font-span'>Woof Holders</span>
            </div>

            <div className='item-content'>
                <div></div>
                <span className='item-font-header'>600b</span>
                <span className='item-font-span'>Max.Supply</span>
            </div>

            <div className='item-content'>
                <div></div>
                <span className='item-font-header'>RoadMap</span>
            </div>
        </div>
    )
}

export default Team;