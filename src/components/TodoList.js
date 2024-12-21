import React from 'react'

const TodoList = (props) => {
  return (
    <div>
        <h1>Child Components</h1>
        <ul>
            {
                props.todos.map((item,index)=>(
                    <li key={index} style={{display:"flex",gap:"2vw",marginBottom:"2vh"}}>
                        <p>{item.text}</p>
                        {item.completed&&<button onClick={()=>props.handleComplete(item.id)} id="">Complete</button>}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList