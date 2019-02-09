import React, {Component} from 'react'
import './todo-list.css'
import TodoItem from "../todo-item/todo-item";

export default class TodoList extends Component {

    state = {
        show: true,
        inputValue: ""
    };

    changeValue = (e) => {
        this.setState({inputValue: e.target.value})
    };

    addItem = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.inputValue);
        this.setState({inputValue: ""})
    };


    render () {
        const {todoItems, deleteItem, changeItem, onShow} = this.props;
        let mainClassName = "todo-list";
        if (!this.state.show) {
            mainClassName += " none"
        }
        let elements = todoItems.map(({text, key}) => {
            return (
                <TodoItem itemText={text}
                          itemKey={key}
                          deleteItem={deleteItem}
                          key={key}
                          changeItem={changeItem}/>
            )
        });

        if (!todoItems.length) {
            elements = ( <p>No todo yet <br/> Add a todo to get started</p>)
        }
        return (
            <div className={mainClassName}>
                <h2>
                    <span>{todoItems.length} TO DO</span>
                    <i className="fas fa-ellipsis-h" onClick={onShow}></i>
                </h2>
                <ul>
                    {elements}
                </ul>
                <form onSubmit={this.addItem}>
                    <input type="text" value={this.state.inputValue} onChange={this.changeValue} />
                    <input type="submit" />
                </form>

            </div>
        )
    }
}