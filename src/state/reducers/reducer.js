import _ from 'lodash';

import {
    SET_EVENTS_FINISHED,
    INCREMENT_EVENT_FINISH
} from '../types';

const initialState = { events: { animationVal: 0 } };

const reducer = (state = initialState, action) => {
    const { type, payload = { message: '' } } = action;

    console.log(action);

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