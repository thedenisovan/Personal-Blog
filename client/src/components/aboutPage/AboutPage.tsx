export default function AboutPage() {
  return (
    <main className='dark:bg-slate-900 bg-gray-50 px-6 py-12 h-full'>
      <header className='flex flex-col items-center justify-center'>
        <div className='mb-8! animate-scale-in z-0 w-32 h-32 text-5xl shadow-2xl flex items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 text-white font-bold'>
          DD
        </div>
        <section className='animate-translate-up'>
          <h2 className='  text-gray-900 font-bold dark:text-white text-5xl text-center mb-6!'>
            Hi, I'm{' '}
            <span className='bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Dainis Dilevka{' '}
            </span>{' '}
            &#128075;
          </h2>
          <p className='dark:text-white text-center'>
            I'm a passionate web developer and creative thinker who loves
            building beautiful, functional experiences on the web.
          </p>
        </section>
      </header>
    </main>
  );
}
