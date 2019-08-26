import React, { useState } from 'react';

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

const generateId = () =>
    `_${Math.random()
        .toString(36)
        .substr(2, 9)}`;

function Todos() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = e => {
        e.preventDefault();

        if (input) {
            setTodos(todos => [
                ...todos,
                {
                    value: input,
                    id: generateId(),
                },
            ]);

            setInput('');
        }
    };

    const removeTodo = id =>
        setTodos(todos => todos.filter(todo => todo.id !== id));

    return (
        <div>
            <ol>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.value}{' '}
                        <button onClick={() => removeTodo(todo.id)}>x</button>
                    </li>
                ))}
            </ol>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Add todo"
                />
                <button>Add todo</button>
            </form>
        </div>
    );
}

export default Todos;
