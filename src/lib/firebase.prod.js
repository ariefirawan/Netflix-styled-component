import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDJhpdc0shhgLimTPIVGNbjhV6_ROqOCio',
  authDomain: 'netflix-9b56b.firebaseapp.com',
  databaseURL: 'https://netflix-9b56b.firebaseio.com',
  projectId: 'netflix-9b56b',
  storageBucket: 'netflix-9b56b.appspot.com',
  messagingSenderId: '1095438393970',
  appId: '1:1095438393970:web:eda52cd67344012bab18eb',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
