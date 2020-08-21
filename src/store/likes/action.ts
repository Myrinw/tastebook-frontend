import axios from 'axios';
import { API_URL } from '../../config';

function storeLike(post) {
    return {
        type: "storeSingleLike",
        payload: post
    }
}

function storeAllLikes(likes) {
    return {
        type: "storeLikes",
        payload: likes,
    }
}

export const fetchLikes = () => async (dispatch, getState) => {
    console.log('fetch lieks')
    try {
        const user = await axios.post(`${API_URL}/users/me`, {
            token: localStorage.getItem('token')
        });
        const id = user.data.id;
        const allLikes = await axios.get(`${API_URL}/likes/${id}`);
        console.log(allLikes);
        dispatch(storeAllLikes(allLikes.data));
    } catch (e) {
        console.log(e);
    }
}

export const postALike = (postId: number) => async (dispatch: any, getState: any) => {

    try {

        const newLike = await axios.post(`${API_URL}/likes`, {
            postId,
            userId: getState().auth.me.id,
        },
            {
                headers: {
                    authorization: `Bearer ${getState().auth.token}`
                }
            });
        console.log(newLike);

        dispatch(storeLike(newLike.data));
    } catch (e) {
        console.log(e);
    }
}

function storeRemovedLike(postId) {
    return {
        type: "removeLike",
        payload: postId,
    }
}

export const removeALike = postId => async (dispatch: any, getState: any) => {
    dispatch(storeRemovedLike(postId))
    try {
        const deleteLike = await axios.delete(`${API_URL}/likes/delete`, {
            headers: {
                authorization: `Bearer ${getState().auth.token}`
            },
            data: {
                postId,
                userId: getState().auth.me.id
            }
        },
        );
        console.log(deleteLike);
    } catch (e) {
        console.log(e);
    }
};