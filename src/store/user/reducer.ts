const initialState = {
    logedIn: false,
    token: "",
    username: "",
    email: "",
    bio: "",
    diet: "",
    followers: 0,
    following: 0,


};

export default function userSliceReducer(state = initialState, action: { type: string; payload: any }) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}