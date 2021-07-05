import React from 'react';
import { connect } from 'react-redux'
import {createScale} from '../actions/scaleActions'

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
        this.props.createScale(this.state)
        this.setState({
            name: "",
            notes: "",
            description: ""
        })
        this.props.history.push("/scales")
    }

    render() {
        return(
            <div className="card">
                <h2>New Scale</h2>
                <form onSubmit={this.handleSubmit}>

                <input onChange={this.handleChange} type="text" name="name" placeholder="Name" value={this.state.name}></input>
                <br></br>
                <br></br>
                <input onChange={this.handleChange} type="text" name="notes" placeholder="Notes (eg C-D-E-F-G-A)" value={this.state.notes}></input>
                <br></br>
                <br></br>
                <input onChange={this.handleChange} type="text" name="description" placeholder="Description" value={this.state.description}></input>
                <br></br>
                <br></br>
                <input type="submit"></input>
                <br></br>
                <br></br>
                </form>
            </div>
        )
    }
}

export default connect(null, {createScale})(Form);