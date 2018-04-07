import React, { Component } from 'react';

import eventImg1 from '../../static/imgs/stock-event-1.jpg';

import Card from '../Card';

class EventFeed extends Component {
    render() {
        return(
            <div className="container-fluid">
                <h2>Your Upcoming Events</h2>

                <div className="row justify-content-around">
                    <div className="col-4">
                        <Card>
                            <img className="card-img-top" src={eventImg1} alt="Card image cap" />
                            <h4 className="card-title">Some Event Name</h4>
                            <p className="card-text">
                                Come out so this event, It's going to be the best!
                            </p>
                        </Card>
                    </div>
                    <div className="col-4 pull-right">
                        <Card>
                            Calendar
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventFeed;
