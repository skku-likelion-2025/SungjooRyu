import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXdv6VNLtBFYKHS2TKle_86ag0gITdxUI",
  authDomain: "nwitter-reloaded-f798c.firebaseapp.com",
  projectId: "nwitter-reloaded-f798c",
  storageBucket: "nwitter-reloaded-f798c.firebasestorage.app",
  messagingSenderId: "38787323164",
  appId: "1:38787323164:web:f68f19abefc8ebd8e556d9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);