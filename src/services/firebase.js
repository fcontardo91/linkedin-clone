import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBFW23mTSMZuV0hs27T_28dDoAzWZeXSuY",
    authDomain: "linkedin-clone-58cfc.firebaseapp.com",
    projectId: "linkedin-clone-58cfc",
    storageBucket: "linkedin-clone-58cfc.appspot.com",
    messagingSenderId: "379551792359",
    appId: "1:379551792359:web:a4ff36ffdb4446a339f642"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();

  export { db , auth};
