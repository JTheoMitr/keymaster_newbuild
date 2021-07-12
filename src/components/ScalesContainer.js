import React from 'react'
import ScaleCard from './ScaleCard'
import ScaleShow from './ScaleShow'
import { connect } from 'react-redux'
import { fetchScales } from '../actions/scaleActions'
import {
    Route,
    Switch
  } from 'react-router-dom';
import Form from './Form'

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

    


    renderScaleCards = () => {

        this.alphabetizeCards()
        return this.props.scales.map(scale => 

            
                <div key={scale.id * 100} >
                <ScaleCard 
                id={scale.id} 
                key={scale.id} 
                name={scale.name} 
                notes={scale.notes} 
                description={scale.description} 
                allScales={this.props.scales}

                />
                <div key={scale.id * 10} className="parallax"></div>
                </div>)

                

                
    }

    render() {
        // console.log(this.props)
        return(
            
            <div>
                <Switch>
                    <Route exact path='/scales'>
                    <div className="card"><h1>All Scales:</h1></div>
                    
                    {this.props.loading ? <h1>Loading Scales...</h1> : this.renderScaleCards()} 
                    </Route>

                    <Route exact path="/scales/new" component={(routeInfo) => <Form routeData={routeInfo} />} />

                    <Route path = "/scales/:id" component={(routeData) => {
                        const id = parseInt(routeData.match.params.id)
                        const s = this.props.scales.find(scale => scale.id === id)
                        // console.log(routeData)
                        return !!s ? <ScaleShow scale={s} /> : <div>404</div>
                    }
                    } />
                </Switch>
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