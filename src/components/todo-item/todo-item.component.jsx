import React from 'react';
import './todo-item.style.scss';

function TodoItem() {
    return(
        <div className='todo-item'>
            <input
                type="checkbox"
            />
            <p>Todo</p>
        </div>
    )
}

export default TodoItem;