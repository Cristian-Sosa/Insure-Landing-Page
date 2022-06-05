import React from 'react';
import ReactDOM from 'react-dom/client';

// Personal styles 
import './assets/dist/index.css';

// Personal components
import Navbar from './components/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);