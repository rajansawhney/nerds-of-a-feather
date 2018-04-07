import React, { Component } from 'react';
import logo from '../../static/imgs/ecan_logo.png';

import Navbar from './Navbar';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="text-center m-auto">
                    <img src={logo} alt="ECAN Logo"/>
                </div>
                <div className="m-auto text-center">
                    <Navbar />
                </div>
            </header>
        )
    }
}

export default Header;
