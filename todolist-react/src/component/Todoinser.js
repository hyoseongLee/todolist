import React, { useState, useEffect } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { TiTrash, TiPencil} from "react-icons/ti";
import './Todoinser.css';

const Todoinser = ({
    oninserToggle, 
    oninserTodo, 
    selectedTodo,
    onRemove,
    onUpdate

 }) => {
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

    useEffect(() => {
        if (selectedTodo) {
          setValue(selectedTodo.text);
        }
      }, [selectedTodo]);

    return (
    <div>
        <div className="background" onClick={oninserToggle}> </div>
        <form 
        onSubmit={
            selectedTodo
             ? () => {
            onUpdate(selectedTodo.id, value);
             }
            : onSubmit
                }
                >

            <input 
            placeholder="please type" 
            value={value}
            onChange={onChange}

            ></input>
            {selectedTodo ? (
                <div className="rewrite">
                    <TiPencil 
                    onClick={() => {onUpdate(selectedTodo.id, value);
                    }}
                    />
                    
                    <TiTrash 
                    onClick={() => {onRemove(selectedTodo.id);
                    }} 
                    />
                    </div>

                    

        ) : (   
            <button type="submit">
                <MdAddCircle />
            </button>
        )}
        </form>
    </div>
    );
};

export default Todoinser;