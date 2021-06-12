import axiosConfig from '../../config/axiosConfig';

import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
} from '../dispatchTypes';

export const getPosts = (dispatch) => {
    dispatch({
        type: GET_POSTS,
    });

    axiosConfig
        .get(`/posts`)
        .then(response => {
            dispatch({
                type: GET_POSTS_SUCCESS,
                posts: response.data,
            });
            console.log(response.data);
        })
        .catch(error => {
            dispatch({
                type: GET_POSTS_ERROR,
                errorMessage: error.response.data.error_message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_POSTS_ERROR,
                errorMessage:
                    'Lost connetion to the server. Kindly check your internet connection',
            });
        });
};
