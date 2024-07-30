import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Restcountrys from './componetes/Restcountrys.jsx'; // Corrige el nombre del componente y la importación
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Restcountrys />
  </React.StrictMode>,
);
