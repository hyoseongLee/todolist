import React, { useState } from 'react';
import './App.css';
import Todo from './component/Todo';
import Todolist from './component/Todolist';
import { MdAddCircle } from 'react-icons/md';
import Todoinser from './component/Todoinser';

let nextId = 4;

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
    setinserToggle(prev => !prev);
  };

  const oninserTodo = text => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };
 
  const onCheckToggle = id => {
    setTodos(todos => 
      todos.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked} : todo
    )
   );
  };


  return (
    <Todo todoLength = {todos.length}>
      <Todolist 
      todos={todos} 
      onCheckToggle={onCheckToggle}
      />
      <div className="add-todo-button" onClick={oninserToggle}>
        <MdAddCircle />
      </div>
      {inserToggle && (
      <Todoinser 
      oninserToggle={oninserToggle} 
      oninserTodo={oninserTodo} 
      />
    )}
    </Todo>
  );
};

export default App;
