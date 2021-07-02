import React from 'react'
import ScaleCard from './ScaleCard'
import { connect } from 'react-redux'
import { fetchScales } from '../actions/scaleActions'

class ScalesContainer extends React.Component {

    componentDidMount() {
        
        this.props.fetchScalesHere()
        
    }

    // relativeScales= () => {
    //     const newScales = this.props.scales.filter(scale => scale.notes.includes("F"))
    //     return newScales.map(ns => {
    //         return <p>{ns.name},</p>
    //     }
    //     )
    // }

    


    renderScaleCards = () => {


        return this.props.scales.map(scale => 

            

                <ScaleCard 
                id={scale.id} 
                key={scale.id} 
                name={scale.name} 
                notes={scale.notes} 
                description={scale.description} 
                allScales={this.props.scales}

                />)

                
    }

    render() {
    
        return(
            <div className="basicStyling">
                {this.props.loading ? <h1>Loading Scales...</h1> : this.renderScaleCards()} 
                {/* {this.props.loading ? <h1>Loading Scales...</h1> : this.relativeScales()} */}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return { scales: state.scales,
             loading: state.loading
        }
}

const mapDispatchToProps = (dispatch) => {
    return { fetchScalesHere: () => { dispatch(fetchScales()) }}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScalesContainer)