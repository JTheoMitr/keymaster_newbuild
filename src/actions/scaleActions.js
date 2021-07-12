const url = 'http://localhost:3001/scales'


export const getScales = (scales) => {
    return {type: 'GET_SCALES', payload: scales}
}

export const addScale = (scale) => {
    return {type: 'ADD_SCALE', payload: scale}
}


export const fetchScales = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            dispatch(getScales(data))
        })

    }
}

export const createScale = (scale) => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(scale)
        }

        fetch(url, configObj)
        .then(resp => resp.json())
        .then(json => {
            const newScale = json
            debugger
            dispatch(addScale(newScale))
        })
    }
}