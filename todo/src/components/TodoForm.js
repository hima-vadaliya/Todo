import React, { useEffect, useState } from 'react'

function TodoForm({ add, editing, update, updateTodo }) {

    let [todo, setTodo] = useState("")
    let [time, setTime] = useState("")
    let [select, setSelect] = useState("pending")


    useEffect(() => {
        if (editing) {
            setTodo(update.todo);
            setTime(update.time);
            setSelect(update.select);
        }
    }, [editing, update]);


    function handleSubmit() {
        const todoObj = {
            todo: todo ? todo : alert("enter todo"),
            time: time ? time :alert("time = 0"),
            select: select
        };


        if (editing) {
            updateTodo(todoObj, update.index);
        }
         else {
            if (todo !== "") {
                add(todoObj);
            }
           
        }
        setTodo("");
        setTime("");
        //if not seleted any status then by default pending
        setSelect("pending");
    }


    return (
        <>
            <form className='form-inline'>
                <div >
                    {/* <div class="row">
                        <div class="col">

                            <input class="form-control  ms-5 me-5 w-50" id="exampleInputPassword1" type='text' placeholder='Enter Todo' aria-invalid="true" aria-describedby="first-name-error" value={todo} onChange={(e) => setTodo(e.target.value)} required ></input>
                        </div>
                        <div class="col">
                            <input type='number' className=' form-control   ms-5 me-5 w-50 timeing' min={0} onChange={(e) => setTime(e.target.value)} ></input>&nbsp;&nbsp;                    </div>
                        <div class="col">
                            <select className='select ' name="select" id="select" value={select} onChange={(e) => setSelect(e.target.value)}>&nbsp;&nbsp;
                                <option value="pending">Pending</option>
                                <option value="progress">In-Progress</option>
                                <option value="complete">Complete</option>
                            </select>
                        </div>
                        .col
                    </div>
                     */}
                    <input  className='w-50' id="exampleInputPassword1"  type='text' placeholder='Enter Todo' aria-invalid="true" aria-describedby="first-name-error" value={todo} onChange={(e) => setTodo(e.target.value)} required ></input>
                    &nbsp;
                    &nbsp;
                    <input type='number'  value={time}  min={0} onChange={(e) => setTime(e.target.value)} ></input>&nbsp;&nbsp; 
                 <select className='select ' name="select" id="select" value={select} onChange={(e) => setSelect(e.target.value)}>&nbsp;&nbsp;
                        <option value="pending">Pending</option>
                        <option value="progress">In-Progress</option>
                        <option value="complete">Complete</option>
                    </select>
                    &nbsp; &nbsp;
                    <i class="bi bi-plus-square-fill text-info btn-lg active h3 p-0" onClick={(e) => { e.preventDefault(); handleSubmit(); }}>
                        {editing ? "UPDATE" : ""}
                    </i>



                </div>
            </form>
        </>
    )
}

export default TodoForm