import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import NavBar from './components/NavBar/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
