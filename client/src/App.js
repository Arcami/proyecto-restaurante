import React from 'react';
import AppRoutes from './routes/Routes';
import Navbar from './components/templates/Navbar'
import ThemeProvider from './context/ThemeContext'; // Importa el ThemeProvider

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar /> {/* La Navbar ahora recibirá el tema global */}
        <div className="container mt-4">
          <AppRoutes /> {/* Las rutas de la aplicación */}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
