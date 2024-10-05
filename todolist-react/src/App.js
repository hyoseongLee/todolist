import React, { useState } from 'react';
import './App.css';
import Todo from './component/Todo';
import Todolist from './component/Todolist';
import { MdAddCircle } from 'react-icons/md';
import Todoinser from './component/Todoinser';

let nextId = 4;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
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
    if (selectedTodo) {
      setSelectedTodo(null);
    }
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

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo)
  } 

  const onRemove = id => {
    oninserToggle();
    setTodos(todos => todos.filter(todo =>todo.id !== id));
  };

  const onUpdate = (id, text) => {  
    oninserToggle();
    setTodos(todos =>
      todos.map(todo => (todo.id === id ? {...todo, text} : todo))
    );
  }

  return (
    <Todo todoLength = {todos.length}>
      <Todolist 
      todos={todos} 
      onCheckToggle={onCheckToggle}
      oninserToggle={oninserToggle}
      onChangeSelectedTodo={onChangeSelectedTodo}
      />

      <div className="add-todo-button" onClick={oninserToggle}>
        <MdAddCircle />
      </div>
      {inserToggle && (
      <Todoinser 
      selectedTodo={selectedTodo}
      oninserToggle={oninserToggle} 
      oninserTodo={oninserTodo} 
      onRemove={onRemove}
      onUpdate={onUpdate}
      />
    )}
    </Todo>
  );
};

export default App;
