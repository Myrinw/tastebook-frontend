type State = {
    loggedIn: boolean;
    me: {}
    token: string;
}

const initialState: State = {
    loggedIn: false,
    me: {},
    token: "",
}

export default function authReducer(state: State = initialState, action: { type: string; payload: string }) {
    switch (action.type) {
        case ("userLoggedIn"): {
            return {
                loggedIn: true,
                token: action.payload
            }
        }
        case ("usersProfile"): {
            return {
                ...state,
                me: action.payload
            }
        }
        case ("userLoggedOut"): {
            return initialState
        }
        default: {
            return state;
        }
    }
}