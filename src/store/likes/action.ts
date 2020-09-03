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

export const fetchLikes = (id) => async (dispatch, getState) => {
    console.log('fetch lieks')
    try {
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

function storeRemovedLike(userId) {
    return {
        type: "removeLike",
        payload: userId,
    }
}

export const removeALike = (userId, postId) => async (dispatch: any, getState: any) => {
    try {
        const deleteLike = await axios.delete(`${API_URL}/likes/delete`, {
            headers: {
                authorization: `Bearer ${getState().auth.token}`
            },
            data: {
                postId,
                userId,
            }
        },
        );
        dispatch(storeRemovedLike(userId));

        console.log(deleteLike);
    } catch (e) {
        console.log(e);
    }
};