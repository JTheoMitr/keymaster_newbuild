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

            // check for number of characters in search params, otherwise display all scales
            
            this.props.allScales.filter(scale => 

                !!(this.state.name.toUpperCase().split('-')[7]) ? 

                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[7]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[6]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[5]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[4]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[3]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[2]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[1]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[0]) :

                !!(this.state.name.toUpperCase().split('-')[6]) ? 

                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[6]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[5]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[4]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[3]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[2]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[1]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[0]) :

                !!(this.state.name.toUpperCase().split('-')[5]) ? 

                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[5]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[4]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[3]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[2]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[1]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[0]) :

                !!(this.state.name.toUpperCase().split('-')[4]) ? 

                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[4]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[3]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[2]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[1]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[0]) :

                !!(this.state.name.toUpperCase().split('-')[3]) ? 

                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[3]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[2]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[1]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[0]) :

                !!(this.state.name.toUpperCase().split('-')[2]) ? 

                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[2]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[1]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[0]) :


                !!(this.state.name.toUpperCase().split('-')[1]) ? 

                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[0]) && 
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[1]) :

                !!(this.state.name.toUpperCase().split('-')[0]) ? 
                
                scale.notes.split('-').includes(this.state.name.toUpperCase().split('-')[0]) :

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
                <input onChange={this.handleChange} type="text" name="name" placeholder="Search By Scale Name" value={this.state.name}></input>
                {this.searchScales()}
                
            </div>
        )
    }

}

export default SearchBar