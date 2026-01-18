export default function Signin() {
  return (
    <main className='flex-1 flex! justify-center items-center'>
      <form action='http://localhost:5000/signin' method='POST'>
        <label htmlFor='username'>Username</label>
        <input
          className='bg-white!'
          type='text'
          id='username'
          name='username'
        />
        <label htmlFor='password'>Password</label>
        <input
          className='bg-white!'
          type='password'
          id='password'
          name='password'
        />
        <button className='cursor-pointer'>Sign-in</button>
      </form>
    </main>
  );
}
