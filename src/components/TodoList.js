import React, { Component } from 'react';

class TodoList extends Component {

    renderToDos() {
        const deleteTodo = this.props.deleteTodo
        const editTodo = this.props.editTodo
        return this.props.todos.map((todo, index) => {
            return (
                <div key={index}>
                    <span>{todo.todo}</span> {' '}
                    <span><button onClick={() => { deleteTodo(index) }}>HAPUS</button></span>
                    <span><button onClick={() => { editTodo(index) }}>Edit</button></span>
                </div>
            )
        })
    }

    render() {
        return (
            <div>{this.renderToDos()}</div>
        )
    }
}


export default TodoList;