import * as ActionTypes from './ActionTypes';

export const posts = (state = { isLoading: true,
                                     errMess: null,
                                     campsites: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_POSTS:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};

        case ActionTypes.POSTS_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []}

        case ActionTypes.POSTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};