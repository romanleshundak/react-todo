import React, {Component} from 'react';
import Greeting from "../greeting/greeting";
import Login from "../login/login";
import './app.css'
import TodoList from "../todo-list/todo-list";

export default class App extends Component {
    state = {
        userName: "",
    };

    getName = (name) => {
        this.setState({userName: name})
    };

    render() {
        const {userName} = this.state;
        return (
            !userName ? <Login getName={this.getName}/> :
            <div className="app">
                <Greeting name={userName}/>
                <div className="main-content">
                    <TodoList/>
                </div>
            </div>
        )
    }


}
