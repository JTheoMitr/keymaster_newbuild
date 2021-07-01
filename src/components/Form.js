import React from 'react';

class Form extends React.Component {

    state = {
        name: "",
        notes: "",
        description: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // this.props.addScale(this.state)
        this.setState({
            name: "",
            notes: "",
            description: ""
        })
    }

    render() {
        return(
            <div className="basicStyling">
                <form onSubmit={this.handleSubmit}>

                <input onChange={this.handleChange} type="text" name="name" placeholder="Name" value={this.state.name}></input>
                <br></br>
                <br></br>
                <input onChange={this.handleChange} type="text" name="notes" placeholder="Notes (eg C-D-E-F-G-A)" value={this.state.notes}></input>
                <br></br>
                <br></br>
                <input onChange={this.handleChange} type="text" name="description" value={this.state.description}></input>
                <br></br>
                <br></br>
                <input type="submit"></input>

                </form>
            </div>
        )
    }
}

export default Form;