import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
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

// instantiates new instance of googleAuthProvider class
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const db = getFirestore();
// var auth keeps track of the authentication state of the entire application
export const auth = getAuth();

// Create User Doc function which is called by every log-in method
export const createUserDoc = async (user, additionalInfo = {}) => {
  if (!user) return;
  // after user logs in via any one of the methods, get user's doc using doc function & uid + getDoc async function
  const userDocRef = doc(db, 'users', user.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user doc does NOT exist, use setDoc function to create user doc
  // if user doc DOES exist, do nothing
  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      return { error: error.message };
    }
  }
  return userDocRef;
};

// Google Popup Sign Up/In
export const signUpWithGooglePopup = async () => {
  const { user } = await signInWithPopup(auth, googleProvider);
  // set var userDocRef to either an existing doc in firebase or a new doc created by createUser's setDoc
  const userDocRef = await createUserDoc(user);
};

// Google Redirect Sign Up/In (pt. 1)
// simply calls the redirect to google login URL
export const signUpWithGoogleRedirect = async () => {
  const { user } = await signInWithRedirect(auth, googleProvider);
};

// Google Redirect Sign Up/In (pt. 2)
// this syntax used because async functions return promises, not functions -- useEffect requires a "cleanup" function to be returned
export const getRedirectResults = () => {
  (async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDoc(response.user);
    }
  })();
};

// Email and Password Sign Up, Sign In, & Sign Out
export const signUpWithEmailAndPW = async (email, password) => {
  if (!email || !password) return;
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

export const signInWithEmailAndPW = async (email, password) => {
  if (!email || !password) return;
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
