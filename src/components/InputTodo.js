import React, { Component } from "react"

class InputToDo extends Component {
  state = {
    input: {
      index: null,
      todo: ""
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      input: nextProps.initialInput
    }
  }

  changeInput = event => {
    const { input } = this.state
    input.todo = event.target.value
    this.setState({ input })
  }

  submitInputValue = () => {
    this.props.onSubmit(this.state.input)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Input Somethings"
          value={this.state.input.todo}
          onChange={this.changeInput}
        />
        <button onClick={this.submitInputValue}>Submit</button>
      </div>
    )
  }
}

export default InputToDo
