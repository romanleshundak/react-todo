import React, {Component} from 'react'
import "./login.css"

export default class Login extends Component{
    state = {
        name: ""
    };
    getFormValue = (e) => {
        e.preventDefault();
        this.props.getName(this.state.name)

    };
    inputChangeValue = (e) => {
        const name = e.target.value;
        this.setState({name})
    };
    render () {
        return (
            <form className="login" onSubmit={this.getFormValue}>
                <label>Enter your name:</label>
                <input type="text" onChange={this.inputChangeValue} value={this.state.value}/>
                <button type="submit" className="login--btn">Login</button>
            </form>
        )
    }

}