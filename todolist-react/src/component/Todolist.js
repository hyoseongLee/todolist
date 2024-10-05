import React from 'react';
import Todoitem from './Todoitem';
import './Todolist.css';

const Todolist = ({ 
    todos, 
    onCheckToggle,
    oninserToggle,
    onChangeSelectedTodo
}) => {
    
    return (
        <div className="Todolist">
            {todos.map(todo => (
            <Todoitem 
            todo={todo} 
            key={todo.id} 
            onCheckToggle={onCheckToggle}
            oninserToggle={oninserToggle}
            onChangeSelectedTodo={onChangeSelectedTodo}
            />
        ))}
        </div>
    );
};

export default Todolist;