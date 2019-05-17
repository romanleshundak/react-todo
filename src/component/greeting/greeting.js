import React, {Component} from 'react'
import './greeting.css'


export default class Greeting extends Component {
    state = {
        inputValue: "",
        minute: new Date().getMinutes(),
        hours: new Date().getHours(),
        showTask: false,
    };

    componentDidMount() {
        setInterval(() => {
            let date = new Date();
            let minute = date.getMinutes();
            let hours = date.getHours();
            if (minute !== this.state.minute) {
                this.setState({
                    minute,
                    hours
                })
            }
        }, 1000)
    }

    changeValue = (e) => {
        this.setState({inputValue: e.target.value})
    };

    submit = (e) => {
        e.preventDefault();
        if (!this.state.inputValue) {
            return
        }
        this.setState({showTask: !this.state.showTask})

    };

    changeTask = () => {
        this.setState({showTask: !this.state.showTask})
    };


    render() {
        const {minute, hours, inputValue, showTask} = this.state;

        let greeting = "";
        if (hours <= 5) {
            greeting = "night"
        } else if (hours <= 11) {
            greeting = "morning"
        } else if (hours <= 18) {
            greeting = "afternoon"
        } else {
            greeting = "evening"
        }

        return (
            <div className="greeting">
                <h2>{`${hours} : ${minute}`}</h2>
                <h3>{`Good  ${greeting}`}, {this.props.name}.</h3>
                <p>{!showTask ? "What is your main focus for today?" : "Todo"}</p>
                <form onSubmit={this.submit} className={showTask  ? "none" : ""}>
                    <input type="text" onChange={this.changeValue}  value={inputValue} />
                </form>
                <p className={!showTask ? "none" : ""} onClick={this.changeTask}>{inputValue}</p>
            </div>
        )
    }
}