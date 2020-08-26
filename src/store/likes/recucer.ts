const initialState = {
    loading: false,
    likes: []
}

export default function likesReducer(state = initialState, action: { payload: any, type: string }) {
    switch (action.type) {
        case "storeLikes": {
            return {
                ...state,
                likes: [...action.payload],
            }
        }
        case "storeSingleLike": {
            return {
                ...state,
                likes: [...state.likes, action.payload]
            }
        }
        case "removeLike": {
            const likesArr = [...state.likes];
            const newArr = likesArr.filter(a => a.userId !== action.payload);
            return {
                ...state,
                likes: newArr,
            }
        }
        default: {
            return state
        }
    }
}