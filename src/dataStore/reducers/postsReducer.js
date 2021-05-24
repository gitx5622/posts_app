import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
} from '../dispatchTypes';

export const initialPostsState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    posts: {
        merchant_posts: [],
        pagination: {
            count: 0,
            page: null,
            per: null,
        },
    },
};

export const getPostsReducer = (
    state = initialPostsState,
    action
) => {
    switch (action.type) {
        case GET_POSTS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_POSTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                posts: action.posts,
            };
        }
        case GET_POSTS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }

        case 'CLEAR_POSTS_MESSAGES': {
            return {
                ...state,
                isError: false,
                isSuccess: false,
                isLoading: false,
                errorMessage: '',
            };
        }

        case 'RESET_POSTS': {
            return initialPostsState;
        }

        default:
            return state;
    }
};