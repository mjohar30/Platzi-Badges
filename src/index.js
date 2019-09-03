// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

import App from './components/App';

// const element = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement('h1', {}, 'Hola!, soy los children')
// const name = 'Mario'
// const element = React.createElement('h1', {}, `Hola, soy ${name}`)

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(element, container);

ReactDOM.render(<App/>, container);
