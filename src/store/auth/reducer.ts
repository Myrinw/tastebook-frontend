type State = {
    loggedIn: boolean;
    me: {}
    token: string;
    signedUp: boolean
    singleUser: {}
}

const initialState: State = {
    loggedIn: false,
    me: {},
    token: "",
    signedUp: false,
    singleUser: {}
}

export default function authReducer(state: State = initialState, action: { type: string; payload: string }) {
    switch (action.type) {
        case ("userLoggedIn"): {
            return {
                ...state,
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
        case "userSignedUp": {
            return {
                ...state,
                signedUp: true
            }
        }

        case "storeSingleUser": {
            return {
                ...state,
                singleUser: action.payload
            }
        }
        default: {
            return state;
        }
    }
}