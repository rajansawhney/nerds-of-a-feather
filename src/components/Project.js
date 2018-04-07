import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { setEventsFinished, incrementEventsFinished } from '../state/actions/index';

import ProjectCard from './ProjectCard';

const mapStateToProps = (state) => ({
    projects: _.get(state, 'projects', [])
});

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
    }
    componentWillMount() {
        const numFinishedEvents = _.isUndefined(this.props.match)
            ? this.props.numFinishedEvents
            : _.find(this.props.projects, { id: this.props.match.params.id }).numFinishedEvents;
        this.props.setEventsFinished(numFinishedEvents)
    }

    componentDidMount() {
        const project = _.find(this.props.projects, { id: this.props.id || _.get(this.props, 'match.params.id', '') });
        const projectIndex = _.findIndex(this.props.projects, project);
        setInterval(
            _.throttle(this.props.incrementEventsFinished, 10),
            250,
            projectIndex
        );
    }

    render() {
        const {
            id,
            title,
            startDate,
            description,
            numFinishedEvents,
            totalEvents,
            animationVal
        } = this.props;

        return (
            <ProjectCard
                key={this.props.key}
                title={title}
                startDate={`This project was started ${moment(moment.unix(startDate)).fromNow()}`}
                link={<Link className="btn btn-primary" to={`projects/${id}`}>More Details</Link>}
            >
                <div className="row justify-content-end align-items-center">
                    <div className="col-3">
                        <ProgressBar
                            animationVal={animationVal}
                            totalEvents={totalEvents}
                        />
                    </div>
                    {numFinishedEvents && (
                        <div className="col-1">
                            <p className="m-0">{animationVal}/{totalEvents}</p>
                        </div>
                    )}
                </div>
                <p>{description}</p>
            </ProjectCard>
        )
    }
}

export default connect(mapStateToProps, { setEventsFinished, incrementEventsFinished })(Project);

const ProgressBar = props => (
    <div className="progress">
        <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-success"
            role="progressbar"
            style={{ width: `${(props.animationVal/props.totalEvents)*100}%` }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
        />
    </div>
);