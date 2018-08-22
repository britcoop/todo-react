import React from 'react'
import AddItem from './AddItem'

const TodoList = (props) => {
  return (
    <ul className="list-group" style={{paddingTop: '1rem'}}>
      {props.todos.map((todo, index) => {
        return (
          <AddItem
            key={index}
            index={index}
            todo={todo}
            toggleTodoDone={props.toggleTodoDone}
            deleteTodo={props.deleteTodo}
          />
        )
      })}
    </ul>
  )
}

export default TodoList