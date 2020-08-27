import axios from 'axios';
import { API_URL } from '../../config';

function storeComments(comments) {
    return {
        type: "storeComments",
        payload: comments
    }
}

function storeSingleComment(comment) {
    return {
        type: "storeSingleComment",
        payload: comment,
    }
}

export const fetchComments = id => async (dispatch, getstate) => {
    try {
        const comments = await axios.get(`${API_URL}/comments/${id}`);
        console.log(comments.data);
        dispatch(storeComments(comments.data));

    } catch (e) {
        console.log(e);
    }
}

export function postComment(comment: string, postId: number) {
    return async function (dispatch: any, getState: any) {
        try {
            const newComment = await axios.post(`${API_URL}/comments`, {
                text: comment,
                userId: getState().auth.me.id,
                postId,
            },
                {
                    headers: {
                        authorization: `Bearer ${getState().auth.token}`
                    }
                });
            dispatch(storeSingleComment(newComment.data));
        } catch (e) {
            console.log(e);
        }
    }
}