export default function scaleReducer(state = {scales: []}, action) {
    switch (action.type) {
        case 'ADD_SCALE': 
        return { ...state, scales: [...state.scales, action.payload] }
        default:
            return state
    }
}