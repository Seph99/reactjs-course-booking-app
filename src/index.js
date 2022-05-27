import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const name = 'John Smith';
const element = <h1>Hello, {name}</h1>

// React Fragment - serves as parent element other than HTML tags. <React.Fragment>...</React.Fragment> short version is <>...</>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);





