import React, {Component} from 'react';
import Greeting from "../greeting/greeting";
import Login from "../login/login";
import './app.css'
import TodoList from "../todo-list/todo-list";

export default class App extends Component {
    key = 99;
    state = {
        userName: "",
        todoItems: [
            {text: "read book", key: 1111},
            {text: "learn react", key: 11111},
            {text: "drink coffee", key: 121111}
        ]
        // minute: new Date().getMinutes(),

    };

    addItem = (text) => {
        console.log(text)
        let newItems = this.state.todoItems.slice();
        newItems.unshift({
            text: text,
            key: ++this.key
        });
        this.setState({todoItems: newItems})
    };

    changeItem = (key, value) => {
        let newItems = this.state.todoItems.slice();
        let index = newItems.findIndex((item) => item.key === key);
        newItems[index].text = value;
        console.log(value);
        this.setState({todoItems: newItems})
    };

    deleteItem = (key) => {
        let newItems = this.state.todoItems.slice();
        let index = newItems.findIndex((item) => item.key === key);
        newItems.splice(index, 1);
        this.setState({todoItems: newItems})
    };

    getName = (name) => {
        this.setState({userName: name})
    };
    // !!!!!!!!!! доробити згортання !!!!!!!!!!!
    // onShow = () => {
    //     this.setState()
    // }

    render() {
        const {userName, todoItems} = this.state;
        if (!userName) {
            return <Login getName={this.getName}/>
        }
        return (
            <div className="app">
                <Greeting name={userName}/>
                <div className="main-content">
                    <TodoList todoItems={todoItems}
                              addItem={this.addItem}
                              deleteItem={this.deleteItem}
                              changeItem={this.changeItem}
                              showList={this.onShow}
                    />
                    <p>Todo</p>
                </div>

            </div>
        )
    }


}
