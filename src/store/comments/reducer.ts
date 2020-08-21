const initialState = {
    loading: false,
    comments: [],
}

export default function commentsReducer(state = initialState, action) {
    switch (action.payload) {
        case "storeComments": {
            return {
                ...state,
                comments: action.payload,
            }
        }
        default: {
            return state
        }
    }
}