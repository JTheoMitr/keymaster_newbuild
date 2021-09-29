import React from 'react'
import ScaleCard from './ScaleCard'

class SearchBar extends React.Component {

    state = {
        name: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    

    searchScales = () => {

        console.log(this.state.name.toUpperCase().split('-'))
         
            const searchedScales = 

            // check for value(s) in search params, otherwise display all scales
            
            this.props.allScales.filter(scale => 

                this.state.name.length > 0 ?

                    this.state.name.toUpperCase().split('-').every(elem =>
                        
                        (scale.notes.toUpperCase().split('-').includes(elem)) || elem === "" ) :

                    !!scale.name)


            return searchedScales.map(scale => 

            
                <div key={scale.id * 100} >
                <ScaleCard 
                id={scale.id} 
                key={scale.id} 
                name={scale.name} 
                notes={scale.notes} 
                description={scale.description} 
                allScales={this.props.allScales}

                />
                <div key={scale.id * 10} className="parallax"></div>
                </div>)
    }

    render() {
        return(
            <div>
                <input onChange={this.handleChange} type="text" name="name" placeholder="Search Notes in Dash Format (A-B-C#-D etc)" value={this.state.name}></input>
                {this.searchScales()}
                
            </div>
        )
    }

}

export default SearchBar