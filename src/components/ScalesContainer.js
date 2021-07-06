import React from 'react'
import ScaleCard from './ScaleCard'
import { connect } from 'react-redux'
import { fetchScales } from '../actions/scaleActions'

class ScalesContainer extends React.Component {

    componentDidMount() {
        
        this.props.fetchScalesHere()
        
    }

    alphabetizeCards = () => {
        this.props.scales.sort(function(a,b) {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();

            if (nameA < nameB) {
                return -1
            }

            if (nameA > nameB) {
                return 1
            }

            return 0
        })
    }

    // alphabetizeCards = () => {
    //     this.props.scales.sort(function(a, b) {
    //         return a.name - b.name
    //     })
    // }

    


    renderScaleCards = () => {

        this.alphabetizeCards()
        return this.props.scales.map(scale => 

            
                <div>
                <ScaleCard 
                id={scale.id} 
                key={scale.id} 
                name={scale.name} 
                notes={scale.notes} 
                description={scale.description} 
                allScales={this.props.scales}

                />
                <div className="parallax"></div>
                </div>)

                

                
    }

    render() {
    
        return(
            <div>
                <div className="card"><h1>All Scales:</h1></div>
                {/* <div className='parallax'></div> */}
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