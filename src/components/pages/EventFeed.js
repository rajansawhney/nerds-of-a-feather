import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';

import EventsWidget from '../EventsWidget'
import eventImg1 from '../../static/imgs/stock-event-1.jpg';

import Card from '../Card';
import Calendar from 'react-calendar';

const mapStateToProps = (state) => ({
    events: _.get(state, 'events', {}),
    // animationVal: _.get(state, 'events.animationVal', null),
    // numFinishedEvents: _.get(state, 'events.numFinishedEvents', null)
});

class EventFeed extends Component {
    render() {
        console.log(this.props)
        return(
            <div className="container">                    
               <div className="row justify-content-center">
                <div className="col-12 justify-self-start ml-5">
                    <h2>Your Upcoming Events</h2>
                </div>
                    <div className="col-8">
                        <EventsWidget events={this.props.events} />                        
                    </div>                  
                    <div className="pull-right">
                        <Card>
                            <Calendar value={new Date()}/>
                        </Card>
                    </div>
                </div>

            </div>
        )
    }
}

// export default EventFeed;
export default connect(mapStateToProps)(EventFeed);
