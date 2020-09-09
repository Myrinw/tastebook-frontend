import { API_URL } from '../../config';
import axios from 'axios';
import { nextTick } from 'process';

function storeFollowing(following) {
    return {
        type: "storeFollowing",
        payload: following
    }
}
function storeFollowers(followers) {
    return {
        type: "storeFollowers",
        payload: followers
    }
}

function removeFollowing(userId) {
    return {
        type: "removeFolowing",
        payload: userId
    }
}

function storeSingleFollowing(userId) {
    return {
        type: "storeSingleFollowing",
        payload: userId
    }
}

export const following = async (dispatch, getState) => {

    try {
        const allFollowing = await axios.get(`${API_URL}/followers/following/${getState().auth.me.id}`);
        dispatch(storeFollowing(allFollowing.data));
    } catch (e) {
        console.log(e);
    }

}

export const follower = async (dispatch, getState) => {
    try {
        const allFollowers = await axios.get(`${API_URL}/followers/${getState().auth.me.id}`);
        dispatch(storeFollowers(allFollowers.data));
    } catch (e) {
        console.log(e);
    }
}

export const postFollowing = (userId) => async (dispatch, getState) => {
    try {
        const newFollower = await axios.post(`${API_URL}/followers`, {
            userId,
            followerId: getState().auth.me.id,
        }, {
            headers: { authorization: `Bearer ${getState().auth.token}` }
        });
        dispatch(storeSingleFollowing(newFollower.data));

    } catch (e) {
        console.log(e);
    }
}


export const deleteFollowing = (userId) => async (dispatch, getState) => {
    try {
        const deltingFollowing = await axios.delete(`${API_URL}/followers`, {
            headers: {
                authorization: `Bearer ${getState().auth.token}`
            },
            data: {
                userId,
                followerId: getState().auth.me.id,
            }
        })
    } catch (e) {
        console.log(e)
    }
}