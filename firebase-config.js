import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyADCFj4bqLN5F7OHf8EbNOlzS9YiA20zHY",
    authDomain: "kec-games.firebaseapp.com",
    projectId: "kec-games",
    storageBucket: "kec-games.firebasestorage.app",
    messagingSenderId: "889557848803",
    appId: "1:889557848803:web:f6a3fb84a38d1a95ebd6",
    measurementId: "G-752QHXWSNE"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// ⚠️ Firestore 데이터베이스 객체 내보내기 (반드시 필요)
export const db = getFirestore(app);
