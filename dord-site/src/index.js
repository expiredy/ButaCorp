import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import NavBar from './components/nav-bar/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
