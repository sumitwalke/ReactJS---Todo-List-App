import React from 'react'
import TodoCard from './TodoCard'

function TodoList() {
  let todos = [
    'Go to the gym',
    'Eat more fruits and vege',
    'Pick up the kids from the school'
  ]
  return (
    <div>
      {todos.map((todo, todoIndex)=>{
        return (
          <TodoCard key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </div>
  )
}

export default TodoList