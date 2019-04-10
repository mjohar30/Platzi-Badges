// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

import BadgeNew from './pages/BadgeNew';

// const element = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement('h1', {}, 'Hola!, soy los children')
// const name = 'Mario'

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<BadgeNew/>, container);
