import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'



function Todo() {
  let [input, setInput] = useState([]);
  let [editing, setEditing] = useState(false);
  let [update, setUpdate] = useState({});

  //add function
  function add(todoObj) {
    console.log("todoObj", todoObj)
    setInput([todoObj, ...input]);

  }


  // delete function
  function deleteTodo(index) {
    setInput([...input.slice(0, index), ...input.slice(index + 1)])
//  setInput(input.filter(e=>e.index !== index))
  }



  //edit function
  function editTodo(index) {

    setEditing(true);
    setUpdate({ ...input[index], index });
  }


  function updateTodo(updatedTodo, index) {
    // console.log(updateTodo);
    setInput(input.map((item, i) => (i === index ? updatedTodo : item)));
    setEditing(false);
    setUpdate({});


  }

  return (
    <div className='form'>
      <TodoForm add={add} editing={editing} update={update} updateTodo={updateTodo} /><br></br>
      <h1>Todolist</h1>
      <hr></hr>
      <TodoList input={input} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={editTodo} />
    </div>
  )
}

export default Todo