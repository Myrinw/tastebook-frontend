import axios from 'axios';
import { API_URL } from '../../config';

function loadPosts() {
    return {
        type: "loadingPosts"
    }
}

function storePosts(posts: []) {
    return {
        type: "addPosts",
        payload: posts
    }
}

export const fetchPosts = function () {
    return async function (dispatch: any, getState: any) {
        dispatch(loadPosts());
        const posts = await axios.get(`${API_URL}/posts`);
        dispatch(storePosts(posts.data));
    }
}

export const fetch3posts = function () {
    return async function (dispatch: any) {
        const posts = await axios.get(`${API_URL}/posts/3`);

    }
}