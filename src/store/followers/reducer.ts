const initialState = {
    following: [],
    followers: []
}

export default function followersReducer(state = initialState, action) {
    switch (action.type) {
        case "storeFollowing": {
            return {
                ...state,
                following: [...action.payload]
            }
        }

        case "storeFollowers": {
            return {
                ...state,
                followers: [...action.payload]
            }
        }

        default: {
            return state
        }
    }
}