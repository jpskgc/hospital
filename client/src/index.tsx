import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const target = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  target
);
