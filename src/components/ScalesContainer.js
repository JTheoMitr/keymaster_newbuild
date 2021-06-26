import React from 'react'
import ScaleCard from './ScaleCard'
import Form from './Form'
import { connect } from 'react-redux'
import { fetchScales } from '../actions/scaleActions'

class ScalesContainer extends React.Component {

    componentDidMount() {
        
        fetchScales()
        
    }

    render() {
    
        return(
            <div>
                <h1>Scales Container</h1>
            </div>
        )
    }

}

export default connect()(ScalesContainer)