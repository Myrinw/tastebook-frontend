import { combineReducers } from 'redux';
import userSliceReducer from './user/reducer';
import authReducer from './auth/reducer';
import postReducer from './posts/reducer';

const reducer = combineReducers({
    user: userSliceReducer,
    auth: authReducer,
    posts: postReducer
})

export default reducer;