import './Todo.css'

function Todo({title, clicked}) {

    return(
        <div className="todo">
            <p>{title}</p>
            <button onClick={clicked} >Delete</button>
        </div>
    )
}

export default Todo