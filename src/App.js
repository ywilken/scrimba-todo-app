import React from 'react';
import todosData from './todosData';
import TodoItem from './components/todo-item/todo-item.component';
import './App.scss';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
    }
    
    render() {
        const todoItem = this.state.todos.map( todo => {
            return <TodoItem key={todo.id} todo={todo}/>
        })

        return (
            <div className="todo-list">
                {todoItem}
            </div>
        )
    }
}

export default App;