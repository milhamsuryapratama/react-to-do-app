import React, { Component } from "react"
import "./App.css"
import TodoList from "./components/TodoList"
import InputTodo from "./components/InputTodo"

class App extends Component {
  state = {
    todos: ["Makan", "Mandi"],
    initialInput: {
      index: null,
      todo: ""
    }
  }

  setInitialInput = initialInput => {
    this.setState({ initialInput })
  }

  deleteTodo = index => {
    const todos = this.state.todos
    todos.splice(index, 1)
    this.setState({ todos })
  }

  addToDo = input => {
    const todos = this.state.todos
    todos.push(input.todo)
    this.setState({ todos })
  }

  editTodo = input => {
    const todos = this.state.todos
    todos[input.index] = input.todo
    this.setState({ todos })
  }

  submitTodo = input => {
    if (input.index) this.editTodo(input)
    else this.addToDo(input)

    this.setInitialInput({ index: null, todo: "" })
  }

  render() {
    return (
      <div className="App">
        <h1>TODO LIST APP</h1>
        <InputTodo
          onSubmit={this.submitTodo}
          initialInput={this.state.initialInput}
        />
        <TodoList
          todos={this.state.todos}
          onClickDelete={this.deleteTodo}
          onClickEdit={this.setInitialInput}
        />
      </div>
    )
  }
}

export default App
