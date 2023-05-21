import { useState, useEffect } from 'react';
import '../styles/main.scss';
import {
  signUpWithGooglePopup,
  signUpWithGoogleRedirect,
  signUpWithEmailAndPW,
  getRedirectResults,
  createUserDoc,
} from '../utils/firebase/firebase.utils';

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUp() {
  const [error, setError] = useState('null');
  const [formFields, setFormFields] = useState(defaultFormFields);
  // destructuring all form inputs into var formFields
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  // handle submission of form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // call signUpWithEmailAndPassword firebase function with email & password
      const user = await signUpWithEmailAndPW(email, password);

      let displayName = firstName + ' ' + lastName;

      // call createUserDoc function & pass in displayName
      await createUserDoc(user, { displayName });
    } catch (error) {
      if (error.error === 'auth/email-already-in-use') {
        setError('Email already in use');
      } else {
        setError('Signup error');
      }
    }
  };

  // updates formField values when input text changes
  const handleFormChange = (event) => {
    const { name, value } = event.target;

    // adds new "name: value" pair to existing formField elements
    setFormFields({ ...formFields, [name]: value });
  };

  // // after redirect login, Authorization remounts and this useEffect runs
  // // calls getRedirectResults function which gets the redirect's result
  // useEffect(() => {
  //   getRedirectResults();
  // }, []);

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="firstName"
            name="firstName"
            value={firstName}
            placeholder="First Name"
            required
            onChange={handleFormChange}
          />
          <input
            type="lastName"
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            required
            onChange={handleFormChange}
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            required
            onChange={handleFormChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            required
            onChange={handleFormChange}
          />
          <input
            type="Password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            required
            onChange={handleFormChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <button onClick={signUpWithGooglePopup}>Sign Up With Google Popup</button>
      <button onClick={signUpWithGoogleRedirect}>
        Sign Up With Google Redirect
      </button>

      <div>{error}</div>
    </div>
  );
}

export default SignUp;
