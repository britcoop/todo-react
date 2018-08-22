import React from 'react'
import moment from 'moment'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TodoForm = (props) => {
  console.log(props)
    return (
      <form onSubmit={props.handleFormSubmit}>
        <div className="form-group">
          <label>Add a new todo!</label>
          <input type="text" className="form-control" onChange={props.handleNewTodo} placeholder="add a new todo..."/>
        </div>
        <div className="form-group">
          <textarea type="text" className="form-control" onChange={props.handleNewTodoDescription} placeholder="description"/>
        </div>
        <div className="form-group">
          <DatePicker
            className="form-control"
            placeholderText="Select due date"
            // selected={moment(props.todo.dueDate)} //this doesn't update. selected value must be an object but that returns a different error
            onChange={props.handleNewTodoDate}
          />
        </div>
          <button type="submit" className="btn btn-secondary">Add</button> 
      </form>
    )
}

export default TodoForm