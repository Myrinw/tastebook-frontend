const initialstate: { loading: boolean; postArray: {}[] } = {
    loading: true,
    postArray: []
}

export default function postReducer(state = initialstate, action: any) {
    switch (action.type) {
        case "loadingPosts": {
            return {
                ...state,
                loading: true
            }
        }
        case "addPosts": {
            return {
                loading: false,
                postArray: action.payload
            }
        }
        default: {
            return state
        }
    }
}