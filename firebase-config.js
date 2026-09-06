import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyADCFJ4bqLN5F7Ohf8EbNolZ59YiA20zHY",
    authDomain: "kec-games.firebaseapp.com",
    projectId: "kec-games",
    storageBucket: "kec-games.firebasestorage.app",
    messagingSenderId: "889557848803",
    appId: "1:889557848803:web:f6a3fb84a3a83d1a95ebd6",
    measurementId: "G-752QHXWSNE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);