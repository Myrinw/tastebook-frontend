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
        console.log(posts.data);
        try {
            dispatch(storePosts(posts.data));

        } catch (e) {
            console.log(e);
        }
    }
}

export const fetch3posts = function () {
    return async function (dispatch: any) {
        const posts = await axios.get(`${API_URL}/posts/3`);

    }
}

function postAction() {
    return {
        type: "postedSuccesfull",
    }
}

function postFailed() {
    return {
        type: "postedFail"
    }
}

export function PostAPost(title: string, text: string, url: string) {
    return async function (dispatch: any, getState: any) {

        const token = getState().auth.token;
        console.log(token);
        try {
            const post = await axios.post(`${API_URL}/posts`, {
                title,
                text,
                image: url,
                userId: getState().auth.me.id,
            },
                {
                    headers: { authorization: `Bearer ${getState().auth.token}` }
                });
            console.log(post);
            if (post) {
                dispatch(postAction());
            } else {
                dispatch(postFailed());
            }

        } catch (e) {
            console.log(e);
        }

    }
}

// export const fetchSinglePost = function(id:number){
//     return async (dispatch:any) => {
//         try{
//             const post = await axios.get(`${API_URL}/posts/${id}`);

//         }
//     }
// }