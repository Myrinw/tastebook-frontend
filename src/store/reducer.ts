import { combineReducers } from 'redux';
import userSliceReducer from './user/reducer';
import authReducer from './auth/reducer';
import postReducer from './posts/reducer';
import likesReducer from './likes/recucer';

const reducer = combineReducers({
    user: userSliceReducer,
    auth: authReducer,
    posts: postReducer,
    likes: likesReducer
})

export default reducer;