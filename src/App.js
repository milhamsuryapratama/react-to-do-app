import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, todo: "MAKAN" },
        { id: 2, todo: "MANDI" },
        { id: 3, todo: "MINUM" }
      ],

      editTodo: "",

      local: ""
    }

    localStorage.setItem("localstr", JSON.stringify(this.state.todos))

  }

  addToDo = (todo) => {
    const todos = this.state.todos
    todos.push(todo)

    let b = localStorage.getItem("localstr")

    this.setState({ todos, local: b })
    console.log(this.state.local)

  }

  deleteTodo = (i) => {
    const todos = this.state.todos
    todos.splice(i, 1)
    this.setState({ todos })
  }

  editTodo = (i) => {
    const todos = this.state.todos
    this.setState({
      editTodo: todos[i]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>TODO LIST APP</h1>
        <InputTodo onSubmit={todo => this.addToDo(todo)} editValue={this.state.editTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
      </div>
    );
  }
}

export default App;
