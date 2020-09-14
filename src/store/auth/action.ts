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
    console.log('logging in');
    if (token) {
        try {
            const me = await axios.post(`${API_URL}/users/me`, {
                token,
            });
            dispatch(storeMe(me.data));
            dispatch(storeLogin(token));

        } catch (e) {
            localStorage.removeItem('token');
            console.log(e);
        }
    } else {
        return;
    }

}

function storeLogOut() {
    return {
        type: "userLoggedOut",
    }
}


export const logOut = async function (dispatch: any) {
    localStorage.removeItem('token');
    dispatch({ type: "userLoggedOut" });
}

export const signUp = function (email, password, username, bio, picture, restriction, cuisine, alcohol, meal) {
    return async function (dispatch: any, getState: any) {
        try {
            const newUser = await axios.post(`${API_URL}/users`, {
                email,
                password,
                bio,
                username,
                picture
            });
            const newFood = await axios.post(`${API_URL}/food`, {
                restriction,
                cuisine,
                alcohol,
                meal,
                userId: newUser.data.id,
            });
            if (newFood) {
                dispatch({ type: "userSignedUp" })
            }
        } catch (e) {
            console.log(e);
        }

    }
}

export const fetchSingleUser = (id) => async (dispatch, getState) => {
    console.log('in thunk')
    try {
        const user = await axios.get(`${API_URL}/users/${id}`);
        dispatch({ type: "storeSingleUser", payload: user.data });
    } catch (e) {
        console.log(e)
    }
}