import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  getFirestore,
} from 'firebase/firestore';

// Wildwood Coffee's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB7kdkoBHTpfKPB_xbIA6BALWsWPTbV8Ks',
  authDomain: 'wildwood-coffee.firebaseapp.com',
  projectId: 'wildwood-coffee',
  storageBucket: 'wildwood-coffee.appspot.com',
  messagingSenderId: '304927711932',
  appId: '1:304927711932:web:cc284594f24701974626b9',
  measurementId: 'G-2DBNKB547F',
};

// Firebase Initialization
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const db = getFirestore();
export const auth = getAuth();

export const createUser = async (user) => {
  const userDocRef = doc(db, 'users', user.uid);
  console.log('userDocRef', userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log('snapshot', userSnapshot);
  console.log('snapshot exists?', userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      return { error: error.message };
    }
  }

  return userDocRef;
};

// Google Log In
export const signUpWithGoogle = async () => {
  const { user } = await signInWithPopup(auth, provider);
  const userDocRef = await createUser(user);
};

// Email and Password Sign Up, Sign In, & Sign Out
export const signUpWithEmail = async (email, password) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;

    console.log('db', db);
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      email: user.email,
    });
    return true;
  } catch (error) {
    return { error: error.message };
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
    return true;
  } catch (error) {
    return { error: error.message };
  }
};

export const signOutOfAcc = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    return false;
  }
};
