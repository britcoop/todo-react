import React from 'react';
import EditableLabel from 'react-inline-editing';

import './components.css'

const TodoItem = (props) => {
  const { todo, index } = props;

  return (
    <li className={todo.done? 'list-group-item done' : 'list-group-item'}>
      <EditableLabel inputClassName={todo.done ? 'done' : ''} text={todo.title ? `${todo.title}` : 'Add a title for this task'} />
      <EditableLabel inputClassName={todo.done ? 'done' : ''} text={todo.description ? `${todo.description}` : 'Add a description for this task'} />
      <EditableLabel inputClassName={todo.done ? 'done' : ''} text={todo.dueDate ? `Due: ${todo.dueDate}` : 'Due: DD/MM/YYYY' }/>
      <div className="form-check-inline">
        <input className="form-check-input" onChange={(event) => props.toggleTodoDone(event, index)} type="checkbox" checked={todo.done}/>
        <label className="form-check-label">Status: {todo.done ? "done" : "pending"}</label> 
      </div>
      <div className="btn-group float-right">
        <button className="btn btn-link" onClick={() => props.deleteTodo(index)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;