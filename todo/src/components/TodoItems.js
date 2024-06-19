import React from 'react'

function TodoItems({ item, index, deleteTodo, editTodo }) {


  function getBadgeClass(status) {
    switch (status) {
      case 'pending':
        return 'red';
      case 'progress':
        return ' yellow';
      case 'complete':
        return 'green';
      default:
        return 'black';
    }
  }


  return (
    <div className=' container m-0 p-0 '>

      <div className="row list w-100 ">
        {/*           
      <div className="col-md-2  ">
          {index+1}. 
          </div> */}
        <div className="col-md-4">
          {item.todo}
        </div>
        <div className="col-md-2">

          {/* <span > {item.select}</span> */}
            <span className={getBadgeClass(item?.select)}> {item?.select}</span>
     
        </div>
        <div className="col-md-1">
          {item.time ? item.time : "0"}
        </div>
        <div className="col-md-1">

          <i className="bi bi-trash3-fill  text-danger" onClick={() => deleteTodo(index)}></i>
        </div>
        <div className="col-md-2">
          <i className="bi bi-pencil-square  text-success" onClick={() => editTodo(index)}></i>
        </div>
      </div>

    </div>
  )
}

export default TodoItems






