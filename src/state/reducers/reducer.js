import _ from 'lodash';
import moment from 'moment';

import {
    SET_EVENTS_FINISHED,
    INCREMENT_EVENT_FINISH
} from '../types';

const initialState = {
    events: { animationVal: 0 },
    projects: [
        {
            id: 'abcd123',
            title: 'Some Project Name',
            startDate: 1522924450,
            numFinishedEvents: 12,
            totalEvents: 30,
            description: "Come out so this event, It's going to be the best!",
            animationVal: 0
        }
    ]
};

const reducer = (state = initialState, action) => {
    const { type, payload = { message: '' } } = action;

    switch(type) {
        case SET_EVENTS_FINISHED: {
            return _.assign(...state, { events: { ...state.events, numFinishedEvents: payload } })
        }

        case INCREMENT_EVENT_FINISH: {
            return _.assign(...state, { events: { ...state.events, animationVal: payload } })
        }

        default: return state;
    }
};

export default reducer