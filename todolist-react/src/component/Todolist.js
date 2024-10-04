import React from 'react';
import Todoitem from './Todoitem';
import './Todolist.css';

const Todolist = ({ 
    todos, 
    onCheckToggle 
}) => {
    
    return (
        <div className="Todolist">
            {todos.map(todo => (
            <Todoitem 
            todo={todo} 
            key={todo.id} 
            onCheckToggle={onCheckToggle}
            />
        ))}
        </div>
    );
};

export default Todolist;