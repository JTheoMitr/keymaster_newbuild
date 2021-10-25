import React from 'react'
import { Link } from 'react-router-dom';

const ScaleCard = ({allScales, name, id, description, notes}) => {

        const isMatch = (note) => notes.split('-').includes(note)

        const relatives = allScales.filter(scale => scale.notes.split('-').every(isMatch) && ((scale.notes.split('-')[0] === notes.split('-')[2]) || (scale.notes.split('-')[0] === notes.split('-')[5])))

        const parallels = allScales.filter(scale => scale.notes.split('-')[0] === notes.split('-')[0] && scale.notes.split('-')[1] === notes.split('-')[1] && scale.notes.split('-')[2] !== notes.split('-')[2] && scale.notes.split('-')[3] === notes.split('-')[3] && scale.notes.split('-')[5] !== notes.split('-')[5] && scale.notes.split('-')[6] !== notes.split('-')[6])
    
    return(
        <div className="card">
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>{notes}</h3>

            { // check if relative scales exist
                (relatives.length > 0)
                ? <p>Relative Scales: {relatives.map(rel => <Link key={rel.id} to={`/scales/${rel.id}`}>{rel.name}</Link>)}</p> 
                : <p></p>
            }

            { // check if parallel scales exist
                (parallels.length > 0)
                ? <p>Parallel Scales: {parallels.map(par => par.name)}</p>
                : <p></p>
            }

            { // Confirm scale type and display link to examples
                (name.includes('Harmonic Major'))
                ? <p><a href='https://musictales.club/article/9-beatles-songs-combine-harmonic-major-ionian-mode' target="_blank" rel="noreferrer">Songs in Harmonic Major</a></p>
                : (name.includes('Harmonic Minor'))
                ? <p><a href='https://www.youtube.com/watch?v=-amnre-0I3w' target="_blank" rel="noreferrer">Songs in Harmonic Minor</a></p>
                : (name.includes('Melodic Minor'))
                ? <p><a href='https://www.youtube.com/watch?v=-8CLp1uSFoA' target="_blank" rel="noreferrer">Songs in Melodic Minor</a></p>
                : (name.includes('Major') && !(name.includes('Harmonic')))
                ? <p><a href='https://www.youtube.com/playlist?list=PLBC7CA504C2931E3E' target="_blank" rel="noreferrer">Songs in the Major key</a></p>
                : <p></p>
            }
            
            {/* <div><Link to="www.youtube.com">TUBE</Link></div>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">tube</a> */}

            
        </div>
    )
}

export default ScaleCard