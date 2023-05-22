import { useState, useEffect } from 'react';
import '../styles/main.scss';
// import {
//   signOutOfAcc,
// } from '../utils/firebase/firebase.utils';
import SignIn from './SignIn';
import SignUp from './SignUp';

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Authorization() {
  const [registered, setRegistered] = useState(true);

  // TODO (after MVP): move log out function to navbar
  // const handleLogout = async () => {
  //   await signOutOfAcc();
  // };

  return (
    <div>
      {registered ? <SignIn /> : <SignUp />}
      <div>
        {registered ? (
          <p>Haven't registered yet? </p>
        ) : (
          <p>Have an account? </p>
        )}

        <button onClick={() => setRegistered(!registered)}>
          {registered ? 'Sign Up' : 'Sign In'}
        </button>
      </div>
    </div>
  );
}

export default Authorization;
