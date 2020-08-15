type State = {
    loggedIn: boolean;
    token: string;
}

const initialState: State = {
    loggedIn: false,
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
        case ("userLoggedOut"): {
            return {
                loggedIn: false,
                token: ""
            }
        }
        default: {
            return state;
        }
    }
}