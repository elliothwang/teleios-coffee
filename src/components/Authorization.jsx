import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.scss';
import {
  signUpWithGoogle,
  signUpWithEmail,
  signInWithEmail,
  signOutOfAcc,
} from '../utils/firebase/firebase.util';

function Authorization() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // should be if (password !== password2)
    if (!password) {
      setError('Passwords do not match');
    } else {
      setEmail('');
      setPassword('');
      // call signUpWithEmail firebase function with email & password
      const res = await signUpWithEmail(email, password);
      if (res.error) setError(res.error);
    }
  };

  const handleLogout = async () => {
    await signOutOfAcc();
  };

  return (
    <div>
      <div>
        {error ? <div>{error}</div> : null}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>
          {/* TODO: change this to change component, not url */}
          Already registered? <Link to="/login">Login</Link>
        </p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <button onClick={signUpWithGoogle}>Sign Up/In With Google</button>
    </div>
  );
}

export default Authorization;
