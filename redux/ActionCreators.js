import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchPosts = () => dispatch => {
    return fetch(baseUrl + 'posts')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(posts => dispatch(addPosts(posts)))
        .catch(error => dispatch(postsFailed(error.message)));
};

export const fetchUsers = () => dispatch => {
    return fetch(baseUrl + 'users')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(users => dispatch(addUsers(users)))
        .catch(error => dispatch(usersFailed(error.message)));
};

export const addPosts = posts => ({
    type: ActionTypes.ADD_POSTS,
    payload: posts
});

export const addUser = user => ({
    type: ActionTypes.ADD_USER,
    payload: user
});

export const addUsers = users => ({
    type: ActionTypes.ADD_USERS,
    payload: users
});

export const postFeed = ( user, text, image) => dispatch => {
    const newPost = {
        user,
        text,
        image
    };
    newPost.date = new Date().toISOString();
    setTimeout(() => {
        dispatch(addPost(newPost));
    }, 2000);
}

export const addPost = post => ({
    type: ActionTypes.ADD_POST,
    payload: post
});

export const postsFailed = errMess => ({
    type: ActionTypes.POSTS_FAILED,
    payload: errMess
});

export const usersFailed = errMess => ({
    type: ActionTypes.USERS_FAILED,
    payload: errMess
});