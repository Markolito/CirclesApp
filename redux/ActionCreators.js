import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const postComment = ( author, text) => dispatch => {
    const newComment = {
        author,
        text
    };
    newComment.date = new Date().toISOString();
    setTimeout(() => {
        dispatch(addComment(newComment));
    }, 2000);
}

export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});