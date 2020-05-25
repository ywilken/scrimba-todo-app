import React from 'react';
import './todo-item.style.scss';

function TodoItem(props) {
    return(
        <div className='todo-item'>
            <input
                type="checkbox"
                checked={props.todo.completed}
                onChange={() => props.handleChange(props.todo.id)}
            />
            <p
                className={props.todo.completed ? 'completed' : ''}
            >{props.todo.text}</p>
        </div>
    )
}

export default TodoItem;