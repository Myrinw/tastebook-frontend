const initialState = {
};

export default function userSliceReducer(state = initialState, action: { type: string; payload: any }) {
    switch (action.type) {
        case "storeUser": {
            return action.payload
        }
        default: {
            return state;
        }
    }
}