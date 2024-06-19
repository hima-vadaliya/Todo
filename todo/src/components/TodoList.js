import React from 'react'
import TodoItems from './TodoItems'

function TodoList({ input, deleteTodo, editTodo }) {

  return (
    <div className='container '>

      <ul>
        {input.length > 0 ? input.map((item, i) => <TodoItems item={item} key={i} index={i} deleteTodo={deleteTodo} editTodo={editTodo} />) : "no task"}
      </ul>


    </div>
  )
}


export default TodoList