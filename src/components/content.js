import React, { Component } from 'react';


import NavSideBar from './nav-side-bar';
import HotelView from './hotel-view';

class Content extends Component {
    
    render() {
    return (
        <div className="content">
            <NavSideBar />
            <HotelView />
        </div>
    )
    }
}

export default Content
