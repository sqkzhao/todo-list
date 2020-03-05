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
        <div>
            <div>
                <ul>
                    {todoState.todoList.map((item, i) =>
                        <li key={i}>
                            {!item.taskCompleted && <span>{item.task}</span>}
                            {item.taskCompleted && <span className="textStyle">{item.task}</span>}
                            <input type="checkbox" name={item.task} value={true} onChange={checkboxHandler} />
                            <input type="button" value="Delete" name={item.task} onClick={deleteHandler} />
                        </li>
                    )}
                </ul>
            </div>
            <form onSubmit={submitHandler} >
                <input type="text" name="task" value={todoState.task} onChange={onChangeHandler} />
                <input type="submit" value="Add" />
                <p>{todoState.task}</p>
            </form>
        </div>
    )
}
export default Todo