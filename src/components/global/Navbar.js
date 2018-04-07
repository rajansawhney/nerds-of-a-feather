import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Projects</Link>
                <Link to="/events">Events</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/profile" >Profile</Link>
            </nav>
        )
    }
}

export default Navbar;
