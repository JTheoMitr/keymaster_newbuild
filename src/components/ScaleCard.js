import React from 'react'

const ScaleCard = ({allScales, name, id, description, notes}) => {

        const isMatch = (note) => notes.split('-').includes(note)

        const relatives = allScales.filter(scale => scale.notes.split('-').every(isMatch) && scale.notes[0] !== notes[0])

        const parallels = allScales.filter(scale => scale.notes.split('-')[0] === notes.split('-')[0] && scale.notes.split('-')[1] === notes.split('-')[1] && scale.notes.split('-')[2] !== notes.split('-')[2] && scale.notes.split('-')[3] === notes.split('-')[3] && scale.notes.split('-')[5] !== notes.split('-')[5] && scale.notes.split('-')[6] !== notes.split('-')[6])
    
    return(
        <div className="card">
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>{notes}</h3>
            
            <p>Relative Scales: {relatives.map(rel => rel.name)}</p>
            <p>Parallel Scales: {parallels.map(par => par.name)}</p>
        </div>
    )
}

export default ScaleCard