import React from 'react';

import './components.css'

const TodoItem = (props) => {
  const { todo, index } = props;
  return (
    <li className={todo.done? 'list-group-item complete' : 'list-group-item'}>
      <span className={todo.done ? 'done' : ''}> <p> {todo.title}</p></span>
      <span className={todo.done ? 'done' : ''}> <p>{todo.description}</p> </span>
      <span className={todo.done ? 'done' : ''}> <p>Due: {todo.dueDate}</p> </span>
      <div className="form-check-inline">
        <input className="form-check-input" onChange={(event) => props.toggleTodoDone(event, index)} type="checkbox" checked={todo.done}/>
        <label className="form-check-label">Complete</label>
      </div>
      <div className="btn-group float-right">
        <button className="btn btn-link" onClick={() => props.editTodo(index)}>Edit</button>
        <button className="btn btn-link" onClick={() => props.deleteTodo(index)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;