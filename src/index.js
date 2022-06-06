import React from 'react';
import ReactDOM from 'react-dom/client';

// Personal styles 
import './assets/dist/index.css';

// Personal components
import Navbar from './components/Navbar'
import Banner from './components/Banner'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Banner />
  </React.StrictMode>
);