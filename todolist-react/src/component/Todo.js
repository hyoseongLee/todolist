import React from 'react';
import './Todo.css';


const Todo = ({ children, todoLength }) => {
    return (
        <div className="Todo">
            <div className="title"> 오늘의 할 일({todoLength}) </div>
            <div>{children} </div>
        </div>
    );
};

export default Todo;