const initialState = {
    loading: false,
    comments: [],
}

export default function commentsReducer(state = initialState, action) {

    switch (action.type) {
        case "storeComments": {
            return {
                ...state,
                comments: action.payload,
            }
        }
        case "storeSingleComment": {
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        }
        default: {
            return state
        }
    }
}