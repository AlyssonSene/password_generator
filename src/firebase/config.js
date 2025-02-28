import { initializeApp } from "firebase/app";

const apiKey = process.env.REACT_APP_API_KEY;
const authDomain = process.env.REACT_APP_API_AUTH;
const projectId = process.env.REACT_APP_API_PROJECT_ID;
const storageBucket = process.env.REACT_APP_API_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_APP_API_MESSAGE_SENDER_ID;
const appId = process.env.REACT_APP_API_APP_ID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

export const app = initializeApp(firebaseConfig);
