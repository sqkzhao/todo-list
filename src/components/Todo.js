import React, { useState } from 'react'

const Todo = () => {
    const [todoState, setTodoState] = useState({
        task: "",
        taskCompleted: false,
        todoList: []
    })
    const onChangeHandler = (e) => {
        setTodoState({
            ...todoState,
            [e.target.name]: e.target.value
        })
    }
    const checkboxHandler = (e) => {
        setTodoState({
            ...todoState,
            todoList: todoState.todoList.map((item, i) => {
                if (e.target.name == item.task) {
                    item.taskCompleted = !item.taskCompleted
                }
                return item
            })
        })
    }
    const deleteHandler = (e) => {
        e.preventDefault()
        console.log(e.target.name)
        setTodoState({
            ...setTodoState,
            todoList: todoState.todoList.filter(item => item.task !== e.target.name)
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setTodoState({
            todoList: todoState.todoList.concat({
                task: todoState.task,
                taskCompleted: todoState.taskCompleted
            }),
            task: "",
            taskCompleted: false
        })
    }
    return (
        <div className="container mt-5">
            <div class="col-3 mx-auto">
                <ul className="list-group list-group-flush">
                    {todoState.todoList.map((item, i) =>
                        <li key={i} className="list-group-item">
                            {!item.taskCompleted && <span>{item.task}</span>}
                            {item.taskCompleted && <span className="textStyle">{item.task}</span>}
                            <input type="checkbox" name={item.task} value={true} onChange={checkboxHandler} className="ml-2" />
                            <input type="button" value="Delete" name={item.task} onClick={deleteHandler} className="ml-2 btn-sm btn-dark" />
                        </li>
                    )}
                </ul>
            </div>
            <form onSubmit={submitHandler} class="col-3 mx-auto mt-4" >
                <input type="text" name="task" value={todoState.task} onChange={onChangeHandler} />
                <input type="submit" value="Add" className="btn-sm btn-primary"/>
            </form>
        </div>
    )
}
export default Todo