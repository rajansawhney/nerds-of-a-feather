import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to="/feed">Feed</Link>
                <Link to="/projects" />
                <Link to="/organizations">Organizations</Link>
                <Link to="/profile" />
            </nav>
        )
    }
}

export default Navbar;
