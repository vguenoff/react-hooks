import React, { useState } from 'react';
import './App.css';

// import Toggle from './components/Toggle';
// import Counter from './components/Counter';

const App = () => {
    const [name, setName] = useState('vassil@gmail.com');

    return (
        <div className="main-wrapper">
            <h1>Level Up Dishes</h1>
            {/* <Toggle /> */}
            {/* <Counter /> */}
            {/* <br /> */}
            {/* <hr /> */}
            <form
                onSubmit={e => {
                    e.preventDefault();
                    // formSubmit(name, setName);
                }}
            >
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

// const formSubmit = (value, setValue) => {
//     console.log(`email sent to ${value}!`);
//     // calling the hook setter method outside the component
//     setValue('');
// };

export default App;
