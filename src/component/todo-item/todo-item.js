import React from 'react'
import './todo-item.css'

export default class TodoItem extends React.Component {
    state = {
        show: false,
        value: this.props.itemText
    };

    changeValue = (e) => {
        this.setState({value: e.target.value})
    };

    changeItem = (id) => {
        this.setState({show: !this.state.show}, this.props.changeItem(id, this.state.value))
    };


    render () {
        const {itemText, itemId} = this.props;
        const {show, value} = this.state;

        return (
            <li className="todo-item">
                <span className={show ? "none" : ""}>{itemText}</span>
                <input type="text" value={value}
                       onChange={this.changeValue}
                       onKeyPress={(e) => e.key === 'Enter' ? this.changeItem(itemId) : null}
                       className={!show ? "none" : ""}
                />
                <span>
                        <i className={show ? "far fa-save" : "fas fa-edit"} onClick={()=> this.changeItem(itemId)}></i>
                        <i className="fas fa-trash-alt" onClick={() => this.props.deleteItem(itemId)}></i>
                </span>
            </li>
        )
    }
}