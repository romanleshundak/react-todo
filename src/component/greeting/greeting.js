import React, {Component} from 'react'
import './greeting.css'


export default class Greeting extends Component {
    state = {
        inputValue: "",
        minute: new Date().getMinutes(),
        hours: new Date().getHours(),
        showTask: false,
        question: "What is your main focus for today?"
    };

    componentDidMount() {
        setInterval(() => {
            let date = new Date();
            let minute = date.getMinutes();
            let hours = date.getHours();
            this.setState({
                minute,
                hours
            })
        }, 10000)
    }

    changeValue = (e) => {
        this.setState({inputValue: e.target.value})
    };

    submit = (e) => {
        e.preventDefault();
        if (!this.state.inputValue) {
            return
        }
        this.setState(({showTask}) => {
            return {
                showTask: !showTask,
                question: "TODAY"
            }
        })

    };

    changeTask = () => {
        this.setState((state) => {
            return {
                showTask: !state.showTask,
                question: "What is your main focus for today?"

            }
        })
    };


    render() {
        const {minute, hours, inputValue, showTask, question} = this.state;
        let classNameTask = "";
        let classNameForm = "";
        let greeting = "Good ";
        if (hours <= 5) {
            greeting += "night"
        } else if (hours <= 11) {
            greeting += "morning"
        } else if (hours <= 18) {
            greeting += "afternoon"
        } else {
            greeting += "evening"
        }

        if (!showTask) {
            classNameTask += " none"
        } else if (showTask) {
            classNameForm += " none"
        }


        return (
            <div className="greeting">
                <h2>{`${hours} : ${minute}`}</h2>
                <h3>{greeting}, {this.props.name}.</h3>
                <p>{question}</p>
                <form onSubmit={this.submit} className={classNameForm}>
                    <input type="text" onChange={this.changeValue}  value={inputValue} />
                </form>
                <p className={classNameTask} onClick={this.changeTask}>{inputValue}</p>
            </div>
        )
    }
}