import { useState } from 'react';
import { auth, signInWithGoogle, signInWithEmailAndPassword } from '../../firebaseConfig';
// import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../context/AuthContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { googleSignIn } = UserAuth();
    
    const handleGoogleSignIn = async () => {
        try {
            const { user } = await googleSignIn();
            console.log(user, "Logged in with Google");
        } catch (error) {
            console.log(error);
        }
    }

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
      <button onClick={() => alert('Implement Discord login')}>Login with Discord</button>
    </div>
  );
};

export default SignIn;
