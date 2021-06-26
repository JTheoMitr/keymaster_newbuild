const url = 'http://localhost:3001/scales'


export const getScales = (scales) => {
    return {type: 'GET_SCALES', payload: scales}
}


export const fetchScales = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            dispatch(getScales(data))
        })

    }
}