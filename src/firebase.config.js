import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB6uzudwfsKY9oM2FCjOg5PXLmbK9-ESWM',
  authDomain: 'house-marketplace-app-14aad.firebaseapp.com',
  projectId: 'house-marketplace-app-14aad',
  storageBucket: 'house-marketplace-app-14aad.appspot.com',
  messagingSenderId: '237930277608',
  appId: '1:237930277608:web:af20ed5d2cd58ac0fe775d',
};

export const db = getFirestore();
