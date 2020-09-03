const initialState = []

export default function usersReducer(state = initialState, action) {

    switch (action.type) {
        case "storeAllUsers": {
            console.log('rightt', action.payload);

            return [...action.payload]
        }

        default: {
            return state
        }
    }
}