import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { get, filter, isEqual } from 'lodash';
import moment from 'moment';

import EventsWidget from '../EventsWidget'
import eventImg1 from '../../static/imgs/stock-event-1.jpg';

import Card from '../Card';
import Calendar from 'react-calendar';

import { getEventsForProject } from '../../state/actions/index.js'

const mapStateToProps = (state) => ({
    events: get(state, 'events', {}),
    posts: get(state, 'posts', {})
    // animationVal: _.get(state, 'events.animationVal', null),
    // numFinishedEvents: _.get(state, 'events.numFinishedEvents', null)
});

class EventFeed extends Component {
    constructor (props) {
        super(props)
        this.state = {
            filteredEvents: this.props.events
        }
    }

    componentWillMount() {
        this.props.getEventsForProject()
    }

    onDateChange(date) {
        let tempFilteredEvents = filter(this.props.events, event => {
            const eventDate = moment(moment.unix(event.date));
            const selectedDate = moment(date)
            return eventDate.isSame(selectedDate, 'day');
        })

        console.log('this.state.filteredEvents', this.state.filteredEvents)
        console.log('tempFilteredEvents', tempFilteredEvents)

        // let isSame = false
        if (isEqual(this.state.filteredEvents, tempFilteredEvents)) {
            // isSame = true
            this.setState({
                filteredEvents: this.props.events
            })
        } else {
            tempFilteredEvents.length
            ? this.setState({ filteredEvents: tempFilteredEvents })
            : this.setState({ filteredEvents: [] }) 
        }
    }

    render() {
        console.log(this.state)
        const calendar = document.getElementsByClassName('react-calendar')
        // console.log('calendar', calendar)
        return(
            <div className="container">                    
               <div className="row justify-content-center">
                    <div className="col-8">
                        <h2 className="ml-3">Your Upcoming Events</h2>
                    </div>
                    <div className="col-4">
                        <Link to="/addevent" >
                            <button type="button" 
                                    className="btn btn-success float-right" 
                                    data-toggle="modal" 
                                    data-target="#exampleModal">
                                    Add New Event
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <EventsWidget events={this.state.filteredEvents} />                      
                    </div>                  
                    <div className="pull-right">
                        <Card>
                            <Calendar
                                id="calendar" 
                                value={new Date()}
                                onChange={(value) => this.onDateChange(value)}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, { getEventsForProject })(EventFeed);
