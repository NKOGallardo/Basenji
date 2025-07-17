  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBZY5x-Hwmq52enTDPYwlI4y5xVLcnOp6g",
    authDomain: "basenji-37f4f.firebaseapp.com",
    projectId: "basenji-37f4f",
    storageBucket: "basenji-37f4f.firebasestorage.app",
    messagingSenderId: "556496998045",
    appId: "1:556496998045:web:cd9c46346aefa6079a0e74",
    measurementId: "G-RMHJ9PY201"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);