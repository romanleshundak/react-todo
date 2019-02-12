import React, {Component} from 'react'
import './todo-list.css'
import TodoItem from "../todo-item/todo-item";

export default class TodoList extends Component {
    state = {
        show: true,
        todoItems: [
            {text: "read book", id: 1111},
            {text: "learn react", id: 11111},
            {text: "drink coffee", id: 121111}
        ],
        inputValue: ""
    };

    changeValue = (e) => {
        this.setState({inputValue: e.target.value})
    };

    createId() {
        return Math.floor(Math.random() * 200000 )};

    addItem = (e) => {
        e.preventDefault();
        const itemText = this.state.inputValue;
        if (itemText) {
            let newItems = JSON.parse(JSON.stringify(this.state.todoItems));
            newItems.unshift({
                text: itemText,
                id: this.createId()
            });
            this.setState({
                todoItems: newItems,
                inputValue: ""
            })
        }
    };

    changeItem = (id, value) => {
        let newItems = JSON.parse(JSON.stringify(this.state.todoItems));
        let index = newItems.findIndex((item) => item.id === id);
        newItems[index].text = value;
        this.setState({todoItems: newItems})
    };

    deleteItem = (id) => {
        let newItems = JSON.parse(JSON.stringify(this.state.todoItems));
        let index = newItems.findIndex((item) => item.id === id);
        newItems.splice(index, 1);
        this.setState({todoItems: newItems})
    };


    render () {
        const {todoItems} = this.state;
        let elements = todoItems.map(({text, id}) => {
            return (
                <TodoItem itemText={text}
                          itemId={id}
                          deleteItem={this.deleteItem}
                          key={id}
                          changeItem={this.changeItem}/>
            )
        });
        const noTodo =  <p>No todo yet <br/> Add a todo to get started</p>;

        return (
            <div className={"todo-list"}>
                <h2>
                    <span>{todoItems.length} TO DO</span>
                    <i className="fas fa-ellipsis-h" ></i>
                </h2>
                <ul>
                    {!todoItems.length ? noTodo : elements}
                </ul>
                <form onSubmit={this.addItem}>
                    <input type="text" value={this.state.inputValue} onChange={this.changeValue} />
                    <input type="submit" />
                </form>

            </div>
        )
    }
}