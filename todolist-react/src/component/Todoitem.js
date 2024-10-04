import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import './Todoitem.css';

const Todoitem = ({ 
  todo, 
  onCheckToggle 
}) => {
    const { text, id, checked } = todo;
    return <div className="Todoitem">
        <div className={`content ${checked ? 'checked' : ""}`}>
        {checked ? 
        (<MdCheckBox
        onClick={() => {
          onCheckToggle(id);
        }}
        />
       ) : (
           <MdCheckBoxOutlineBlank
           onClick={() => {
            onCheckToggle(id);
          }}
           />
        )}
        <div
         className="text">{text}</div>
      </div>
  </div>;
};

export default Todoitem;