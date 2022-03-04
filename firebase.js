import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC8LpnxhdVpCzeHIH256tQ4gA6kcMWrgos",
    authDomain: "netlify-cms-99ff3.firebaseapp.com",
    projectId: "netlify-cms-99ff3",
    storageBucket: "netlify-cms-99ff3.appspot.com",
    messagingSenderId: "358176962974",
    appId: "1:358176962974:web:856b6ac048861abccafe8f"
  };

//   initialize firebase

const initializeAuthentication = () =>{
    return initializeApp(firebaseConfig)
};

export default initializeAuthentication;