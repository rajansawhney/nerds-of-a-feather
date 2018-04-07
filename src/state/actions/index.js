import _ from 'lodash';

import {
    SET_EVENTS_FINISHED,
    INCREMENT_EVENT_FINISH
} from '../types';

export const setEventsFinished = (val) => {
    return (dispatch, getState) => {
        dispatch({
            type: SET_EVENTS_FINISHED,
            payload: val
        })
    }
};

export const incrementEventsFinished = (projectIndex) => {
    return (dispatch, getState) => {
        const project = _.get(getState(), 'projects')[projectIndex];
        const currentVal = _.get(project, `animationVal`, null);
        const targetVal = _.get(project, 'numFinishedEvents', null);
        if (currentVal < targetVal) {
            dispatch({
                type: INCREMENT_EVENT_FINISH,
                payload: {
                    index: projectIndex,
                    animationVal: currentVal + 1
                }
            })
        } else {
            window.clearInterval(incrementEventsFinished)
        }
    }
};
