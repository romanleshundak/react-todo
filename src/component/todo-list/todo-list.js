import React, {Component, Fragment} from 'react'
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
        let newTasks = this.state.todoItems.map((item) => {
            if (item.id === id) item.text = value;
            return item
        });
        this.setState({todoItems: newTasks})
    };

    deleteItem = (id) => {
        let newTasks = this.state.todoItems.filter((item) => item.id !== id)
        this.setState({todoItems: newTasks})
    };

    hideTasks = () => {
        this.setState({show: !this.state.show});
    };
    render () {
        const {todoItems, show} = this.state;
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
            <Fragment>
                <div className={show ? "todo-list" : "none"}>
                    <h2>
                        <span>{todoItems.length} TO DO</span>
                        <i className="fas fa-ellipsis-h icon hide" onClick={this.hideTasks} ></i>
                    </h2>
                    <ul>
                        {!todoItems.length ? noTodo : elements}
                    </ul>
                    <form onSubmit={this.addItem} >
                        <input type="text" value={this.state.inputValue} onChange={this.changeValue} className="task-form" />
                        <button type="submit" className="addTask"> Add task</button>
                    </form>
                </div>
                <button onClick={this.hideTasks} className="hideBtn">TODO</button>
            </Fragment>

        )
    }
}