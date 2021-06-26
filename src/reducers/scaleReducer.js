export default function scaleReducer(state = {scales: []}, action) {
    switch (action.type) {
        case 'ADD_SCALES': 
        return { scales: action.payload}
        default:
            return state
    }
}