import React from 'react'

export default function TodoCard(props) {
  const {children} = props
  return (
      <li className='todoItem'>
          <div className="actionsContainer">
          {children}
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-trash"></i>
          </div>
      </li>
  )
}
