// Firebase.jsx
import { initializeApp } from "firebase/app";

// Optional: remove analytics if not used
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD4TjNarJQHdPOzBPdwymVsqP5A7nU1Nv0",
  authDomain: "userlogin-ea783.firebaseapp.com",
  projectId: "userlogin-ea783",
  storageBucket: "userlogin-ea783.appspot.com", // ✅ fixed `.app` typo
  messagingSenderId: "449911097989",
  appId: "1:449911097989:web:40a94b39e6cb5aeca8b7ec",
  measurementId: "G-CDXKJC98C9"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // not required for auth

// ✅ export it!
export { app };
