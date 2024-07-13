import { useState, useEffect } from "react";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState([])

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo) {
    const newTodosList = [...todos, newTodo]
    persistData(newTodosList)
    setTodos(newTodosList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex)=>{
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueTobEdited = todos[index];
    setTodoValue(valueTobEdited)
    handleDeleteTodo(index)
  }

  useEffect(()=>{
    if(!localStorage) {
      return 
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }

    console.log(localTodos)

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <TodoInput handleAddTodos = {handleAddTodos} todoValue = {todoValue} setTodoValue = {setTodoValue}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  );
}

export default App;
