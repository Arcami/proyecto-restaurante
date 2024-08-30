// Importa las funciones que necesitas de los SDKs que requieres
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Importa la autenticación

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBu_mhfo9m9ZlBslfzD7hZzmKJv85IKrUc",
  authDomain: "restaurant-b7870.firebaseapp.com",
  projectId: "restaurant-b7870",
  storageBucket: "restaurant-b7870.appspot.com",
  messagingSenderId: "274008469176",
  appId: "1:274008469176:web:b2a4d4c8982fad24c80e4d",
  measurementId: "G-E4E23X2XL1"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa la autenticación
const auth = getAuth(app);

// Configura el proveedor de autenticación de Google
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider };
