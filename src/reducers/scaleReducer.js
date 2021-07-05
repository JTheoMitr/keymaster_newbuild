export default function scaleReducer(state = { scales: [], loading: false }, action) {
    switch (action.type) {
        case 'GET_SCALES': 
            return { ...state, scales: action.payload, loading: false }
        case 'ADD_SCALE':
            return { ...state, scales: [...state.scales, action.payload] }
        case 'LOADING':
            return { ...state, loading: true }
        default:
            return state
    }
}

       