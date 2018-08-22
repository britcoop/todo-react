import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import moment from 'moment'




import TodoForm from './components/ToDoForm'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/ToDoList'

import './App.css';

// App
  // TodoList (class)
    // TodoItems (functional)
  // TodoForm (class)

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      newTodoDescription: '',
      newTodoDate:'',
      todos: [{
        title: 'example',
        description: 'example description',
        done: false,
        dueDate: moment().format('DD/MM/YYYY')
      }]
    };
  }  
  
  // componentDidMount() {
  //   this.handleNewTodoDate(this.state.dueDate)
  // }


  
  handleNewTodo(e) {
    this.setState ({
      newTodo: e.target.value
    })
  }

  handleNewTodoDescription(e) {
    this.setState ({
      newTodoDescription: e.target.value
    })
  }

  handleNewTodoDate (dueDate){
    this.setState ({
      newTodoDate: moment(dueDate).format('DD/MM/YYYY')
    })
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      newTodo: '',
      newTodoDescription: '',
      newTodoDate: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        description: this.state.newTodoDescription,
        done: false,
        dueDate: this.state.newTodoDate
      }]
    })
  }
  
  toggleTodoDone(e, index) {
    const todos = [...this.state.todos] //copy array
    todos [index] = {
      ...todos[index],
      done: e.target.checked
    }
    this.setState({
      todos
    })
  }

  deleteTodo(index) {
    const todos = [...this.state.todos]
    todos.splice(index, 1)

    this.setState({
      todos
    })
  }

  // editTodo(index) {
  //   const todos [...this.state.todos]
  //   todos.
  // }

  done() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        description: todo.description,
        done: true,
        dueDate: todo.dueDate
      }
    })

    this.setState({
      todos
    })
  }



  render() {
    return (
      <div className="container">
        <TodoHeader />
        <TodoForm 
          newTodo={this.state.newTodo}
          newTodoDescription={this.state.newTodoDescription}
          newTodoDate={this.state.newTodoDate}
          handleFormSubmit={this.handleFormSubmit.bind(this)}
          handleNewTodo={this.handleNewTodo.bind(this)}
          handleNewTodoDescription={this.handleNewTodoDescription.bind(this)}
          handleNewTodoDate={this.handleNewTodoDate.bind(this)}
          />
          <TodoList
            todos={this.state.todos}
            toggleTodoDone={this.toggleTodoDone.bind(this)}
            deleteTodo={this.deleteTodo.bind(this)}/>
      </div>
    );
  }
}

export default App
