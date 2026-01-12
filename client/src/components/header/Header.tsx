export default function Header() {
  return (
    <header className='border-b-2'>
      <ul className='flex justify-between items-center m-4'>
        <li className='max-w-15'>
          <h1>Dainis Dilevka</h1>
        </li>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='about'>About</a>
        </li>
        <li>
          <button>More</button>
        </li>
      </ul>
    </header>
  );
}
