import axios from 'axios';
import { API_URL } from '../../config';

function storeLogin(token: string) {
    return {
        type: "userLoggedIn",
        payload: token
    }
}

function storeMe(me: {}) {
    return {
        type: "usersProfile",
        payload: me
    }
}

export const login = function (email: string, password: string) {
    return async function (dispatch: any, getState: any) {
        console.log('inside thunk');

        try {
            const loginRequest: any = await axios.post(`${API_URL}/login`, {
                email,
                password
            });
            const jwt = loginRequest.data.jwt
            localStorage.setItem('token', loginRequest.data.jwt);
            dispatch(storeLogin(loginRequest.data.jwt));
            const me = await axios.post(`${API_URL}/users/me`, {
                token: jwt,
            });
            dispatch(storeMe(me.data));

        } catch (e) {
            console.log(e);
        }


    }
}

export const loginState = async function (dispatch: any, getState: any) {
    const token = localStorage.getItem('token');
    if (token) {
        dispatch(storeLogin(token));
    }

}