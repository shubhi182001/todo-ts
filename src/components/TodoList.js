import React from 'react'

function TodoList({todos, setTodos}) {
  return (
    <div>
        {todos.map((todo)=>(
            <li className='list-item'>
                <input type="text" value={todo.title} className="list" onChange={(e) => e.preventDefault()} />
                <div>
                    <button className='button-complete task-button'>
                        <i className='fa fa-check-circle '></i>
                    </button>
                </div>
            </li>
        ))}
    </div>
  )
}

export default TodoList