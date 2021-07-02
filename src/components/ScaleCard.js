import React from 'react'

const ScaleCard = ({allScales, name, id, description, notes}) => {

        const isMatch = (note) => notes.split('-').includes(note)

        const relatives = allScales.filter(scale => scale.notes.split('-').every(isMatch) && scale.notes[0] !== notes[0])
    
    return(
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{notes}</p>
            
            <p>Relative Scales: {relatives.map(rel => rel.name)}</p>
        </div>
    )
}

export default ScaleCard