import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  let todos = [
    'Go to the gym',
    'Eat more fruits and vege',
    'Pick up the kids from the school'
  ]

  return (
    <>
      <TodoInput/>
      <TodoList todos={todos}/>
    </>
  );
}

export default App;
