import axios from 'axios';
import { API_URL } from '../../config';

function storePosts(posts: []) {
    return {
        type: "addPosts",
        payload: posts
    }
}

export const fetchPosts = function () {
    return async function (dispatch: any, getState: any) {
        const posts = await axios.get(`${API_URL}/posts`);
        console.log(posts);
        dispatch(storePosts(posts.data))
    }
}