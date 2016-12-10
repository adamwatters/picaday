import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root')
const sequences = JSON.parse(root.dataset.props)

ReactDOM.render(
  <App sequences={sequences}/>,
  root
);
