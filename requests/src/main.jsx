import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Restcountrys from './componetes/Restcountrys.jsx';
import Randomuser from './componetes/Randomuser.jsx'; // Asegúrate de que el nombre del archivo y del componente sea correcto
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Restcountrys />
    <Randomuser />
    </React.StrictMode>,
);
