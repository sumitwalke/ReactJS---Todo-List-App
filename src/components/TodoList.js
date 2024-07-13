import React from 'react'
import TodoCard from './TodoCard'

function TodoList(props) {
  const {todos, handleDeleteTodo, handleEditTodo} = props
  return (
    <div>
      {todos.map((todo, todoIndex)=>{
        return (
          <TodoCard handleDeleteTodo= {handleDeleteTodo} handleEditTodo={handleEditTodo} index={todoIndex} key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </div>
  )
}

export default TodoList