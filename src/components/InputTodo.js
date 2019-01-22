import React, { Component } from 'react';

class InputToDo extends Component {
    state = {
        newToDo: {
            id: "",
            todo: ""
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            newToDo: {
                id: nextProps.editValue.id,
                todo: nextProps.editValue.todo
            }
        }
    }

    addNewToDo = (name, value) => {
        const newToDo = this.state.newToDo
        newToDo[name] = value
        this.setState({ newToDo })
        // console.log(this.state.newToDo)
    }

    submitInputValue = () => {
        const val = this.state.newToDo
        this.props.onSubmit(val)
        this.setState({
            newToDo: {
                id: "",
                todo: ""
            }
        })
        // console.log(this.state.newToDo)
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Input Somethings" value={this.state.newToDo.id} onChange={event => this.addNewToDo('id', event.target.value)} />
                <input type="text" placeholder="Input Somethings" value={this.state.newToDo.todo} onChange={event => this.addNewToDo('todo', event.target.value)} />
                <button onClick={this.submitInputValue}>Submit</button>
            </div>
        );
    }
}

export default InputToDo;