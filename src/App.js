import React from 'react';
import './App.css';

import Todos from './components/Todos';

const App = () => {
    return (
        <div className="main-wrapper">
            <h1>Practice</h1>
            <Todos />
        </div>
    );
};

export default App;
