const initialstate: { loading: boolean; postSuccess: boolean; postArray: {}[] } = {
    loading: true,
    postSuccess: false,
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
        case "postedSuccesfull": {
            return {
                ...state,
                postSuccess: true
            }
        }
        case "postedFail": {
            return {
                ...state,
                postSuccess: false
            }
        }
        default: {
            return state
        }
    }
}