export default function scaleReducer(state = {scales: []}, action) {
    switch (action.type) {
        case 'GET_SCALES': 
        return { scales: action.payload}
        default:
            return state
    }
}

        // case 'ADD_SCALE': 
        // return { ...state, scales: [...state.scales, action.payload] }