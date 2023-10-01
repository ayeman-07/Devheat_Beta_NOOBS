// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5jfKcYKoSzFRDJrCu3GGY93ofhBXj5OU",
  authDomain: "search-my-teamma.firebaseapp.com",
  projectId: "search-my-teamma",
  storageBucket: "search-my-teamma.appspot.com",
  messagingSenderId: "606007790403",
  appId: "1:606007790403:web:02348f70481c911c4c3df6"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{auth,app};