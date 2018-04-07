import _ from 'lodash';
import moment from 'moment';

import {
    SET_EVENTS_FINISHED,
    INCREMENT_EVENT_FINISH
} from '../types';

const initialState = {
    events: [
        { 
            id: 'tuv789',
            name: 'After School Food Drive',
            date: 1523732368,
            description: 'Meet after school to donate your canned food!',
            project: 'Fall Food Initiative',
            location: 'University of Oregon',
            owner: 'FOOD for Lane County', // organization
            tags: ['food', 'homeless', 'fall']
        },
        { 
            id: 'xyz910',
            name: 'Saturday Market Ice Breaker Meeting',
            date: 1525132368,
            description: 'Our first meeting of the Winter Warmth Project!',
            project: 'Winter Warmth Project',
            location: 'Saturday Market',
            owner: 'White Bird Clinic', // organization
            tags: ['clothing', 'homeless', 'winter']
        }
    ],
    projects: [
        {
            id: 'abcd123',
            title: 'Winter Warmth Project',
            startDate: 1523732368,
            numFinishedEvents: 12,
            totalEvents: 30,
            description: "Keep our friends without addresses warm this winter!",
            animationVal: 0
        },
        {
            id: 'efg456',
            title: 'Fall Food Initiative',
            startDate: 1523732368,
            numFinishedEvents: 4,
            totalEvents: 22,
            description: "Spread the love (and food) around town!",
            animationVal: 0
        },
        {
            id: 'gibberish',
            title: 'Another Project Name',
            startDate: 1522924450,
            numFinishedEvents: 50,
            totalEvents: 50,
            description: "This Description Differs from the first",
            animationVal: 0
        }
    ],
    projectView: {}
};

const reducer = (state = initialState, action) => {
    const { type, payload = { message: '' } } = action;

    switch(type) {
        case SET_EVENTS_FINISHED: {
            return _.assign(...state, { ...state, events: { ...state.events, numFinishedEvents: payload } })
        }

        case INCREMENT_EVENT_FINISH: {
            return _.assign(...state, {
                projects: state.projects.map((project, i) =>
                    i === payload.index
                        ? {...project, animationVal: payload.animationVal }
                        : project)
            })
        }

        default: return state;
    }
};

export default reducer