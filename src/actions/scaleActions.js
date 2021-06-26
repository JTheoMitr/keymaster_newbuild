const url = 'http://localhost:3001/scales'

export const fetchScales = () => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })

}