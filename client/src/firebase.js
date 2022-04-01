import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOcRR0kGYWJ1c8HUG521SYu-QCU8Yh7rg",
  authDomain: "notify-1216192127.firebaseapp.com",
  projectId: "notify-1216192127",
  storageBucket: "notify-1216192127.appspot.com",
  messagingSenderId: "185212972773",
  appId: "1:185212972773:web:653bc7628d462613782e0c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);