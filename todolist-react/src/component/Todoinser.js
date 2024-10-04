import React from 'react';
import { MdAddCircle } from 'react-icons/md';

const Todoinser = ({oninserToggle}) => {
    return 
    <div>
        <div className="background" onClick={oninserToggle}> </div>
        <form>
            <input></input>
            <button type="submit"><MdAddCircle />
            </button>
        </form>
    </div>
}

export default Todoinser;