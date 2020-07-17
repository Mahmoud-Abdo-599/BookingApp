import React, { Component } from 'react';
import { ReactComponent as IconHome } from '../img/SVG/home.svg';
import { ReactComponent as IconAircraft } from '../img/SVG/aircraft-take-off.svg';
import { ReactComponent as IconKey } from '../img/SVG/key.svg';
import { ReactComponent as IconMap } from '../img/SVG/map.svg';



class NavSideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: '1'
        }
    }

    toggleNav1 = () => {
        this.setState({toggle: '1'})
    }

    toggleNav2 = () => {
        this.setState({toggle: '2'})
    }

    toggleNav3 = () => {
        this.setState({toggle: '3'})
    }

    toggleNav4 = () => {
        this.setState({toggle: '4'})
    }
    // I can use switch cases rather than type 4 functions


    render() {
        return (
            <nav className="sidebar">
                <ul className="side-nav">
                    <li className={`${
                        this.state.toggle == '1' ? 'side-nav__item--active' : ''
                      } side-nav__item`}>
                        <div className="side-nav__link" onClick={this.toggleNav1}>
                            <IconHome className="side-nav__icon" />
                            <span>Hotel</span>
                        </div>
                    </li>

                    <li className={`${
                        this.state.toggle == '2' ? 'side-nav__item--active' : ''
                      } side-nav__item`}>
                        <div className="side-nav__link" onClick={this.toggleNav2}>
                            <IconAircraft className="side-nav__icon" />
                            <span>Flight</span>
                        </div>
                    </li>

                    <li className={`${
                        this.state.toggle == '3' ? 'side-nav__item--active' : ''
                      } side-nav__item`}>
                        <div className="side-nav__link" onClick={this.toggleNav3}>
                            <IconKey className="side-nav__icon" />
                            <span>Car rental</span>
                        </div>
                    </li>

                    <li className={`${
                        this.state.toggle == '4' ? 'side-nav__item--active' : ''
                      } side-nav__item`}>
                        <div className="side-nav__link" onClick={this.toggleNav4}>
                            <IconMap className="side-nav__icon" />
                            <span>Tours</span>
                        </div>
                    </li>
                </ul>

                <div className="legal">
                    &copy; 2020 by Mahmoud Abdo. All rights reserved.
                </div>
            </nav>
        )
    }
}

    export default NavSideBar
