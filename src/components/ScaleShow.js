import React from 'react';

const ScaleShow = (props) => {
        // console.log(props.scale.name)
    return(
        <div className="card">
            
            <h1>Scale Show Page</h1>
            <h2>{props.scale.name}</h2>
            <h2>{props.scale.notes}</h2>
        </div>
    )
}


export default ScaleShow