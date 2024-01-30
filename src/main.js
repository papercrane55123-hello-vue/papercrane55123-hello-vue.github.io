import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7gXwpytPaYaGSSOSQ0l-U50a4WMDXya8",
  authDomain: "hello-vue-2036d.firebaseapp.com",
  projectId: "hello-vue-2036d",
  storageBucket: "hello-vue-2036d.appspot.com",
  messagingSenderId: "678862156917",
  appId: "1:678862156917:web:c39d55c6b5290f44c5f43c",
  measurementId: "G-W8WNJ0NFCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



