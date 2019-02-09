import React from 'react'
import './todo-item.css'

export default class TodoItem extends React.Component {
    state = {
        // itemId: this.props.itemid,
        show: false,
        value: this.props.itemText
    };

    changeValue = (e) => {
        this.setState({value: e.target.value})
    };

    changeItem = (id) => {
        // console.log(id);
        this.props.changeItem(id, this.state.value);
        this.setState((state) => {
            return {show: !state.show}
        })
    };

    // componentDidUpdate(prevProps) {
    //     if (prevProps.itemText !== this.props.itemText) {
    //         console.log('Update')
    //     }
    //
    // }

    submit = (e) => {
        e.preventDefault();
        this.changeItem(this.props.itemKey)
    };

    render () {
        const {itemText, itemKey} = this.props;
        const {show, value} = this.state;

        let inputClassName = "";
        let textClassName = "";
        let iconClassName = "fas fa-edit";
        if (!show){
            inputClassName += " none";
            iconClassName = "fas fa-edit"
        } else if (show) {
            textClassName += " none";
            iconClassName = "far fa-save"
        }
        return (
            <li className="todo-item">
                <span className={textClassName}>{itemText}</span>
                <form className={inputClassName} onSubmit={this.submit}>
                    <input type="text" value={value} onChange={this.changeValue}/>
                </form>
                <span>
                            <i className={iconClassName} onClick={()=> this.changeItem(itemKey)}></i>
                            <i className="fas fa-trash-alt" onClick={() => this.props.deleteItem(itemKey)}></i>
                    </span>
            </li>
        )
    }
}