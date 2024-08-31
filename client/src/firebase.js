// Importa las funciones necesarias desde los módulos de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Configuración del SDK de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBu_mhfo9m9ZlBslfzD7hZzmKJv85IKrUc",
  authDomain: "restaurant-b7870.firebaseapp.com",
  projectId: "restaurant-b7870",
  storageBucket: "restaurant-b7870.appspot.com",
  messagingSenderId: "274008469176",
  appId: "1:274008469176:web:b2a4d4c8982fad24c80e4d"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios de autenticación y el proveedor de Google
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
