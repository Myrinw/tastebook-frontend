const initialstate: { loading: boolean; posts: {}[] } = {
    loading: false,
    posts: []
}

export function postReducer(state = initialstate, action: any) {
    switch (action.type) {
        case "addPosts": {
            return {
                ...state,
                posts: action.payload
            }
        }
        default: {
            return state
        }
    }
}