import { combineReducers } from 'redux';
import userSliceReducer from './user/reducer';
import authReducer from './auth/reducer';

const reducer = combineReducers({
    user: userSliceReducer,
    auth: authReducer,
})

export default reducer;