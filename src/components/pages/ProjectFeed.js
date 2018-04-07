import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { incrementEventsFinished, setEventsFinished } from '../../state/actions/index';

import ProjectCard from '../ProjectCard';

const dummyAPIData = {
    eventsFinished: 12
};

const mapStateToProps = (state) => ({
    events: _.get(state, 'events', {})
});

class ProjectFeed extends Component {
    componentWillMount() {
        this.props.setEventsFinished(dummyAPIData.eventsFinished)
    }
    render() {
        return (
            <div className="container">
                <h2 className="m-4">Projects You Follow</h2>

                <ProjectCard
                    title="Some Project Name"
                    startDate="2 Days Ago"
                    link={<Link className="btn btn-primary" to="/feed">More Details</Link>}
                >
                    {dummyAPIData.eventsFinished && (
                        <p id="events-finished-text">{}</p>
                    )}
                    <p>Come out so this event, It's going to be the best!</p>
                </ProjectCard>

                <ProjectCard
                    title="Another Project Title"
                    startDate="4 Days Ago"
                    link={<Link className="btn btn-primary" to="/feed">More Details</Link>}
                >
                    <p>This is an event that differs from the first!</p>
                </ProjectCard>
            </div>
        )
    }
}

export default connect(mapStateToProps, { incrementEventsFinished, setEventsFinished })(ProjectFeed);
