import { combineReducers } from 'redux';
import userSliceReducer from './user/reducer';
import authReducer from './auth/reducer';
import postReducer from './posts/reducer';
import likesReducer from './likes/recucer';
import commentsReducer from './comments/reducer';
import usersRecuer from './users/reducer';
import followersReducer from './followers/reducer';

const reducer = combineReducers({
    user: userSliceReducer,
    auth: authReducer,
    posts: postReducer,
    likes: likesReducer,
    comments: commentsReducer,
    allUsers: usersRecuer,
    followers: followersReducer
})

export default reducer;