import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './Todoinser.css';

const Todoinser = ({oninserToggle, oninserTodo }) => {
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit =(e) => {
        e.preventDefault();
        oninserTodo(value);
        setValue("");
        oninserToggle();
    };


    return (
    <div>
        <div className="background" onClick={oninserToggle}> </div>
        <form onSubmit={onSubmit}>
            <input placeholder="please type" 
            value={value} 
            onChange={onChange}
            ></input>
            <button type="submit">
                <MdAddCircle />
            </button>
        </form>
    </div>
    );
};

export default Todoinser;