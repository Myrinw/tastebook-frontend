import { combineReducers } from 'redux';
import userSliceReducer from './user/reducer';
import authReducer from './auth/reducer';
import postReducer from './posts/reducer';
import likesReducer from './likes/recucer';
import commentsReducer from './comments/reducer';

const reducer = combineReducers({
    user: userSliceReducer,
    auth: authReducer,
    posts: postReducer,
    likes: likesReducer,
    comments: commentsReducer,
})

export default reducer;