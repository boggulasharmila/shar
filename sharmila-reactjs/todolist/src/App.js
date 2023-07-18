import logo from './logo.svg';
import './App.css';
import Todo from './todo/todo';
import { useState } from 'react';

function App() {
  const [todo,setTodo] = useState("")
  const [todoItems,setTodoItems] = useState([])
  const handleTodoChange = (event) => {
    setTodo(event.target.value)
  }
  const shar = () =>{
    console.log(todo);
    const date = new Date()
    const newTodo = {
      id : date.getTime(),
      todoItem : todo
    }
    setTodoItems([...todoItems,newTodo])
    setTodo("")
  }
  return (
    <div id='todolist'>
      <h1>Todo list</h1>
      <input type='text' id='text' value={todo} placeholder='Todo' onChange={handleTodoChange} />
      <button id='addtodo' onClick={shar}>Add Todo</button>
      <div id='todo_container'>
        {console.log(todoItems)}
        {todoItems.map((todoItem) => <Todo key={todoItem.id} setTodoItems = {setTodoItems} todoItems = {todoItems} item = {todoItem} />)}
      </div>
    </div>
    
  );
}

export default App;