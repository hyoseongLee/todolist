import React, { useState } from 'react';
import './App.css';
import Todo from './component/Todo';
import Todolist from './component/Todolist';
import { MdAddCircle } from 'react-icons/md';
import Todoinser from './component/Todoinser';


const App = () => {
  const [inserToggle,setinserToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    },

  ])

  const oninserToggle = () => {
    setinserToggle(prev => !prev)
  };
  return (
    <Todo todoLength = {todos.length}>
      <Todolist todos={todos} />
      <div className="add-todo-button" onCilck={oninserToggle}>
        <MdAddCircle />
      </div>
      {inserToggle && <Todoinser oninserToggle={oninserToggle} />}
    </Todo>
  );
};

export default App;
