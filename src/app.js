import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './global.scss';

import Header from './components/global/Header';

import ProjectFeed from './components/pages/ProjectFeed';
import EventFeed from './components/pages/EventFeed';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route path="/" exact component={ProjectFeed} />
                        <Route path="/feed" component={EventFeed} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;
