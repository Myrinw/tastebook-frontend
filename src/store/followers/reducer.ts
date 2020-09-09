const initialState = {
    following: [],
    followers: []
}

export default function followersReducer(state = initialState, action) {
    switch (action.type) {


        case "storeFollowers": {
            return {
                ...state,
                followers: [...action.payload]
            }
        }

        case "storeFollowing": {
            return {
                ...state,
                following: [...action.payload]
            }
        }

        case "storeSingleFollowing": {
            return {
                ...state,
                following: [...state.following, action.payload]
            }
        }

        case "removeFollowing": {
            const followingArr = [...state.following];
            const newArr = followingArr.filter(a => a.userId !== action.payload);
            return {
                ...state,
                following: newArr
            }
        }

        default: {
            return state
        }
    }
}