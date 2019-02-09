import React, {Component} from 'react'
import "./login.css"

export default class Login extends Component{
    state = {
        name: ""
    };
    getFormValue = (e) => {
        console.log(this.state.name)
        e.preventDefault()
        this.props.getName(this.state.name)

    };
    inputChangeValue = (e) => {
        const name = e.target.value;
        this.setState((state) => {
            return {name}
        })
    };
    render () {
        return (
            <form className="login" onSubmit={this.getFormValue}>
                <label>Enter your name:</label>
                <input type="text" onChange={this.inputChangeValue} value={this.state.value}/>
                <input type="submit" value="login"/>
            </form>
        )
    }

}