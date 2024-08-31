import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Asegúrate de que la ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

ReactDOM.render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
  document.getElementById('root') // Asegúrate de que el id coincida con el del archivo index.html
);
