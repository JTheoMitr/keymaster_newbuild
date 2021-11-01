import React from 'react'
import ScaleShow from './ScaleShow'
import { connect } from 'react-redux'
import { fetchScales } from '../actions/scaleActions'
import {
    Route,
    Switch
  } from 'react-router-dom';
import Form from './Form'
import SearchBar from './SearchBar'

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

    

    render() {
        // console.log(this.props)
        return(
            
            <div>
                <Switch>
                    <Route exact path='/scales'>
                        <SearchBar allScales={this.props.scales}/>
                    
                    
                    {this.props.loading ? <h1>Loading Scales...</h1> : this.alphabetizeCards()} 
                    </Route>

                    <Route exact path="/scales/new" component={(routeInfo) => <Form routeData={routeInfo} />} />

                    <Route path = "/scales/:id" component={(routeData) => {
                        const id = parseInt(routeData.match.params.id)
                        const s = this.props.scales.find(scale => scale.id === id)
                        // console.log(routeData)
                        return !!s ? <ScaleShow scale={s} /> : <div style={{color: "white"}}>404</div>
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