import { useState, type FormEvent } from 'react';

export default function Signin() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function getSignInResponse(e: FormEvent) {
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

      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Un known error happened.');
      }
    }
  }

  return (
    <main className='flex-1 flex! justify-center items-center text-white '>
      <form
        action='http://localhost:5000/signin'
        method='POST'
        className='flex-col flex'
        onSubmit={(e) => getSignInResponse(e)}
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
      </form>
    </main>
  );
}
