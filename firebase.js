// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

import {
getStorage
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js";

import {
getAuth
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// Your Firebase Configuration

const firebaseConfig = {
apiKey: "AIzaSyDLdWY7gbNmLOc-jCoQ27FIW9iBzVtbwhk",
authDomain: "official-website-b2757.firebaseapp.com",
projectId: "official-website-b2757",
storageBucket: "official-website-b2757.firebasestorage.app",
messagingSenderId: "295891219037",
appId: "1:295891219037:web:c1b1713c9291f88cabd3b4",
measurementId: "G-T0BKW67381"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Services

const db = getFirestore(app);

const storage = getStorage(app);

const auth = getAuth(app);

// Export Services

export {
app,
db,
storage,
auth
};
