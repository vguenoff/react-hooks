import React, { useState } from 'react';

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

function Todos() {
    const [todo, updateTodo] = useState('');
    const [todos, editTodos] = useState(['hey', 'hoo']);

    const addTodo = e => {
        e.preventDefault();

        if (todo) {
            editTodos(todos => [...todos, todo]);
            updateTodo('');
        }
    };

    const removeTodo = i =>
        editTodos(todos => [
            ...todos.slice(0, i),
            ...todos.slice(i + 1, todos.length),
        ]);

    return (
        <div>
            <ol>
                {todos.map((t, i) => (
                    <li key={i}>
                        {t}{' '}
                        <span>
                            <button onClick={() => removeTodo(i)}>x</button>
                        </span>
                    </li>
                ))}
            </ol>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={todo}
                    onChange={e => updateTodo(e.target.value)}
                />
                <button>Add todo</button>
            </form>
        </div>
    );
}

export default Todos;
