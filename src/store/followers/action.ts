import {API_URL} from '../../config';
import axios from 'axios';

function storeFollowing(following){
    return {
        type: "storeFollowing",
        payload: following
    }
}

export const following = async(dispatch, getState) => {
try{
    const allFollowing = await axios.get(`${API_URL}/followers/following/${getState().auth.me.id}`);
    dispatch(storeFollowing(allFollowing.data));
}catch(e){
    console.log(e);
}
}

export const follower = async(dispatch, getState) => {
    try{
        const allFollowers = await axios.get
    }catch(e){
        console.log(e);
    }
}