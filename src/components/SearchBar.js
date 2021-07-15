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
        console.log(this.state.name.toUpperCase())
            const searchedScales = this.props.allScales.filter(scale => scale.name.charAt(0).toUpperCase().includes(this.state.name.charAt(0).toUpperCase()) && scale.name.charAt(1).toUpperCase().includes(this.state.name.charAt(1).toUpperCase()) && scale.name.charAt(3).toUpperCase().includes(this.state.name.charAt(3).toUpperCase()) && scale.name.charAt(4).toUpperCase().includes(this.state.name.charAt(4).toUpperCase()))
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
                <input onChange={this.handleChange} type="text" name="name" placeholder="Search By Scale Name" value={this.state.name}></input>
                {this.searchScales()}
                
            </div>
        )
    }

}

export default SearchBar