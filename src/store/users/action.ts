import axios from 'axios';
import { API_URL } from '../../config';

function storeUsers(users) {
    return {
        type: "storeUsers",
        payload: users
    }
}

export const fetchUsers = async (dispatch, getState) => {


    try {

        const users = await axios.get(`${API_URL}/users`);
        console.log(users.data)
        dispatch({ type: "storeAllUsers", payload: users.data });
    } catch (e) {
        console.log('in thunk');

        console.log(e);
    }

}

export const sendMail = (text: string, email) => async (dispatch: any, getState: any) => {
    try {
        const mail = await axios.post(`${API_URL}/mail`, {
            email,
            text,
        },
            {
                headers: { authorization: `Bearer ${getState().auth.token}` }
            });

    } catch (e) {
        console.log(e);
    }
}
