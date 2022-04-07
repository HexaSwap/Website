// import React, { useState } from 'react';
import Header from './header';
import OurProject from './ourproject';
import Buy from './buy';
import RoadMap from './roadMap';
import Item from './team';

const Dashboard = () => {
    return (
        <div className='container'>
            <div className="dashboard">
                <Header />
                <Item />
                <OurProject />
                <Buy />
                <RoadMap />
            </div>
        </div >
    )
};

export default Dashboard;