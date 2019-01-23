import React, { Component } from "react"

class TodoList extends Component {
  renderToDos() {
    const { onClickEdit, onClickDelete } = this.props
    return this.props.todos.map((todo, index) => {
      return (
        <div key={index}>
          <span>{todo}</span>{" "}
          <span>
            <button onClick={() => onClickDelete(index)}>HAPUS</button>
          </span>
          <span>
            <button onClick={() => onClickEdit({ index, todo })}>Edit</button>
          </span>
        </div>
      )
    })
  }

  render() {
    return <div>{this.renderToDos()}</div>
  }
}

export default TodoList
