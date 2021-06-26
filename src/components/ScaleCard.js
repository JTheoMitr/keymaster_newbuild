import React from 'react'

const ScaleCard = ({name, id, description, notes}) => {
    return(
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{notes}</p>
        </div>
    )
}

export default ScaleCard