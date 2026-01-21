import { useState, type FormEvent } from 'react';
import { Navigate, useOutletContext } from 'react-router';
import { jwtDecode } from 'jwt-decode';

export default function Signin() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string[]>([]);
  const { isSignedIn, toggleSignIn } = useOutletContext<{
    isSignedIn: boolean;
    toggleSignIn: (flag: boolean) => void;
  }>();

  // Extracts token or error message after user attempts to sign in
  async function signInUser(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();

      if (typeof result.result !== 'undefined') {
        setErrorMsg(result.result.errors[0].msg);
      } else if (typeof result.token !== 'undefined') {
        localStorage.setItem('token', result.token);
        setErrorMsg(['']);
        toggleSignIn(true);

        const decoded = jwtDecode(result.token);
        localStorage.setItem('user', JSON.stringify(decoded));
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Un known error happened.');
      }
    }
  }

  if (isSignedIn) {
    return <Navigate to='/' />;
  } else {
    return (
      <main className='flex-1 flex! justify-center items-center text-white '>
        <form
          action='http://localhost:5000/signin'
          method='POST'
          className='flex-col flex'
          onSubmit={(e) => signInUser(e)}
        >
          <label htmlFor='username'>Username</label>
          <input
            className='bg-white! text-black'
            required
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='bg-white! text-black'
            type='password'
            value={password}
            id='password'
            required
            pattern='^(?=.*[A-Z])(?=.*\d).{6,}'
            title='Password must be 6+ chars, including at least one uppercase letter and number.'
          />
          <button className='cursor-pointer'>Sign-in</button>
          <h1>{errorMsg}</h1>
        </form>
      </main>
    );
  }
}
