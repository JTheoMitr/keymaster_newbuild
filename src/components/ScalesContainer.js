import React from 'react'
import ScaleCard from './ScaleCard'
import Form from './Form'
import { connect } from 'react-redux'
import { fetchScales } from '../actions/scaleActions'

class ScalesContainer extends React.Component {

    componentDidMount() {
        
        this.props.fetchScalesHere()
        
    }

    renderScaleCards = () => {
        return this.props.scales.map(scale => <ScaleCard id={scale.id} key={scale.id} name={scale.name} notes={scale.notes} description={scale.description}/>)
    }

    render() {
    
        return(
            <div>
                {this.renderScaleCards()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {scales: state.scales}
}

const mapDispatchToProps = (dispatch) => {
    return { fetchScalesHere: () => { dispatch(fetchScales()) }}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScalesContainer)