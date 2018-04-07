import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectCard from '../ProjectCard';

class ProjectFeed extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>Your Upcoming Events</h2>

                <div className="row justify-content-around">
                    <div className="col-4">
                        <ProjectCard
                            title="Some Project Name"
                            startDate="2 Days Ago"
                            link={<Link className="btn btn-primary" to="/feed">More Details</Link>}
                        >
                            Come out so this event, It's going to be the best!
                        </ProjectCard>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectFeed;
