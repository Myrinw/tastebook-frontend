import axios from 'axios';
import { API_URL } from '../../config';

function storeLogin(token: string) {
    return {
        type: "userLoggedIn",
        payload: token
    }
}

export const login = function (email: string, password: string) {
    return async function (dispatch: any, getState: any) {
        console.log('inside thunk')
        const loginRequest: any = await axios.post(`${API_URL}/login`, {
            email,
            password
        });
        console.log(loginRequest);
        dispatch(storeLogin(loginRequest.data.jwt))
    }
}