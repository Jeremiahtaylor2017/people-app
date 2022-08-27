// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDK6VubOif9Y2geDKg34MqneGEJehc1pkw",
	authDomain: "people-app-8ed5e.firebaseapp.com",
	projectId: "people-app-8ed5e",
	storageBucket: "people-app-8ed5e.appspot.com",
	messagingSenderId: "22393170167",
	appId: "1:22393170167:web:046483e12ac79dd5064bf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize our provider
const provider = new GoogleAuthProvider();

// initialize a reference to our auth object
// TODO: why do we pass a ref to app? const auth = getAuth(app);
const auth = getAuth();

function login() {
	return signInWithPopup(auth, provider);
}

function logout() {
	return signOut(auth);
}

export { auth, login, logout, onAuthStateChanged };
