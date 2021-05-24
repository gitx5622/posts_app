import { combineReducers } from 'redux';
import {getPostsReducer} from "./postsReducer";


const rootReducer = combineReducers({
    postState: getPostsReducer,
});

export default rootReducer;
