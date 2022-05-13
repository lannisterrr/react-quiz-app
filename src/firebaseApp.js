// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBIo-tzGarP72IwM6-h4_byVJz-I1T1RZI',
  authDomain: 'react-quiz-1141f.firebaseapp.com',
  projectId: 'react-quiz-1141f',
  storageBucket: 'react-quiz-1141f.appspot.com',
  messagingSenderId: '70830713099',
  appId: '1:70830713099:web:38eb9ef2ca384680c81a0e',
  measurementId: 'G-BDY4CWLLNS',
};

export const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const db = getFirestore(app);
export const auth = getAuth(app);
export { db };
